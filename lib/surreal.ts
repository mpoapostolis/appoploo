import fetch, { Headers } from "node-fetch";

const toBase64 = (text: string): string => {
  return Buffer.from(text, "binary").toString("base64");
};

export type Conf = {
  url: string;
  ns: string;
  db: string;
  auth: string;
};

export type SurrealType<T = any> = [
  {
    time: string;
    status: string;
    result?: T[];
  }
];

export type SurrealError = {
  status: string;
  msg: string;
};

function isEmpty(obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
}

function objToQuery(obj: any, joiner = ",") {
  return Object.keys(obj)
    .map((key) => `${key}='${obj[key]}'`)
    .join(` ${joiner} `);
}

async function f<T>(raw: string, conf: Conf) {
  const headers = new Headers({
    "Content-Type": "application/json",
    ns: conf.ns,
    db: conf.db,
  });

  headers.append("Content-Type", "application/json");
  headers.append("ns", conf.ns);
  headers.append("db", conf.db);
  headers.append("Authorization", `Basic ${toBase64(conf.auth)}`);

  const res = await fetch(conf.url, {
    method: "POST",
    headers: headers,
    body: raw,
  });

  const data = (await res.json()) as SurrealType<T>;

  return data?.at(0);
}

export class Surreal {
  conf: Conf;

  constructor(obj: Conf) {
    this.conf = obj;
  }

  async rawQuery<T>(q: string) {
    return await f<T>(q, this.conf);
  }

  select<T>(selections: string[] | "*") {
    return {
      from: (table: string) => {
        return {
          where: async (obj: Record<string, any> = {}) => {
            const selected = selections === "*" ? "*" : selections.join(", ");
            const where = isEmpty(obj) ? "" : `WHERE ${objToQuery(obj, "and")}`;

            return await f<T>(
              `SELECT ${selected}  FROM ${table} ${where}`,
              this.conf
            );
          },
        };
      },
    };
  }

  create<T = unknown>(table: string) {
    return {
      set: async (obj: Record<string, any> = {}) => {
        const set = isEmpty(obj)
          ? ""
          : "SET " + objToQuery(obj) + ", createdAt = time::now()";
        return await f<T>(`CREATE ${table} ${set}`, this.conf).catch(
          console.error
        );
      },
    };
  }

  update<T = unknown>(table: string): Record<string, any> {
    let where = "";
    return {
      set: async (setObj: Record<string, any> = {}) => {
        const set = isEmpty(setObj)
          ? ""
          : "SET " + objToQuery(setObj) + ", modifiedAt = time::now()";
        return await f<T>(`UPDATE ${table} ${set}`, this.conf);
      },

      where: (whereObj: Record<string, any> = {}) => {
        where = isEmpty(whereObj) ? "" : `WHERE ${objToQuery(whereObj, "and")}`;
        return {
          set: async (setObj: Record<string, any> = {}) => {
            const set = isEmpty(setObj)
              ? ""
              : "SET " + objToQuery(setObj) + ", modifiedAt = time::now()";
            return await f<T>(`UPDATE ${table} ${where} ${set}`, this.conf);
          },
        };
      },
    };
  }

  delete<T = unknown>(table: string): Record<string, any> {
    return {
      where: async (whereObj: Record<string, any> = {}) => {
        const where = isEmpty(whereObj)
          ? ""
          : `WHERE ${objToQuery(whereObj, "and")}`;
        return await f<T>(`DELETE ${table} ${where}`, this.conf);
      },
    };
  }
}

export const ops = {
  gt: (key: string, b: number) => ({
    key: `${key} > ${b}`,
  }),
  lt: (key: string, b: number) => ({
    key: `${key} < ${b}`,
  }),
  eq: (key: string, b: number) => ({
    key: `${key} = ${b}`,
  }),
};

const SURREAL = process.env["SURREAL"] as string;

export const surreal = new Surreal({
  url: "http://161.35.126.199:8000/sql",
  ns: "ns",
  db: "db",
  auth: SURREAL,
});

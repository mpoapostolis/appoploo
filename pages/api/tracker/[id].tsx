import { NextApiRequest, NextApiResponse } from "next";
import { getVehicles } from "../../../lib/vehicles";
import { withSessionRoute } from "../../../lib/withSession";
import { subDays } from "date-fns";
import myDb from "../../../helpers/mongo";

const d = new Date();
const path = [
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 1).getTime(),
    lat: 23.2800293,
    lng: 38.4191664,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 2).getTime(),
    lat: 24.1809082,
    lng: 37.9051995,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 3).getTime(),
    lat: 23.1097412,
    lng: 37.5707052,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 4).getTime(),
    lat: 22.5054932,
    lng: 37.7098994,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 5).getTime(),
    lat: 22.401123,
    lng: 37.8705172,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 6).getTime(),
    lat: 22.2802734,
    lng: 38.285625,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 7).getTime(),
    lat: 22.3406982,
    lng: 38.6597777,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 8).getTime(),
    lat: 23.0493164,
    lng: 38.8482644,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 9).getTime(),
    lat: 23.7249756,
    lng: 38.878205,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 10).getTime(),
    lat: 24.1479492,
    lng: 38.6897975,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 11).getTime(),
    lat: 24.6368408,
    lng: 38.294248,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 12).getTime(),
    lat: 24.9609375,
    lng: 37.8054439,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 13).getTime(),
    lat: 24.6038818,
    lng: 37.4617785,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 14).getTime(),
    lat: 23.571167,
    lng: 37.2959055,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 15).getTime(),
    lat: 22.8131104,
    lng: 37.2434484,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 16).getTime(),
    lat: 22.4121094,
    lng: 37.3963461,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 17).getTime(),
    lat: 22.1429443,
    lng: 37.6838203,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 18).getTime(),
    lat: 22.0001221,
    lng: 37.9875044,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 19).getTime(),
    lat: 21.9122314,
    lng: 38.3761154,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 20).getTime(),
    lat: 22.0770264,
    lng: 38.8568201,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 21).getTime(),
    lat: 22.8131104,
    lng: 39.044786,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 22).getTime(),
    lat: 23.4008789,
    lng: 39.125799,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 23).getTime(),
    lat: 24.0325928,
    lng: 38.9636801,
  },
  {
    id: 1,
    event: "Start",
    desc: "OverLimit",
    time: subDays(d, 24).getTime(),
    lat: 24.5928955,
    lng: 38.7326611,
  },
];

export default withSessionRoute(vehicles);

async function vehicles(req: NextApiRequest, res: NextApiResponse) {
  const db = await myDb();
  const xx = await db.collection("points").find().toArray();
  res.status(200).json(xx);
}

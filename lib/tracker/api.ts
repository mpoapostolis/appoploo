import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().required(),
  IMEI: yup.number().required().positive().integer(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

export async function createDeviceTracker(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = schema.validate(req.body);
  console.log(body);

  res.status(200).json({});
}

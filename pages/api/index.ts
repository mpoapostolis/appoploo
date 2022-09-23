import { NextApiRequest, NextApiResponse } from "next";
import { surreal } from "../../lib/surreal";

export default async function trackers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // generate  array of 100
  //   Promise.all([
  //     Array(200)
  //       .fill("")
  //       .forEach(async () => {
  //         const y = await surreal.create("gamiades").set({
  //           name: "Gamiades",
  //           description: "Gamiades is a game development company",
  //           url: "https://gamiades.com",
  //           logo: "https://gamiades.com/logo.png",
  //           category: "Game Development",
  //           country: "Greece",
  //           city: "Athens",
  //           address: "Kifissias 123",
  //         });
  //       }),
  //   ]);
  //   console.log(222);
  //   const x = await surreal.create("gamiades:mpoapostolis").set();
  const x = await surreal.select("*").from("gamiades:mpoapostolis").where();
  res.json(x);
}

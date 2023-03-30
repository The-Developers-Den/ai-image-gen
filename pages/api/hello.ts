// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await openai.createImage({
    prompt: "A dog catching frisbee",
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;
  res.status(200).json({ name: image_url });
}

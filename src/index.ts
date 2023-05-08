import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import httpsProxyAgent from 'https-proxy-agent';

const { HttpsProxyAgent } = httpsProxyAgent;


const httpsProxy = process.env.HTTPS_PROXY || process.env.ALL_PROXY;

console.log(httpsProxy, process.env.OPENAI_API_KEY);
dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY},
  {
    baseOptions: {
      httpsAgent: new HttpsProxyAgent(httpsProxy as string),
      adapter: null
    }
  }
);



const res = await model.call(
  "What's a good idea for an application to build with GPT-3?"
);

console.log(res);

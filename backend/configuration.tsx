import 'dotenv/config';
import { Configuration } from "openai";

const configuration = new Configuration({
    organization: "org-alqhHIyU7VVjKn1QhPUUDzL1",
    apiKey: process.env.OPENAI_API_KEY,
});

export default configuration;
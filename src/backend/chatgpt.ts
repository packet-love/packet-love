import { OpenAIApi } from "openai";
import configuration from "./configuration";

class Chatgpt {

    openai: OpenAIApi;

    constructor() {
        this.openai = new OpenAIApi(configuration);
    }
    
    async listEngines() {
        const response = await this.openai.listEngines();
        console.log(response);
    }
}
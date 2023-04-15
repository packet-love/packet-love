import { OpenAIApi } from "openai";
import configuration from "./configuration";
import axios, { AxiosInstance } from "axios";

class Chatgpt {

    openai: OpenAIApi;
    instance: AxiosInstance;

    constructor() {
        this.openai = new OpenAIApi(configuration);
        this.instance = axios.create({
            baseURL: 'https://api.openai.com/v1',
            timeout: 2000,
            headers: {}
        });
    }
    
    async listEngines() {
        const response = await this.openai.listEngines();
        console.log(response);
    }
}
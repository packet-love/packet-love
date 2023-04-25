import { OpenAIApi, Configuration } from "openai";
import * as dotenv from 'dotenv';
dotenv.config();


export class Chatgpt {
    
    private openai: OpenAIApi;

    constructor() {
        const configuration = new Configuration({
            organization: "org-G46Elt8wKFzUqNSnEhov5RkQ",
            apiKey: process.env.OPENAI_API_KEY,
        });

        this.openai = new OpenAIApi(configuration);

    }

    createChat= async(promt: string) => {
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: promt },
                { role: "system", content: `나와 상대방에 대한 정보를 토대로 내가 상대방의 마음을 얻을 수 있는 공략법을 json (ex. { "response" : [ "1. 답변", "2. 답변" ] } ) 안에 담아서 5개 목록을 "1. 답변" 형태로 정리해서 전달해줘.` }
            ]
        });

        return response.data.choices[0].message.content;
    }

    // 카톡 대화 분석
    // analyzeConversation = async(file: ) => {
    //
    //
    // }
}
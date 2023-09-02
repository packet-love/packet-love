import { OpenAIApi, Configuration } from "openai";
import * as dotenv from 'dotenv';
dotenv.config();


export class Chatgpt {
    
    private openai: OpenAIApi;

    constructor() {
        const configuration = new Configuration({
            organization: "org-kLarpKe29xQprigsqBdWbLHR",
            apiKey: process.env.OPENAI_API_KEY,
        });

        this.openai = new OpenAIApi(configuration);

    }

    // 공략법 생성
    createChat= async(promt: string) => {
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: promt },
                { role: "system", content: `나와 상대방에 대한 정보를 토대로 내가 상대방의 마음을 얻을 수 있는 공략법을  5개 목록을 숫자 글머리 기호 형태로 정리해서 친구처럼 친근한 말투로 전달해줘.(ex. "1. 답변", "2. 답변" )` }
            ]
        });

        return response.data.choices[0].message.content;
    }

    // 나와 상대방 정보 요약
    getPersonalInfo = async(promt: string) => {
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: promt },
                { role: "system", content: `정보, 전공, 성격, 취미 및 MBTI 특징을 세 문장으로 정리해서 알려줘. 각각의 정보는 "1. 답변" 형태로 정리해서 친구처럼 친근한 말투로 전달해줘. (ex. "1. 답변", "2. 답변" )` }
            ]
        });

        return response.data.choices[0].message.content;
    }

    // 카톡 대화 분석
    analyzeConversation = async(promt: string) => {
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: promt },
                { role: "system", content: `내가 "me"고 상대방이 "target"일 때 나와 상대방이 나눈 대화 JSON을 토대로 나를 향한 상대방의 호감도 및 마음을 분석해줘. 각각의 정보는 "1. 답변" 형태로 정리해서 3개만 친구처럼 친근한 말투로 전달해줘. (ex. "1. 답변", "2. 답변" )` }
            ]
        });

        return response.data.choices[0].message.content;
    }

    // 소개팅 시 대화 및 말투 개선
    improveSentence = async(promt: string) => {
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: promt },
                { role: "system", content: `상대방 정보를 토대로 둘의 관계를 발전시키는 방향의 가장 자연스러운 답변을 추천해줘. 답변은 1개만 줄글 형태로 친구처럼 친근한 말투로 전달해줘.` }
            ]
        });

        return response.data.choices[0].message.content;
    }
}
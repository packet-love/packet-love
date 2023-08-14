import { Chatgpt } from "./chatgpt";
import {Gender, KakaoChat, MBTI, PersonInfo, Tone} from "./interfaces";
import {inputMyPersonInfo, inputTargetPersonInfo, inputTargetSentence} from "../utils";

export class ChatgptController {
    static instance: Chatgpt;

    constructor() {
        ChatgptController.instance = new Chatgpt();
    }

    async create(req, res) : Promise<void> {
        const myPersonInfo : PersonInfo = req.body.me;
        const targetPersonInfo : PersonInfo = req.body.target;

        const myPromt = inputMyPersonInfo(myPersonInfo);
        const targetPromt = inputTargetPersonInfo(targetPersonInfo);
        const totalPromt = myPromt + targetPromt;

        const solutions = await ChatgptController.instance.createChat(totalPromt);

        const response = {
            "solutions": solutions.split('\n'),
        };

        return await res.send(response);
    }

    async analyze(req, res) : Promise<void> {
        const conversations = req.body.conversations;

        const analysis = await ChatgptController.instance.analyzeConversation(JSON.stringify(conversations));
        const response = {
            "analysis": analysis.split('\n')
        }
        return await res.send(response);
    }

    async improvement(req, res) : Promise<void> {
        const { sentence, tone } : KakaoChat = req.body;
        const promt = inputTargetSentence(sentence, tone);
        const response = await ChatgptController.instance.improveSentence(promt);
        return await res.send({"response" : response });
    }
}


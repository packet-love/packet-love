import { Chatgpt } from "./chatgpt";
import {Gender, MBTI, PersonInfo} from "./interfaces";
import {inputTargetPersonInfo} from "../utils";

export class ChatgptController {
    static instance: Chatgpt;

    constructor() {
        ChatgptController.instance = new Chatgpt();
    }

    async create(req, res) : Promise<void> {
        const targetPersonInfo : PersonInfo = req.body;

        const promt = inputTargetPersonInfo(targetPersonInfo);

        await ChatgptController.instance.createChat(promt);

    }
}


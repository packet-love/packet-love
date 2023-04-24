import { Chatgpt } from "./chatgpt";
import {Gender, MBTI, PersonInfo} from "./interfaces";
import {inputMyPersonInfo, inputTargetPersonInfo} from "../utils";

export class ChatgptController {
    static instance: Chatgpt;

    constructor() {
        ChatgptController.instance = new Chatgpt();
    }

    async create(req, res) : Promise<void> {
        const myPersonInfo : PersonInfo = req.body[0];
        const targetPersonInfo : PersonInfo = req.body[1];

        const promt = inputMyPersonInfo(myPersonInfo) + inputTargetPersonInfo(targetPersonInfo);

        const response = await ChatgptController.instance.createChat(promt);

        return await res.send(response);

    }
}


import { Chatgpt } from "./chatgpt";
import { Gender, MBTI, PersonInfo } from "./interfaces";
import { inputMyPersonInfo, inputTargetPersonInfo } from "../utils";

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

        const getMyInfo = await ChatgptController.instance.getPersonalInfo(myPromt);

        const getTargetInfo = await ChatgptController.instance.getPersonalInfo(targetPromt);

        const response = { "solutions": solutions, "myInfo": getMyInfo, "targetInfo": getTargetInfo };

        return await res.send(response);
    }
}


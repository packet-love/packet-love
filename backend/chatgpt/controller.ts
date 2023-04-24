import { Chatgpt } from "./chatgpt";

export class ChatgptController {


    public static async create(req, res) : Promise<void> {
        const { promt } = req.body;
        const instance = new Chatgpt();
        await instance.createChatCompletion(promt);        

    }   
}


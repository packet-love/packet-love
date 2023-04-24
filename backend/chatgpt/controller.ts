import { Chatgpt } from "./chatgpt";

export class ChatgptController {

    instance: Chatgpt;

    constructor() {
        this.instance = new Chatgpt();
    }

    public static async create(req, res) : Promise<void> {
        

    }   
}


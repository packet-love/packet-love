import axios from "axios";
import {PersonInfo} from "../state/states";


interface GetStrategyResponse {
  solutions: string[]
}

interface GetConversations {
  analysis: string[]
}


class ApiClient {

  async getStrategy(
    me: PersonInfo,
    target: PersonInfo,
  ): Promise<GetStrategyResponse> {
    const res = await axios.post<GetStrategyResponse>("http://3.39.255.140:8000/", {
      "me": me,
      "target": target
    });

    return res.data;
  }

  async getConversations(
    conversations: any[]
  ): Promise<GetConversations> {
    const res = await axios.post<GetConversations>("http://3.39.255.140:8000/analyze", {
      "conversations": conversations
    });
    return res.data;
  }
}


const apiClient = new ApiClient();

export default apiClient;
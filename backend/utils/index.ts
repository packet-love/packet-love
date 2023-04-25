import { PersonInfo } from "../chatgpt/interfaces";

export const inputTargetPersonInfo = (personInfo: PersonInfo) : string => `내가 좋아하는 상대방의 정보를 알려줄께. ${personInfo.name}은 ${personInfo.age}살이고, ${personInfo.major}를 전공하고 있어. mbti는 ${personInfo.mbti}이고 취미는 ${personInfo.hobby}이며 이상형은 ${personInfo.idol}이야.\n`;
export const inputMyPersonInfo = (personInfo: PersonInfo) : string => `내 정보를 알려줄께. 나는 ${personInfo.age}살이고, ${personInfo.major}를 전공하고 있어. mbti는 ${personInfo.mbti}이고 취미는 ${personInfo.hobby}이며 이상형은 ${personInfo.idol}이야.\n`;

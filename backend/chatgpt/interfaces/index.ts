export enum Gender {
    MALE = '남자',
    FEMALE = '여자'
};

export enum MBTI {
    ENTJ = 'ENTJ',
    ENTP = 'ENTP',
    ENFJ = 'ENFJ',
    ENFP = 'ENFP',
    ESTJ = 'ESTJ',
    ESTP = 'ESTP',
    ESFJ = 'ESFJ',
    ESFP = 'ESFP',
    INTJ = 'INTJ',
    INTP = 'INTP',
    INFJ = 'INFJ',
    INFP = 'INFP',
    ISFJ = 'ISFJ',
    ISTP = 'ISTP',
    ISTJ = 'ISTJ',
    ISFP = 'ISFP',
};

export interface PersonInfo {
    name: string,
    gender: Gender,
    age: number,
    major: string,
    idol: string,
    mbti: MBTI,
    hobby: string,
};

// export interface SpecialInfo {
//
// }
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

export enum Tone {
    BRIGHT = '밝은',
    CHIC = '시크',
    CUTE = '귀여운',
    ELEGANT = '우아한',
    FEMININE = '여성스러운',
    LOVELY = '사랑스러운',
}

export interface PersonInfo {
    name: string,
    gender: Gender,
    age: number,
    major: string,
    idol: string,
    mbti: MBTI,
    hobby: string,
};

export interface KakaoChat {
    sentence: string,
    tone: Tone,
}
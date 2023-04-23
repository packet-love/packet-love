import {atom, RecoilState} from "recoil";

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
  TSFP = 'TSFP',
};

export interface PersonInfo {
  isFilled: boolean,
  age: number,
  gender: Gender,
  major: string,
  idol: string,
  mbti: MBTI,
};

export class PersonInfoCreator {
  static empty(): PersonInfo {
    return {
      isFilled: false,
      age: 0,
      gender: Gender.FEMALE,
      major: '',
      idol: '',
      mbti: MBTI.ENTJ
    }
  }
}

export const MyState = atom<PersonInfo>({
  key: 'myState',
  default: {
    isFilled: false,
    age: 0,
    gender: Gender.FEMALE,
    major: '',
    idol: '',
    mbti: MBTI.ENTJ
  },
});

export const TargetState = atom<PersonInfo>({
  key: 'targetState',
  default: {
    isFilled: false,
    age: 0,
    gender: Gender.FEMALE,
    major: '',
    idol: '',
    mbti: MBTI.ENTJ
  },
});



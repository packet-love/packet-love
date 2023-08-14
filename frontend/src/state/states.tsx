import {atom, RecoilState} from "recoil";

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
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
  isFilled: boolean,
  age: number,
  gender: Gender,
  major: string,
  idol: string,
  mbti: MBTI,
  hobby: string,
};

export class PersonInfoCreator {
  static empty(): PersonInfo {
    return {
      isFilled: false,
      age: 0,
      gender: Gender.FEMALE,
      major: '',
      idol: '',
      mbti: MBTI.ENTJ,
      hobby: '',
    }
  }
}

export const MyInfo = atom<PersonInfo>({
  key: 'myState',
  default: {
    isFilled: false,
    age: 0,
    gender: Gender.FEMALE,
    major: '',
    idol: '',
    mbti: MBTI.ENTJ,
    hobby: '',
  },
});

export const TargetInfo = atom<PersonInfo>({
  key: 'targetState',
  default: {
    isFilled: false,
    age: 0,
    gender: Gender.FEMALE,
    major: '',
    idol: '',
    mbti: MBTI.ENTJ,
    hobby: '',
  },
});



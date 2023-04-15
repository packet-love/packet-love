import React, {useState} from "react";
import {Button, Input} from "antd";
import {Gender, MBTI} from "../state/states";

const MyEditPage = () => {
  const [inputAge, setInputAge] = useState<number>(0);
  const [inputGender, setInputGender] = useState<Gender | null>(Gender.MALE);
  const [inputMajor, setInputMajor] = useState<string | null>('');
  const [inputIdol, setInputIdol] = useState<string | null>('');
  const [inputMbti, setInputMbti] = useState<MBTI | null>(MBTI.ENTJ);

  const validateInput = () => {
  }

  return (
    <div>
      <Input placeholder="성별"/>
      <Input placeholder="나이"/>
      <Input placeholder="전공"/>
      <Input placeholder="이상형"/>
      {
        Object.keys(MBTI).map((mbti) => (
          <Button>{mbti}</Button>
        ))
      }
    </div>
  )
}

export default MyEditPage;
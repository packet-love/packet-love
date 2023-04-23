import React, {useState} from "react";
import {Button, Col, Input, Row} from "antd";
import {Gender, MBTI, MyState} from "../state/states";
import {useRecoilState} from "recoil";

const MyEditPage = () => {
  const [inputAge, setInputAge] = useState<number | null>(null);
  const [inputGender, setInputGender] = useState<Gender | null>(null);
  const [inputMajor, setInputMajor] = useState<string | null>(null);
  const [inputIdol, setInputIdol] = useState<string | null>(null);
  const [inputMbti, setInputMbti] = useState<MBTI | null>(null);

  const [myState, setMyState] = useRecoilState(MyState);

  const completeInput = () => {
    console.log(inputAge);
    console.log(inputGender);
    console.log(inputMajor);
    console.log(inputIdol);
    console.log(inputMbti);

    if (!inputAge || !inputGender || !inputMajor || !inputIdol || !inputMbti) {
      console.log('모든 값을 입력해주세요');
      return;
    }

    setMyState({
      isFilled: true,
      age: inputAge,
      gender: inputGender,
      major: inputMajor,
      idol: inputIdol,
      mbti: inputMbti
    });
  }

  return (
    <div>
      <Input placeholder="나이" onChange={(v) => setInputAge(Number(v.target.value))}/>

      <Row>
        <Col span={12}>
          <Button block onClick={() => setInputGender(Gender.MALE)}>{Gender.MALE}</Button>
        </Col>
        <Col span={12}>
          <Button block onClick={() => setInputGender(Gender.FEMALE)}>{Gender.FEMALE}</Button>
        </Col>
      </Row>
      <Input placeholder="전공" onChange={(e) => setInputMajor(e.target.value)}/>
      <Input placeholder="이상형" onChange={(e) => setInputIdol(e.target.value)}/>
      <Row>
        {
          Object.keys(MBTI).map((mbti) => (
            <Col span={6}>
              <Button block onClick={() => setInputMbti(mbti as MBTI)}>{mbti}</Button>
            </Col>
          ))
        }
      </Row>
      <Button block onClick={() => completeInput()}>완료</Button>
    </div>
  )
}

export default MyEditPage;
import React, {useState} from "react";
import {Button, Typography} from "antd";
import {Gender, MBTI, MyInfo, TargetInfo} from "../state/states";
import {useRecoilState} from "recoil";
import MbtiForm from "../components/mbti-form";
import TextForm from "../components/text-form";
import GenderForm from "../components/gender-form";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  padding: 15px
`;

const EditPage = () => {
  const navigate = useNavigate();

  const [inputMyAge, setInputMyAge] = useState<number | null>(null);
  const [inputMyGender, setInputMyGender] = useState<Gender | null>(null);
  const [inputMyMajor, setInputMyMajor] = useState<string | null>(null);
  const [inputMyIdol, setInputMyIdol] = useState<string | null>(null);
  const [inputMyMbti, setInputMyMbti] = useState<MBTI | null>(null);
  const [inputMyHobby, setInputMyHobby] = useState<string | null>(null);

  const [inputTargetAge, setInputTargetAge] = useState<number | null>(null);
  const [inputTargetGender, setInputTargetGender] = useState<Gender | null>(null);
  const [inputTargetMajor, setInputTargetMajor] = useState<string | null>(null);
  const [inputTargetIdol, setInputTargetIdol] = useState<string | null>(null);
  const [inputTargetMbti, setInputTargetMbti] = useState<MBTI | null>(null);
  const [inputTargetHobby, setInputTargetHobby] = useState<string | null>(null);

  const [myState, setMyState] = useRecoilState(MyInfo);
  const [targetState, setTargetState] = useRecoilState(TargetInfo);

  return (
    <div>
      <div>
        <Container>
          <Typography.Title level={3}>내 정보</Typography.Title>
        </Container>
        <TextForm placeholder="나이" onChange={(v) => setInputMyAge(Number(v))}/>

        <GenderForm onGenderChange={(v) => setInputMyGender(v)}/>
        <TextForm placeholder="전공" onChange={(v) => setInputMyMajor(v)}/>
        <MbtiForm onMbtiChange={(mbti) => setInputMyMbti(mbti)}/>
        <TextForm placeholder="이상형" onChange={(v) => setInputMyIdol(v)}/>
        <TextForm placeholder="취미" onChange={(v) => setInputMyHobby(v)}/>

      </div>

      <div>
        <Container>
          <Typography.Title level={3}>상대 정보</Typography.Title>
        </Container>
        <TextForm placeholder="나이" onChange={(v) => setInputTargetAge(Number(v))}/>

        <GenderForm onGenderChange={(v) => setInputTargetGender(v)}/>
        <TextForm placeholder="전공" onChange={(v) => setInputTargetMajor(v)}/>
        <MbtiForm onMbtiChange={(mbti) => setInputTargetMbti(mbti)}/>
        <TextForm placeholder="이상형" onChange={(v) => setInputTargetIdol(v)}/>
        <TextForm placeholder="취미" onChange={(v) => setInputTargetHobby(v)}/>
      </div>

      <div style={{padding: '0 15px', marginTop: '10px', marginBottom: '80px'}}>
        <Button block onClick={() => {
          setMyState({
            isFilled: true,
            age: inputMyAge ?? 0,
            gender: inputMyGender ?? Gender.FEMALE,
            major: inputMyMajor ?? "",
            idol: inputMyIdol ?? "",
            mbti: inputMyMbti ?? MBTI.ENTJ,
            hobby: inputMyHobby ?? '',
          });

          setTargetState(
            {
              isFilled: true,
              age: inputTargetAge ?? 0,
              gender: inputTargetGender ?? Gender.FEMALE,
              major: inputTargetMajor ?? "",
              idol: inputTargetIdol ?? "",
              mbti: inputTargetMbti ?? MBTI.ENTJ,
              hobby: inputTargetHobby ?? '',
            }
          )

          navigate("/");
        }}>완료</Button>
      </div>
    </div>
  )
}

export default EditPage;
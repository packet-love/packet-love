import React from "react";
import {Gender, PersonInfo} from "../state/states";
import {Card, Col} from "antd";
import styled from "styled-components";

interface PersonInfoCardProps {
  title: string,
  personInfo: PersonInfo
}

const Text = styled.p`
  margin: 0;
  font-size: 18px;
`;

const PersonInfoCard: React.FC<PersonInfoCardProps> = ({title, personInfo}) => {

  return (
    <>
      <Col span={12}>
        <div style={{padding: '10px'}}>
          <Card title={title}>
            <div style={{fontSize: '18px'}}>
              <Text>💘 성별 : {personInfo.gender == Gender.MALE ? '남자' : '여자'}</Text>
              <Text>⏳ 나이 : {personInfo.age}</Text>
              <Text>🧩 MBTI : {personInfo.mbti}</Text>
              <Text>📖 전공 : {personInfo.major}</Text>
              <Text>💞 이상형 : {personInfo.idol}</Text>
              <Text>🔥 취미 : {personInfo.hobby}</Text>
            </div>
          </Card>
        </div>
      </Col>
    </>
  );
}

export default PersonInfoCard;
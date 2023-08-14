import {Button, Col, Row} from "antd";
import {Gender} from "../state/states";
import React, {useState} from "react";

interface GenderFormProps {
  onGenderChange: (gender: Gender) => void
}

const GenderForm: React.FC<GenderFormProps> = ({onGenderChange}) => {
  const [selectedGender, selectGender] = useState<Gender | null>(null);

  return (
    <Row style={{padding: '10px'}}>
      {
        Object.keys(Gender).map((gender) => (
          <Col span={12} style={{padding: '5px 5px'}}>
            {
              selectedGender === gender ?
                <Button block
                        style={{
                          backgroundColor: '#f566af',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        size="large"
                        onClick={() => {
                          selectGender(gender as Gender);
                          onGenderChange(gender as Gender);
                        }}
                >{gender === Gender.MALE ? '남자' : '여자'}</Button>
                :
                <Button block
                        type="dashed"
                        size="large"
                        onClick={() => {
                          selectGender(gender as Gender);
                          onGenderChange(gender as Gender);
                        }}
                >{gender === Gender.MALE ? '남자' : '여자'}</Button>
            }
          </Col>
        ))
      }
    </Row>
  );
}

export default GenderForm;
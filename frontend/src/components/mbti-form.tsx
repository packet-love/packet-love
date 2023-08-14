import {MBTI} from "../state/states";
import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "antd";

interface MbtiFormProps {
  onMbtiChange: (mbti: MBTI) => void
}

const MbtiForm: React.FC<MbtiFormProps> = ({onMbtiChange}: MbtiFormProps) => {
  const [selectedMbti, selectMbti] = useState<MBTI | null>(null);
  const [hoverMbti, setHoverMbti] = useState<MBTI|null>(null);


  return (
    <div style={{padding: '10px'}}>
      <Row style={{justifyContent: 'space-between'}}>

        {
          Object.keys(MBTI).map((mbti) => (
            <Col span={6} style={{padding: '5px 5px'}}>
              {
                selectedMbti === mbti ?
                  <Button block
                          style={{
                            backgroundColor: '#f566af',
                            color: 'white',
                            fontWeight: 'bold',
                          }}
                          size="large"
                          onClick={() => {
                            selectMbti(mbti as MBTI);
                            onMbtiChange(mbti as MBTI);
                          }}
                  >{mbti}</Button>
                  :
                  <Button block
                          type="dashed"
                          size="large"
                          onClick={() => {
                            selectMbti(mbti as MBTI);
                            onMbtiChange(mbti as MBTI);
                          }}
                  >{mbti}</Button>
              }
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default MbtiForm;
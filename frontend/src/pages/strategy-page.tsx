import {useRecoilState} from "recoil";
import {Gender, MyInfo, TargetInfo} from "../state/states";
import apiClient from "../api/apis";
import {useEffect, useState} from "react";
import {Button, Card, Image} from "antd";
import TypingText from "../components/typing-text";
import {useNavigate} from "react-router-dom";

const StrategyPage = () => {
  const [myInfo, setMyInfo] = useRecoilState(MyInfo);
  const [targetInfo, setTargetInfo] = useRecoilState(TargetInfo);
  const [step, setStep] = useState(0);
  const [texts, setTexts] = useState(
    [
      `안녕 ~ 나는 큐피드야 너의 사랑의 짝을 찾아주기 위해서 왔어 ...`,
      `너의 나이는 ${myInfo.age} 이고 ${myInfo.idol} 같은 사람을 좋아하는구나`,
      `너는 ${targetInfo.age}살의 ${targetInfo.gender === Gender.MALE ? '남자' : '여자'}를 공략해보려고 하는구나?`,
      `흐음 ... 쉽지는 않겠지만 내가 한번 분석해 볼게 ... !`,
    ]
  );
  const [textComplete, setTextComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const next = async () => {
    setTextComplete(false);

    if (step === texts.length - 1) {
      console.log("hello??");
      setIsLoading(true);
      const results = await apiClient.getStrategy(myInfo, targetInfo);
      setTexts([...texts, ...results.solutions.filter(v => v != '')]);
      setIsLoading(false);
      setTextComplete(true);
    }
    setStep(step + 1);
  }


  useEffect(() => {
    setStep(0);
  }, [])

  return (
    <div>

      <div style={{padding: '10px'}}>
        <div style={{textAlign: 'center', margin: '10px 0 20px 0'}}>
          <Image src={"/images/cupid.gif"} style={{borderRadius: '25px', overflow: 'hidden', border: '1px solid #f0f0f0', padding: '25px', backgroundColor: 'white'}}/>
        </div>

        <Card
          title={"💘 사랑의 큐피드"}
          extra={
            textComplete ? <Button type={"primary"} onClick={() => next()}>다음</Button> : <></>
          }>
          <TypingText text={isLoading ? '분석중이야 ... 잠시만 기다려줘 ... !' : texts[step]}
                      onComplete={() => {
                        if (!isLoading) {
                          setTextComplete(true);
                        }
                      }}
                      speed={30} color={'black'} fontSize={'20px'}/>
        </Card>

        <div style={{textAlign: 'center', marginTop: '15px'}}>
          <Button onClick={() => navigate("/")}>돌아가기</Button>
        </div>
      </div>
    </div>
  );
}

export default StrategyPage;
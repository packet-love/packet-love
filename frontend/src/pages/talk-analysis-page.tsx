import {useState} from "react";
import TextForm from "../components/text-form";
import {Avatar, Button, List} from "antd";
import apiClient from "../api/apis";
import {useNavigate} from "react-router-dom";


interface Conversation {
  me?: undefined | string | null,
  target?: undefined | string | null,
}

const TalkAnalysisPage = () => {
  const [inputConversations, setInputConversations] = useState<Conversation[]>(
    [
      // @ts-ignore
      {"me": "",}
    ]
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [resultAnalysis, setResultAnalysis] = useState<string[]>([]);
  const navigate = useNavigate();

  const addInputConversations = async () => {

    if (inputConversations.length % 2 === 0) {
      setInputConversations([...inputConversations, {"me": ""}])
    } else {
      setInputConversations([...inputConversations, {"target": ""}])
    }
  }

  const analyzeTalk = async () => {
    console.log(inputConversations);
    setIsAnalyzing(true);

    const result = await apiClient.getConversations(inputConversations);
    console.log(result);

    setIsComplete(true);
    setResultAnalysis(result.analysis.filter(v => v !== ''));
  };

  return (
    <div>
      {
        inputConversations.map((conversation, index) => <>
            <TextForm
              key={index}
              disabled={isAnalyzing}
              placeholder={index % 2 === 0 ? '나' : '상대'}
              addOnBefore={index % 2 === 0 ? '나' : '상대'}
              onChange={(v) => {
                const copiedConversations = inputConversations;

                if (index % 2 === 0) {
                  copiedConversations[index] = {"me": v};
                } else {
                  copiedConversations[index] = {"target": v};
                }

                setInputConversations([...copiedConversations]);
              }}/>
          </>
        )
      }

      {
        isComplete ? <></>
          :
          <div style={{padding: '15px'}}>
            {
              isAnalyzing ?
                <></>
                :
                <Button block onClick={() => {
                  addInputConversations();
                }}>대화 추가</Button>
            }

            <Button block type={"primary"}
                    style={{height: '50px', fontSize: '24px', marginTop: '20px'}}
                    onClick={() => {
                      analyzeTalk();
                    }}
            >{isAnalyzing ? '분석중 ...' : '분석하기'}</Button>
          </div>
      }

      {
        isComplete ?
          <>
            <div style={{padding: '15px'}}>
              <List
                itemLayout="horizontal"
                dataSource={resultAnalysis}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/images/cupid.gif"/>}
                      title={"큐피드"}
                      description={item}
                    />
                  </List.Item>
                )}
              />
            </div>
          </>
          :
          <></>
      }

      <div style={{textAlign: 'center', marginTop: '15px'}}>
        <Button onClick={() => navigate("/")}>돌아가기</Button>
      </div>

    </div>
  )
}

export default TalkAnalysisPage;
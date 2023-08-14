import styled from "styled-components";
import {Button, Col, Image, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {MyInfo, TargetInfo} from "../state/states";
import PersonInfoCard from "../components/person-info-card";


const MenuItemContainer = styled.div`
  padding: 12px;
`;

const MenuItemBox = styled.div`
`

const MenuItemText = styled.p`
  font-size: 24px;
  text-align: center;
`;

const MenuItem: React.FC<MenuItemProps> = ({title, path}) => {
  const navigate = useNavigate();

  return (
    <Col span={24}>
      <MenuItemContainer>
        <MenuItemBox>
          <Button
            block
            style={{height: '80px', fontSize: '18px'}}
            onClick={() => navigate(path)}>{title}</Button>
        </MenuItemBox>
      </MenuItemContainer>
    </Col>
  )
}


const HomeContainer = styled.div`
  width: 100%;
`;


interface MenuItemProps {
  title: string,
  path: string
}

const HomePage = () => {
  const [myInfo, setMyInfo] = useRecoilState(MyInfo);
  const [targetInfo, setTargetInfo] = useRecoilState(TargetInfo);

  return (
    <>
      <HomeContainer>
        <Row>
          <Col span={24}>
            <div style={{textAlign: 'center', margin: '10px 0 20px 0'}}>
              <Image src={"/images/cupid.gif"} style={{borderRadius: '25px', overflow: 'hidden', border: '1px solid #f0f0f0', padding: '25px', backgroundColor: 'white'}}/>
            </div>
          </Col>
          {
            myInfo.isFilled && targetInfo.isFilled ?
              <>
                <PersonInfoCard title="내 정보" personInfo={myInfo}/>
                <PersonInfoCard title="상대 정보" personInfo={targetInfo}/>
              </>
              :
              <MenuItem title={"1. 정보 입력하기"} path={"/edit"}/>
          }
          <MenuItem title={"2. 공략법 확인하기"} path={"/strategy"}/>
          <MenuItem title={"3. 카톡 분석하기"} path={"/kakaotalk"}/>
        </Row>
      </HomeContainer>
    </>
  )
};

export default HomePage;
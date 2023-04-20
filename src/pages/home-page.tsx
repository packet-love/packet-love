import styled from "styled-components";
import {Button, Col, Row} from "antd";
import {useLocation, useNavigate, useRoutes} from "react-router-dom";


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
    <div>
      <Button block onClick={() => navigate("/test")}>테스트페이지로 가는 버튼</Button>
      <MenuItemContainer>
        <MenuItemBox>
          <Button block onClick={() => navigate(path)}>{title}</Button>
        </MenuItemBox>
      </MenuItemContainer>
    </div>
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
  return (
    <>
      <HomeContainer>
        <Row>
          <Col span={12}>
            <MenuItem title={"1. 내 정보 입력하기"} path={"/edit/my"}/>
          </Col>
          <Col span={12}>
            <MenuItem title={"2. 상대 정보 입력하기"} path={"/edit/target"}/>
          </Col>
          <Col span={24}>
            <MenuItem title={"3. 공략법 확인하기"} path={"/"} />
          </Col>
          <Col span={24}>
            <MenuItem title={"3. 공략법 확인하기"} path={"/"} />
          </Col>
        </Row>
      </HomeContainer>
    </>
  )
};

export default HomePage;
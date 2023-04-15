import styled from "styled-components";
import {Col, Row} from "antd";


const MenuItemContainer = styled.div`
  padding: 12px;
`;

const MenuItemBox = styled.div`
  border-radius: 10px;
  border: 2px solid lightgray;
`

const MenuItemText = styled.p`
  font-size: 24px;
  text-align: center;
`;

const MenuItem: React.FC<MenuItemProps> = ({title, path}) => {
  return (
    <div>
      <MenuItemContainer>
        <MenuItemBox>
          <MenuItemText>{title}</MenuItemText>
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
            <MenuItem title={"1. 내 정보 입력하기"} path={"/"}/>
          </Col>
          <Col span={12}>
            <MenuItem title={"2. 상대 정보 입력하기"} path={"/"}/>
          </Col>
        </Row>
      </HomeContainer>
    </>
  )
};

export default HomePage;
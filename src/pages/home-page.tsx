import styled from "styled-components";
import {Button, Col, Row} from "antd";


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
  return (
    <div>
      <MenuItemContainer>
        <MenuItemBox>
          <Button block>{title}</Button>
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
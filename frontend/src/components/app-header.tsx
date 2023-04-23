import styled from "styled-components";

const AppHeaderTitle = styled.h3`
  margin: 0;
  text-align: center;
  color: hotpink;
  font-size: 14px;
`;

const AppHeader = () => {

  return (
    <>
      <div style={{padding: "4px 0", backgroundColor: "lightgray"}}>
        <AppHeaderTitle>Cupid - 너의 사랑을 찾아봐!</AppHeaderTitle>
      </div>
    </>
  );
}

export default AppHeader;
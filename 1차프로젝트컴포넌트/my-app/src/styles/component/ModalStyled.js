import styled from "styled-components";

export const Content = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: auto;
  max-width: 400px;
  height: 600px;
  padding: 20px;
  color: black;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalStyled = {
  Content,
  Overlay,
};

export default ModalStyled;

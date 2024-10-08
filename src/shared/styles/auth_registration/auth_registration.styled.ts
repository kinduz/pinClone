import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LogoStyled = styled.div`
    position: relative;
    & svg {
        color: var(--logo-color);
        font-size: 56px;
        animation: ${rotate} 10s linear infinite;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
    font-size: 20px;
    width: 100%;
`;

export const RegistrationTextStyled = styled.div`
  font-size: 12px;
  color: gray;
  display: flex;
  flex-direction: column;
  gap: 4px;
  a {
    color: gray;
    text-decoration: underline;
    cursor: pointer;
  }
`;

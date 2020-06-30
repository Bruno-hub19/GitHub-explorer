import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  margin-top: 70px;
  line-height: 56px;
  max-width: 460px;
  color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
  max-width: 700px;
  margin-top: 40px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 20px;
    color: #3a3a3a;
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;

    ${props =>
    props.hasError &&
    css`
        border-color: #ff5f5f;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 150px;
    height: 50px;
    border: 0;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    color: #fff;
    background: #04d361;
    transition: all 0.2s linear;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #ff5f5f;
  font-weight: bold;
  margin-top: 5px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 3px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    border-left: 5px solid #a8a8b3;
    transition: box-shadow 0.2s linear;

    &:hover {
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    }

    & + a {
      margin-top: 15px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        max-width: 550px;
        font-size: 16px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;

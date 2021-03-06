import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

/**
 * 회원가입 / 로그인 페이지 레이아웃
 */

const AuthTempleteBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-decoration: none;
    color: black;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplete = ({ children }) => {
  return (
    <AuthTempleteBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/" className="logo">
            MYWORLD
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTempleteBlock>
  );
};

export default AuthTemplete;

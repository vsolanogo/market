import { Link } from 'react-router-dom';
import UserAvatar from '../UserAvatar/UserAvatar';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ApikoBlack } from '../shared/ApikoBlack.svg';
import { ReactComponent as ApikoWhite } from '../shared/ApikoWhite.svg';
import { ReactComponent as ApikoBlackGreen } from '../shared/ApikoBlackGreen.svg';
import { ReactComponent as Heart } from '../shared/Heart.svg';
import { ReactComponent as Inbox } from '../shared/inbox.svg';

const StyledHeader = styled.header`
  background: ${(props) =>
    props.black === true
      ? 'linear-gradient(180deg, #090810 0%, #171236 100%)'
      : '#f8f8f8'};
  display: flex;
  flex-direction: row;
  padding-bottom: 18px;
  padding-top: 18px;
`;

const GreenSellButton = styled(Link)`
  background: #349a89;
  border: 0px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 14px;
  height: 30px;
  /* margin-left: auto; */
  outline: none;
  text-transform: uppercase;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const TransparentLoginLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0px;
  color: ${(props) => (props.whitetext === true ? 'white' : 'black')};
  cursor: pointer;
  font-family: Helvetica;
  font-size: 14px;
  height: 30px;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  width: 130px;
`;

const PartsDefaults = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Left = styled(PartsDefaults)`
  flex: 2 2 auto;
`;
const Center = styled(PartsDefaults)`
  flex: 0 1 900px;
  flex-direction: row;
  justify-content: flex-end;
`;
const Right = styled(PartsDefaults)`
  flex: 2 2 auto;
`;

export const Header = ({ path, userLoggedIn }) => {
  const LoginButton = (
    <TransparentLoginLink
      to="/auth/login"
      whitetext={path !== '/auth/login' && path !== '/auth/register'}
    >
      Login
    </TransparentLoginLink>
  );
  const ChatButton = (
    <Link to="/chat" style={{ marginRight: '5px' }}>
      <Inbox />
    </Link>
  );

  return (
    <StyledHeader
      black={path !== '/auth/login' && path !== '/auth/register'}
    >
      <Left>
        {path === '/auth/login' && (
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <ApikoBlackGreen />
          </Link>
        )}
        {path === '/auth/register' && (
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <ApikoBlack />
          </Link>
        )}
        {path !== '/auth/login' && path !== '/auth/register' && (
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <ApikoWhite />
          </Link>
        )}
      </Left>
      <Center>
        {userLoggedIn && ChatButton}
        <GreenSellButton to="/products/add">Sell</GreenSellButton>
      </Center>
      <Right>
        {!userLoggedIn && LoginButton}
        {userLoggedIn && <UserAvatar />}
        <Heart />
      </Right>
    </StyledHeader>
  );
};

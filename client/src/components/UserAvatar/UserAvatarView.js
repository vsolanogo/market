import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const UserAvatarWraper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  background: ${(props) => props.background};
  border: 0px;
  /* cursor: pointer; */
  color: rgba(19, 15, 2, 0.72);
  font-family: Helvetica;
  font-size: 14px;
  height: 30px;
  outline: none;
  text-decoration: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 45px;
  margin-right: 45px;
`;

const UserDropDownPanelWrapper = styled.div`
  top: 20px;
  right: 0px;
  position: absolute;
  display: none;
  padding-top: 25px;
  z-index: 5;

  ${UserAvatarWraper}:hover & {
    display: block;
  }
`;
const UserDropDownPanel = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  min-width: 200px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  z-index: 1;
`;

const UserDropDownPanelUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 9px;
  padding-bottom: 8px;
`;

const UserDropDownPanelUserAvatar = styled(UserAvatarWraper)`
  margin: 0px;
  width: 48px;
  height: 48px;
  font-size: 18px;
  margin-right: 12px;
`;

const UserDropDownPanelUserDataList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FullName = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  letter-spacing: 1px;
  color: #000000;
  font-weight: 900;
`;

const Email = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  letter-spacing: 1px;
  color: #979797;
`;

const Profile = styled(Link)`
  margin-top: 5px;
  font-family: Helvetica;
  font-size: 11px;
  letter-spacing: 1px;
  color: #349a89;
  font-weight: 900;
  text-decoration: none;
`;

const UserDropDownPanelLogout = styled.div`
  border-top: 1px solid #e4e4e4;
  padding: 14px 16px;
`;

const Logout = styled.a`
  font-family: Helvetica;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #349a89;
  text-decoration: none;
  cursor: pointer;
`;

export const UserAvatar = ({
  viewerInitials,
  handleLogout,
  viewer,
  bgcolor,
}) => (
  <UserAvatarWraper background={bgcolor}>
    {viewerInitials}
    <UserDropDownPanelWrapper>
      <UserDropDownPanel>
        <UserDropDownPanelUser>
          <UserDropDownPanelUserAvatar background={bgcolor}>
            {viewerInitials}
          </UserDropDownPanelUserAvatar>
          <UserDropDownPanelUserDataList>
            <FullName>{viewer.fullName}</FullName>
            <Email>{viewer.email}</Email>
            <Profile to={`/user/listings/${viewer.id}`}>
              Profile
            </Profile>
          </UserDropDownPanelUserDataList>
        </UserDropDownPanelUser>
        <UserDropDownPanelLogout>
          <Logout onClick={handleLogout}>Logout</Logout>
        </UserDropDownPanelLogout>
      </UserDropDownPanel>
    </UserDropDownPanelWrapper>
  </UserAvatarWraper>
);

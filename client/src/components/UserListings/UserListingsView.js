import React from 'react';
import styled from 'styled-components';
import { ProductsList } from '../Products/ProductsView';

import { PageWrapper } from '../shared/shared';

const UserListingsGroup = styled.div`
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  box-shadow: 0px 5px 15px rgba(121, 121, 121, 0.0527344);
  display: flex;
  flex-direction: column;
  width: 905px;
`;

export const UserListingsAvatar = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 50%;
  border: 2.5px solid #349a89;
  object-fit: cover;
`;

export const UserListingName = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: #141414;
`;

export const UserListingLocation = styled.div`
  font-family: Rubik;
  font-size: 13px;
  color: #9099a7;
`;

export const UserListingNavigation = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserListingNavigationButtonTextTop = styled.div`
  font-family: Rubik;
  font-size: 22px;
`;

export const UserListingNavigationButtonTextBot = styled.div`
  font-family: Rubik;
  font-size: 13px;
  font-weight: 300;
`;

export const UserListingNavigationButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eeeff1;
  display: flex;
  flex-direction: column;
  width: 163px;
  height: 74px;
  background: ${(props) => (props.checked ? '#349A89' : 'white')};
  margin-left: ${(props) => (props.first ? '0px' : '-1px')};
  cursor: pointer;
  ${UserListingNavigationButtonTextTop} {
    color: ${(props) =>
      props.checked
        ? 'white'
        : props.isPositiveFeedback
        ? '#3CB255'
        : '#349A89'};
  }

  ${UserListingNavigationButtonTextBot} {
    color: ${(props) => (props.checked ? 'white' : '#9099a7')};
  }
`;

const noavatar =
  'https://institutogoldenprana.com.br/wp-content/uploads/2015/08/no-avatar-25359d55aa3c93ab3466622fd2ce712d1.jpg';

export const UserListings = ({ user, products }) => (
  <PageWrapper>
    <UserListingsGroup>
      {user && (
        <>
          <UserListingsAvatar
            src={(() => (user.avatar ? user.avatar : noavatar))()}
          />
          <UserListingName>{user.fullName}</UserListingName>{' '}
        </>
      )}
      <UserListingLocation>Jakarta, Indonesia</UserListingLocation>
      <UserListingNavigation>
        <UserListingNavigationButton isfirst isPositiveFeedback>
          <UserListingNavigationButtonTextTop>
            88%
          </UserListingNavigationButtonTextTop>
          <UserListingNavigationButtonTextBot>
            Positive feedback
          </UserListingNavigationButtonTextBot>
        </UserListingNavigationButton>
        <UserListingNavigationButton>
          <UserListingNavigationButtonTextTop>
            123
          </UserListingNavigationButtonTextTop>
          <UserListingNavigationButtonTextBot>
            Sales
          </UserListingNavigationButtonTextBot>
        </UserListingNavigationButton>
        <UserListingNavigationButton checked>
          <UserListingNavigationButtonTextTop>
            {products && products.length}
          </UserListingNavigationButtonTextTop>
          <UserListingNavigationButtonTextBot>
            Active listings
          </UserListingNavigationButtonTextBot>
        </UserListingNavigationButton>
      </UserListingNavigation>
      <ProductsList products={products} />
    </UserListingsGroup>
  </PageWrapper>
);

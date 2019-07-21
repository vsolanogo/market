import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../shared/shared';
import ContentSellerModal from '../ContactSellerModal/ContactSellerModal';
import PrivateRoute from '../../scenes/PrivateRoute';

const ProductPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 855px;
`;

const ProductDetailsBox = styled.div`
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 4.32px;
  box-shadow: 0px 5px 15px rgba(121, 121, 121, 0.0527344);
  display: flex;
  flex: 1 1;
  flex-direction: column;
  padding: 2px;
`;

const ProductDetailsImage = styled.img.attrs({
  // src: imagelong,
})`
  object-fit: cover;
  border-radius: 4.32px 4.32px 0px 0px;
  width: 100%;
  height: 270px;
`;

const ItemName = styled.div`
  color: #373738;
  font-family: Helvetica;
  font-size: 18px;
`;
const ItemLocation = styled.div`
  color: rgba(123, 123, 123, 0.776523);
  font-family: Helvetica;
  font-size: 14px;
`;

const AboutItem = styled.div`
  border-top: 1px solid rgba(151, 151, 151, 0.166439);
`;

const ItemPrice = styled.div`
  background: #ffffff;
  border-radius: 10px 0px 10px 10px;
  bottom: -18px;
  color: #101010;
  font-family: Helvetica;
  font-size: 19px;
  font-weight: 700;
  padding: 6px 8px 20px 18px;
  padding: 18px 6px 8px 20px;
  position: absolute;
  right: 0px;
`;

const SellerGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  width: 260px;
`;

const SellerGreenBox = styled.div`
  background: #349a89;
  border-radius: 4px 4px 0px 0px;
  height: 50px;
`;

const SellerWhiteBox = styled.div`
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #dedee0;
  border-left: 1px solid #dedee0;
  border-radius: 0px 0px 4px 4px;
  border-right: 1px solid #dedee0;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SellerAvatar = styled.img.attrs({
  // src: ${props => props.src},
})`
  object-fit: cover;
  margin-top: -36px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

const SellerName = styled(Link)`
  color: #2b2b2b;
  font-family: Helvetica;
  font-size: 15px;
  padding-top: 9px;
`;

const SellerPlace = styled.div`
  color: #2b2b2b;
  color: rgba(43, 43, 43, 0.499918);
  font-family: Helvetica;
  font-size: 15px;
  padding-bottom: 13px;
  padding-top: 4px;
`;

const ChatWithSellerButton = styled.button`
  background: #349a89;
  border: 0px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 14px;
  height: 47px;
  margin-top: 18px;
  outline: none;
  text-transform: uppercase;
`;

const AddToFavoriteButton = styled.button`
  background: white;
  border: 1px solid #349a89;
  border-radius: 4px;
  color: #535353;
  cursor: pointer;
  font-family: Helvetica;
  font-family: Helvetica;
  font-size: 14px;
  height: 47px;
  margin-top: 11px;
  outline: none;
  text-transform: uppercase;
`;

const tempAvatar =
  'https://institutogoldenprana.com.br/wp-content/uploads/2015/08/no-avatar-25359d55aa3c93ab3466622fd2ce712d1.jpg';

export const ProductDetailed = ({
  product,
  owner,
  modalIsOpen,
  toggleModal,
}) => (
  <>
    <PageWrapper>
      <ProductPage>
        <ProductDetailsBox>
          {product && (
            <>
              <div style={{ position: 'relative' }}>
                <ProductDetailsImage
                  src={(() =>
                    product.photos ? product.photos[0] : '')()}
                />
                <ItemPrice>
                  <span>${product.price}</span>
                </ItemPrice>
              </div>

              <ItemName>{product.title}</ItemName>
              <ItemLocation>{product.location}</ItemLocation>
              <AboutItem>{product.description}</AboutItem>
            </>
          )}
        </ProductDetailsBox>
        <SellerGroup>
          <SellerGreenBox />
          <SellerWhiteBox>
            {/* <SellerAvatar src={(() => (avatar ? avatar : ''))()} /> */}
            {owner && (
              <>
                {' '}
                <SellerAvatar
                  src={(() =>
                    owner.avatar ? owner.avatar : tempAvatar)()}
                />
                <SellerName to={`/user/listings/${owner.id}`}>
                  {owner.fullName}
                </SellerName>
              </>
            )}

            <SellerPlace>SellerPlace</SellerPlace>
          </SellerWhiteBox>
          <ChatWithSellerButton onClick={toggleModal}>
            Chat With Seller
          </ChatWithSellerButton>
          <AddToFavoriteButton>Add To Favorite</AddToFavoriteButton>
        </SellerGroup>
      </ProductPage>
    </PageWrapper>
    {product && owner && modalIsOpen && (
      <PrivateRoute
        component={ContentSellerModal}
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
      />
    )}
  </>
);

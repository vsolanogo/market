import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageWrapperRow } from '../shared/shared';
import { ReactComponent as GreenHeart } from '../shared/GreenHeart.svg';

export const Product = styled.div`
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  box-shadow: 0px 4px 14px rgba(121, 121, 121, 0.0527344);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 3px 3.5px 1px 3.5px;
  width: 200px;
  margin: 3px;
`;

export const ProductImage = styled.img.attrs({
  //   src:
})`
  object-fit: cover;
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 148px;
`;

export const ProductLabel = styled(Link)`
  color: #373738;
  font-family: Helvetica;
  font-size: 15px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 10px;
  position: relative;
`;

export const ProductPrice = styled.div`
  color: #101010;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 7px;
`;

export const LikeButton = styled.button`
  align-items: center;
  background: #ffffff;
  border: 0px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.163407);
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  outline: none;
  position: absolute;
  right: 5px;
  top: -15px;
  width: 30px;
`;

const ProductsListing = styled.div`
  margin: auto;
  flex: 0 1 850px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductsList = ({ products }) => {
  const productsList = products.map((x) => (
    <Product key={x.id}>
      <ProductImage src={(() => (x.photos ? x.photos[0] : ''))()} />
      <div style={{ position: 'relative' }}>
        <ProductLabel to={`/products/${x.id}`}>
          {x.title}
        </ProductLabel>
        <LikeButton>
          <GreenHeart style={{ marginTop: '2px' }} />
        </LikeButton>
      </div>
      <ProductPrice>${x.price}</ProductPrice>
    </Product>
  ));
  return (
    <PageWrapperRow>
      <ProductsListing>{productsList}</ProductsListing>
    </PageWrapperRow>
  );
};

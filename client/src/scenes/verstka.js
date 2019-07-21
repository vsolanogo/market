import React from 'react';
import styled from 'styled-components';

import { ReactComponent as GreenHeart } from './GreenHeart.svg';
// import { ReactComponent as GreyHeart } from './GreyHeart.svg';
// import { ReactComponent as WhiteHeart } from './WhiteHeart.svg';

const SearchButton = styled.button`
  background: #3e3961;
  border: 0px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 14px;
  height: 50px;
  outline: none;
  text-transform: uppercase;
  width: 175px;
`;

export const Searchinput = styled.input.attrs({
  placeholder: 'Search products by name',
})`
  font-family: Helvetica;
  font-size: 15px;
  background: white;
  border: 0px;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding: 19px;
  &::-webkit-input-placeholder {
    font-family: Helvetica;
    font-size: 15px;
    color: #7e9a80;
  }
`;

export const ProductsBar = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.217111);
  height: 35px;
  padding: 12px 11px;
`;

export const CategorySelect = styled.select`
  background: #f9fafb;
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%;
`;

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
`;

export const ProductImage = styled.img.attrs({
  // src: myimage,
})`
  border-radius: 4px 4px 0px 0px;
  width: 100%;
`;

export const ProductLabel = styled.div`
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

/////////////////////

export const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Verstka = () => {
  return (
    <>
      <SearchButton>Search</SearchButton>
      <Searchinput />
      <ProductsBar>
        <CategorySelect>
          <option value="">Choose categoty</option>
          <option value="volvo">Volvo</option>
        </CategorySelect>
      </ProductsBar>
      <Product>
        <ProductImage />
        <ProductLabel>
          Item name
          <LikeButton>
            <GreenHeart style={{ marginTop: '2px' }} />
          </LikeButton>
        </ProductLabel>
        <ProductPrice>$575.09</ProductPrice>
      </Product>
    </>
  );
};

export default Verstka;

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f1f2f3;
  height: 73px;
  border-top: 1px solid #eaebec;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  color: #c0c4ce;
`;

const Footer = () => (
  <Wrapper>Copyright © 2019. Privacy Policy</Wrapper>
);

export default Footer;

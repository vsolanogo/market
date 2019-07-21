import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'styled-react-modal';
import PrivateRoute from '../../scenes/PrivateRoute';

const contactSellerSchema = Yup.object().shape({
  message: Yup.string().required('Required'),
});

export const ContactSellerModalView = ({
  modalIsOpen,
  toggleModal,
  owner,
  onCreateChat,
  productId,
}) => (
  <ModalContainer
    isOpen={modalIsOpen}
    onBackgroundClick={toggleModal}
    onEscapeKeydown={toggleModal}
  >
    <CloseModal onClick={toggleModal}>x</CloseModal>
    <ModalCaption>Contact seller</ModalCaption>
    <SellerInfo>
      avatar
      <SellerNameAndLocation>
        <SellerName>{owner.fullName}</SellerName>
        <SellerLocation>Jakarta, Indonesia</SellerLocation>
      </SellerNameAndLocation>
    </SellerInfo>
    <MessageCaption>Message</MessageCaption>
    <MessageInput />
    <ButtonWrapper>
      <FormSubmitButton
        onClick={() => {
          onCreateChat(productId);
        }}
        to="/chat"
      >
        SUBMIT
      </FormSubmitButton>
    </ButtonWrapper>
  </ModalContainer>
);

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const FormSubmitButton = styled(Link)`
  position: relative;
  background: #349a89;
  border: 0px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 16px;
  letter-spacing: 0.4px;
  margin-top: 24px;
  outline: none;
  padding: 19px;
  flex: 0 1 377px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-decoration: none;

  :disabled {
    background: grey;
    cursor: default;
  }
`;

const ModalContainer = Modal.styled`
  position: relative;
  background: white;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 820px;
  padding: 17px 78px 34px 78px;
`;

const CloseModal = styled.button`
  position: absolute;
  right: 0px;
`;

const ModalCaption = styled.div`
  font-family: Helvetica;
  font-size: 22px;
  color: #282828;
`;

const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const SellerNameAndLocation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SellerName = styled.div`
  font-family: Helvetica;
  font-size: 24px;
  line-height: 28px;
  color: #2b2b2b;
`;

const SellerLocation = styled.div`
  font-family: Helvetica;
  font-size: 15px;
  color: rgba(43, 43, 43, 0.5);
`;

const MessageCaption = styled.div`
  font-family: Helvetica;
  font-size: 12px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #303030;
  text-decoration: uppercase;
  width: 100%;
`;

const MessageInput = styled.textarea.attrs({
  placeholder: 'For example: Iron man suit',
})`
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  resize: none;
  width: 100%;
  height: 180px;
`;

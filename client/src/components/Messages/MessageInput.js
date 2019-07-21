import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

const messageInputSchema = Yup.object().shape({
  message: Yup.string()
    .min(1)
    .required(),
});

export default ({ onSendMessage, chatId }) => (
  <Formik
    initialValues={{
      message: '',
    }}
    validationSchema={messageInputSchema}
    onSubmit={(values, { resetForm }) => {
      const { message } = values;
      onSendMessage({ message, chatId });
      resetForm();
    }}
    render={({ isValid }) => {
      return (
        <Form style={{ width: '100%' }}>
          <MessageInput name="message" />
          {/* <button type="submit" disabled={!isValid}>
            send{' '}
          </button> */}
        </Form>
      );
    }}
  />
);

const MessageInput = styled(Field).attrs({
  placeholder: 'Type your message here...',
})`
  width: 100%;
  font-family: Open Sans;
  font-size: 13px;
  line-height: 22px;
  color: black;
  outline: none;
  ::-webkit-input-placeholder {
    font-family: Open Sans;
    font-size: 13px;
    line-height: 22px;
    color: #97a3b4;
  }
  :-ms-input-placeholder {
    font-family: Open Sans;
    font-size: 13px;
    line-height: 22px;
    color: #97a3b4;
  }
`;

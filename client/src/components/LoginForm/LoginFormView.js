import { Formik, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom';

import React from 'react';

import * as Yup from 'yup';
import {
  PageWrapper,
  BaseForm,
  FormInput,
  FormMainLabel,
  FormLabel,
  FormSubmitButton,
  FormNextPartLabel,
  FormNextPartLabelLink,
  LoadingScreen,
} from '../shared/shared';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 symbols')
    .max(16, 'Must be no longer than 16 symbols')
    .required('Required'),
});

export const LoginForm = ({
  onLogin,
  isLoading,
  locateToAfterLoggingIn,
  userLoggedIn,
  modalIsOpen,
}) => {
  if (userLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: locateToAfterLoggingIn,
          state: { modalIsOpen },
        }}
      />
    );
  }
  return (
    <PageWrapper>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          const { email, password } = values;
          onLogin({ email, password });
        }}
        render={({ isValid }) => (
          <BaseForm>
            {isLoading && <LoadingScreen />}
            <FormMainLabel>Login</FormMainLabel>

            <FormLabel>Email</FormLabel>
            <FormInput name="email" placeholder="example@gmail.com" />
            <ErrorMessage name="email" component="div" />

            <FormLabel>PASSWORD</FormLabel>
            <FormInput name="password" type="password" />
            <ErrorMessage name="password" component="div" />

            <FormSubmitButton type="submit" disabled={!isValid}>
              Continue
            </FormSubmitButton>
          </BaseForm>
        )}
      />
      <BaseForm>
        <FormNextPartLabel>
          I have no account,{' '}
          <FormNextPartLabelLink href="/auth/register">
            Register Now
          </FormNextPartLabelLink>
        </FormNextPartLabel>
      </BaseForm>
    </PageWrapper>
  );
};

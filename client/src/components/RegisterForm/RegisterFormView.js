import React from 'react';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom';
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

const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Must be at least 5 symbols')
    .max(50, 'Must be no longer than 50 symbols')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 symbols')
    .max(16, 'Must be no longer than 16 symbols')
    .required('Required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const RedirectIfRegisterSuccess = () => <Redirect to="/" />;

export const RegisterForm = ({
  isLoading,
  isError,
  error,
  onRegister,
}) => (
  <PageWrapper>
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        const { fullName, email, password } = values;
        onRegister({ fullName, email, password });
      }}
      render={({ isValid }) => (
        <BaseForm>
          {isLoading && <LoadingScreen />}

          <FormMainLabel>Register</FormMainLabel>

          <FormLabel>EMAIL</FormLabel>
          <FormInput name="email" />
          <ErrorMessage name="email" component="div" />

          <FormLabel>FULL NAME</FormLabel>
          <FormInput name="fullName" />
          <ErrorMessage name="fullName" component="div" />

          <FormLabel>PASSWORD</FormLabel>
          <FormInput name="password" type="password" />
          <ErrorMessage name="password" component="div" />

          <FormLabel>PASSWORD AGAIN</FormLabel>
          <FormInput name="passwordConfirmation" type="password" />
          <ErrorMessage name="passwordConfirmation" component="div" />

          <FormSubmitButton type="submit" disabled={!isValid}>
            Register
          </FormSubmitButton>
          {isError && <div>{error}</div>}
        </BaseForm>
      )}
    />
    <BaseForm>
      <FormNextPartLabel>
        I already have an account,{' '}
        <FormNextPartLabelLink href="/auth/login">
          LOG IN
        </FormNextPartLabelLink>
      </FormNextPartLabel>
    </BaseForm>
  </PageWrapper>
);

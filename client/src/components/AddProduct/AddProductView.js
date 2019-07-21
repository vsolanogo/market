import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import PhotosInput from '../PhotosInput/PhotosInput';

import {
  PageWrapper,
  BaseForm,
  FormInput,
  FormMainLabel,
  FormLabel,
  FormSubmitButton,
} from '../shared/shared';

const AddProductForm = styled(BaseForm)`
  width: 1000px;
`;

const addProductSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required('Required'),
  location: Yup.string()
    .trim()
    .required('Required'),
  description: Yup.string().nullable(),
  photos: Yup.array().of(Yup.string()),
  price: Yup.number(),
});

export const AddProduct = ({ onPostProduct }) => {
  return (
    <PageWrapper>
      <Formik
        initialValues={{
          title: '',
          location: '',
          description: undefined,
          photos: [],
          price: 0,
        }}
        validationSchema={addProductSchema}
        onSubmit={(values) => {
          onPostProduct(values);
        }}
        render={({ isValid, setFieldValue, values }) => (
          <AddProductForm>
            {/* {isLoading && <LoadingScreen />} */}
            <FormMainLabel>Add product</FormMainLabel>

            <FormLabel>Title</FormLabel>
            <FormInput
              name="title"
              placeholder="For example: Iron man suit"
            />
            <ErrorMessage name="title" component="div" />

            <FormLabel>location</FormLabel>
            <FormInput
              name="location"
              placeholder="For example: Los Angeles, CA"
            />
            <ErrorMessage name="location" component="div" />

            <FormLabel>description</FormLabel>
            <FormInput
              // as="textarea"
              name="description"
              placeholder="For example: Iron man suit"
            />
            <ErrorMessage name="description" component="div" />

            <FormLabel>Photos</FormLabel>
            <Field
              name="photos"
              component={PhotosInput}
              setFieldValue={setFieldValue}
              // render={({ field /* _form */ }) => {
              //   return <PhotosInput {...field} />;
              // }}
            />
            <ErrorMessage name="photos" component="div" />

            <FormLabel>price</FormLabel>
            <FormInput name="price" />
            <ErrorMessage name="price" component="div" />

            <Link to="/">
              <FormSubmitButton type="submit" disabled={!isValid}>
                Submit
              </FormSubmitButton>
            </Link>
          </AddProductForm>
        )}
      />
    </PageWrapper>
  );
};

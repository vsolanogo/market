import styled from 'styled-components';
import { Form, Field } from 'formik';

// import { ReactComponent as Eye } from './Eye.svg';

// export function Shared() {
//   return <Eye style={{ width: 102 }} />;
// }

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-top: 30px;
  background: #f8f8f8;
`;

export const PageWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding-top: 30px;
  background: transparent;
`;

export const BaseForm = styled(Form)`
  position: relative;
  width: 365px;
  background: #ffffff;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin-top: 30px;
  box-sizing: border-box;
`;

export const LoadingScreen = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;

export const FormInput = styled(Field)`
  font-family: Helvetica;
  font-size: 18px;
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 19px;
  font-size;
  &::-webkit-input-placeholder {
    color: rgba(102, 102, 102, 0.466455);
    font-family: Helvetica; 
    font-size: 16px;
  }  
`;

export const FormMainLabel = styled.div`
  color: #303030;
  font-family: Helvetica;
  font-size: 22px;
  text-align: center;
  margin-bottom: 12px;
`;

export const FormLabel = styled.div`
  color: #303030;
  font-family: Helvetica;
  font-size: 12px;
  letter-spacing: 0.3px;
  margin-top: 20px;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const FormSubmitButton = styled.button`
  background: #349a89;
  border: 0px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 16px;
  letter-spacing: 0.4px;
  margin-top: 30px;
  outline: none;
  padding: 19px;
  text-align: center;
  :disabled {
    background: grey;
    cursor: default;
  }
`;

export const FormNextPartLabel = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.4px;
`;

export const FormNextPartLabelLink = styled.a`
  color: #349a89;
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

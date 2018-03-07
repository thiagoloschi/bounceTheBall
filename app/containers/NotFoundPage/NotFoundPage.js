import { FullPageWrapper } from 'commons/styledComponents/PageWrapper';
import { TextBase } from 'commons/styledComponents/TextBase';
import styled from 'styled-components';

export const Wrapper = FullPageWrapper.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Title = TextBase.extend`
  font-size: 54px;
  width: 100%;
  text-align: center;
  margin: 32px 0;
`;

export const Message = TextBase.extend`
  font-size: 32px;
  width: 100%;
  text-align: center;
  margin: 32px 0;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 72px 0;
`;

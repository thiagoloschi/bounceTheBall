import styled from 'styled-components';
import { FullPageWrapper } from 'commons/styledComponents/PageWrapper';
import { TextBase } from 'commons/styledComponents/TextBase';

export const Wrapper = FullPageWrapper.extend`
  display: flex;
  justify-content: center;
  cursor: grab;
  cursor: -webkit-grab;
`;

export const Container = styled.div`
  width: 100%;
  padding: 24px;
`;

export const Stats = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  padding-bottom: 56px;
`;

export const Header = styled.div`
  padding-bottom: 8px;
`;

export const BallWrapper = styled.div`
  width: 150px;
  margin: 0 auto; 
  border-radius: 100%;
`;

export const Text = TextBase.extend`
  font-size: 32px;
  margin: 32px 0;
  width: 100%;
  text-align: center;
`;

export const TextBig = TextBase.extend`
  font-size: 48px;
  margin: 48px 0;
  width: 100%;
  text-align: center;
`;

export const TextBigBottomRight = TextBase.extend`
  font-size: 56px;
  margin: 8px 0;
  text-align: right;
  width: 50%;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const TextBigBottomLeft = TextBase.extend`
  font-size: 56px;
  margin: 8px 0;
  width: 50%;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

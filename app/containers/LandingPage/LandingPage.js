import { FullPageWrapper } from 'commons/styledComponents/PageWrapper';
import { TextBase } from 'commons/styledComponents/TextBase';

export const LandingWrapper = FullPageWrapper.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = TextBase.extend`
  padding-top: 56px;
  font-size: 96px;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

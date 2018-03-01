import { FullPageWrapper } from 'commons/styledComponents/PageWrapper';
import { TextBase } from 'commons/styledComponents/TextBase';

export const LandingWrapper = FullPageWrapper.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Title = TextBase.extend`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 16px;
  font-size: 96px;
`;

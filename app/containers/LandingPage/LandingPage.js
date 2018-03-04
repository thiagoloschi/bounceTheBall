import { FullPageWrapper } from 'commons/styledComponents/PageWrapper';
import { TextBase } from 'commons/styledComponents/TextBase';

export const LandingWrapper = FullPageWrapper.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = TextBase.extend`
  font-size: 96px;
`;

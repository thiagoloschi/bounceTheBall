import { FullPageWrapper } from 'commons/styledComponents/PageWrapper';
import { TextBase } from 'commons/styledComponents/TextBase';

export const Wrapper = FullPageWrapper.extend`
  display: flex;
  justify-content: center;
  cursor: grab;
  cursor: -webkit-grab;
`;

export const Text = TextBase.extend`
  font-size: 32px;
  margin: 32px 0;
  position: absolute;
`;

export const TextBig = TextBase.extend`
  font-size: 48px;
  margin: 96px 0;
  position: absolute;
`;

export const TextBigBottomRight = TextBase.extend`
  font-size: 56px;
  bottom: 0;
  margin: 0;
  position: absolute;
  right: 32px;
`;

export const TextBigBottomLeft = TextBase.extend`
  font-size: 56px;
  bottom: 0;
  margin: 0;
  position: absolute;
  left: 32px;
`;

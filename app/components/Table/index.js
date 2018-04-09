import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { Wrapper, Header, Line, Field, Content } from './Table';

export const Table = (props) => {
  if (!props.content.length) {
    return (
      <div></div>
    );
  }

  const keys = Object.keys(props.content[0]);
  const header = keys.map((item) => (
    <Field key={item}>
      {capitalize(item)}
    </Field>
  ));

  const content = props.content.map((item, key) => {
    const values = Object.values(item);
    const line = values.map((value) => ( // eslint-disable-next-line
      <Field key={`${value}-${key}`}>{value}</Field>
    ));
    return ( // eslint-disable-next-line
      <Line key={`${values[0]}-${key}`}>
        {line}
      </Line>
    );
  });

  return (
    <Wrapper keys={keys.length}>
      <Header>
        { header }
      </Header>
      <Content>
        { content }
      </Content>
    </Wrapper>
  );
};

Table.propTypes = {
  content: PropTypes.array,
};

export default Table;

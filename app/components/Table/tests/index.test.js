import React from 'react';
import { shallow } from 'enzyme';
import { capitalize } from 'lodash';
import { Table } from '../index';
import { Wrapper, Header, Field } from '../Table';

describe('<Table />', () => {
  let renderedComponent;
  const renderShallow = (componentProps) => shallow(<Table {...componentProps} />);

  const mockedProps = {
    content: [
      { key1: 'Value1', key2: 'Value2' },
    ],
  };

  const getTotalOfFields = (content) => {
    let totalNumberOfFields = 0;
    totalNumberOfFields += Object.keys(content[0]).length;
    content.forEach((item) => {
      totalNumberOfFields += Object.values(item).length;
    });
    return totalNumberOfFields;
  };

  beforeAll(() => {
    renderedComponent = renderShallow(mockedProps);
  });

  describe('Render', () => {
    it('should render only one Wrapper', () => {
      expect(renderedComponent.find(Wrapper)).toHaveLength(1);
    });

    describe('the Header', () => {
      const keys = Object.keys(mockedProps.content[0]);
      it('should render only one header', () => {
        expect(renderedComponent.find(Header)).toHaveLength(1);
      });
      it('should render the capitalized content\'s matching field name', () => {
        expect(renderedComponent.contains(
          <Field>{capitalize(keys[0])}</Field>)
        ).toBeTruthy();
        expect(renderedComponent.contains(
          <Field>{capitalize(keys[1])}</Field>)
        ).toBeTruthy();
      });
    });

    describe('the Fields', () => {
      it('it should render as many Fields as props.content has', () => {
        expect(renderedComponent.find(Field)).toHaveLength(getTotalOfFields(mockedProps.content));
      });

      it('it should render as many Fields as props.content', () => {
        expect(renderedComponent.find(Field)).toHaveLength(getTotalOfFields(mockedProps.content));
        const newProps = { content: [
          { key1: 'Value1', key2: 'Value2' },
          { key1: 'Value3', key2: 'Value4' },
        ] };
        const renderedComponentWithMoreContent = renderShallow(newProps);
        expect(renderedComponentWithMoreContent.find(Field)).toHaveLength(getTotalOfFields(newProps.content));
      });
    });
  });
});

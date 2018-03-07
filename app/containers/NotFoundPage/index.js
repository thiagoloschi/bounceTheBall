import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import { Wrapper, Title, Message, ButtonWrapper } from './NotFoundPage';
import messages from './messages';

export class NotFoundPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <div>
          <Title>
            <FormattedMessage {...messages.title} />
          </Title>
          <Message>
            <FormattedMessage {...messages.description} />
          </Message>
          <ButtonWrapper>
            <Button
              action={this.props.goBack}
              label={messages.label}
            ></Button>
          </ButtonWrapper>
        </div>
      </Wrapper>
    );
  }
}

NotFoundPage.propTypes = {
  goBack: PropTypes.func,
};


export const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(push('/')),
});

export default connect(null, mapDispatchToProps)(NotFoundPage);

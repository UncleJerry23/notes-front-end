import { connect } from 'react-redux';
import Form from '../components/Form';
import { newNote } from '../actions/noteActions';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CreateNote extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    body: ''
  };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      const { title, body } = this.state;
      this.props.onSubmit({ title, body });
      this.setState({ title: '', body: '' });
    }

    render() {
      const { title, body } = this.state;
      return (
      <>
        <Form title={title} body={body} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  onSubmit(note) {
    dispatch(newNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);

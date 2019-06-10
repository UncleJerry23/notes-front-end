import React from 'react';
import PropTypes from 'prop-types';

function NoteDForm({ title, body, handleSubmit, handleChange }) {

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <button style={buttonStyle}>Submit</button>
      <input style={titleInput} type="text" name="title" value={title} placeholder={title || 'Note Title'} onChange={handleChange} />
      <textarea style={bodyInput} name="body" value={body} placeholder={body || 'Note Body'} onChange={handleChange} />
    </form>
  );

}

NoteDForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default NoteDForm;

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
};

const buttonStyle = {
  width: '80px',
  margin: '10px'
};

const titleInput = {
  width: '225px',
  textAlign: 'center',
  margin: '10px'
};

const bodyInput = {
  height: '200px',
  width: '400px',
  margin: '10px'
};

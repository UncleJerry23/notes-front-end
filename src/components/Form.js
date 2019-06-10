import React from 'react';
import PropTypes from 'prop-types';

function NoteDForm({ title, body, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
      <input type="text" name="title" value={title} placeholder={title || 'Note Title'} onChange={handleChange} />
      <input type="textfield" name="body" value={body} placeholder={body || 'Note Body'} onChange={handleChange} />
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

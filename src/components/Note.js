import React from 'react';
import PropTypes from 'prop-types';

function Note({ note }) {
  return (
    <> 
      <h3>{note.title}</h3>
      <p>{note.body}</p>
    </>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Note;

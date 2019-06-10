import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notes }) {
  let notesArr = [];
  if(notes.length > 0) {
    notesArr = notes.map(note => {
      return (
        <li key={`${note.title}-${note.body}`}>
          <Note note={note} />
        </li>
      );
    });
    return <ul>{notesArr}</ul>;
  } else {
    return <h2>Add Some Notes</h2>;
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
};

export default Notes;

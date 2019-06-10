import { createNote, fetchAllNotes } from '../services/noteFetchers';
import { createAction } from 'promise-middleware-redux';

export const [
  newNote,
  NEW_NOTE
] = createAction('NEW_NOTE', createNote);

export const [
  fetchNotes,
  FETCH_NOTES
] = createAction('FETCH_NOTES', fetchAllNotes);

import { createNote } from '../services/noteFetchers';
import { createAction } from 'promise-middleware-redux';

export const [
  newNote,
  NEW_NOTE
] = createAction('NEW_NOTE', createNote);

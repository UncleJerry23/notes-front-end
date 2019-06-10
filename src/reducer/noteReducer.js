import { NEW_NOTE, FETCH_NOTES } from '../actions/noteActions';

const initialState = {
  notesArray: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_NOTE:
      return { ...state, notesArray: [...state.notesArray, action.payload] };
    case FETCH_NOTES:
      return { ...state, notesArray:  [...action.payload] };
    default:
      return state;
  }
}

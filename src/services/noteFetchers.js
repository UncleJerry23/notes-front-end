export const createNote = note => {
  return fetch('https://notes-for-dayz.herokuapp.com/api/v1/notes', {
    method: 'POST',
    body: JSON.stringify(note),
    headers:{
      'Content-Type': 'application/json'
    } })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
};

export const getAllNotes = () => {
  return fetch('https://notes-for-dayz.herokuapp.com/api/v1/notes', {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    } })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
}

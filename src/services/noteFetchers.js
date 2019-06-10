export const createNote = note => {
  return Promise.all([
    { ...note,
      _id: '1234567890' 
    }
  ]);
};

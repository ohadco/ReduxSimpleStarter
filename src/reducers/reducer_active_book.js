
export default function(state = null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    console.log('changed active book', action.payload);
    return action.payload;
  
  }
  return state;
};
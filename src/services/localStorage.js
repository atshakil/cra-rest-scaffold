export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(error) {
    console.error(error.message);
  }
};

export const loadState = state => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch(error) {
    console.error(error.message);
    return undefined;
  }
};

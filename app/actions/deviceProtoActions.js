export const addItem = (item) => {
    return {
        type: 'ADD',
        item
    }
};

export const changeName = (name) => {
  return {
    type: 'NAME',
    name
  }
};

export const changeLocation = (location) => {
  return {
    type: 'LOCATION',
    location
  }
};
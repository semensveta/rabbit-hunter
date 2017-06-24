export const runRabbit = () => {
    return {
      type: 'RUN'
    }
};

export const addHunter = (hunter) => {
  return {
    type: 'ADD',
    hunter
  }
};

export const hunt = (rabbitLocation, miss) => {
  return {
    type: 'HUNT',
    rabbitLocation,
    miss
  }
};
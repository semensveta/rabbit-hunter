export const runRabbit = () => {
    return {
        type: 'RUN',
        newLocation: {
            x: Math.floor(Math.random() * 100),
            y: Math.floor(Math.random() * 100)
        }
    }
};

export const addHunter = (hunter) => {
  return {
    type: 'ADD',
    hunter
  }
};

export const hunt = (rabbitLocation) => {
  return {
    type: 'HUNT',
    rabbitLocation
  }
};
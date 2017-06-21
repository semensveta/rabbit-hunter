export const runRabbit = (location) => {
    return {
      type: 'RUN',
      location
    }
};

export const addHunter = (hunter) => {
  return {
    type: 'ADD',
    hunter
  }
}
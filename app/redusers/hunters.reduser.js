export function hunters (state = [{name: 'John', age: '23', miss: '3', location: {x: 1, y: 1}}], action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...state, action.hunter
        ];
      case 'HUNT':
        const hunters = state.map((hunter) => {
          let miss = hunter.miss;
          hunter.location = {
            x: action.rabbitLocation.x + 10,
            y: action.rabbitLocation.y + 10
          };
        });

        return [...hunters];
      default:
        return state
    }
}

export function hunting (state={x:1,y:1},action) {
  switch (action.type) {
    case 'HUNT':
      const hunterLocation = {
        x: action.rabbitLocation.x + 10 * action.miss,
        y: action.rabbitLocation.x + 10 * action.miss
      }
      console.log(hunterLocation);
      return Object.assign({},state,hunterLocation);

    default:
      return state
  }
}
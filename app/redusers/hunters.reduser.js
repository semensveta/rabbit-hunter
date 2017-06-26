import aim from "../images/hunt.png";
import aim1 from "../images/hunt1.png";
import aim2 from "../images/hunt2.png";

export function hunters (state = [{name: 'John', age: '23', miss: '3', location: {x: 1, y: 1}, weapon: aim}], action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...state, action.hunter
        ];
      case 'HUNT':
        const hunters = state.map((hunter) => {
          hunter.location = {
            x: action.rabbitLocation.x + 10 * hunter.miss,
            y: action.rabbitLocation.y + 10 * hunter.miss
          };
          return hunter;
        });

        return [...hunters];
      default:
        return state
    }
}

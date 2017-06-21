export function hunters (state = [{name: 'John', age: '23', miss: '3'}], action) {
    switch (action.type) {
      case 'ADD':
          console.log(action);
            return [
              ...state, action.hunter
            ];
        default:
            return state
    }
}
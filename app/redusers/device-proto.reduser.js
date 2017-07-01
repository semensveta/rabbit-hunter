

export function deviceProto (state = {name: '', location: '', items: []}, action) {
    switch (action.type) {
      case 'ADD':
        console.log("add");
        return  Object.assign(state,{items:[...state.items,action.item]});
      case 'SET':
          return Object.assign(state,{[action.name]: action.value});
      case 'RESET':
        return {name: '', location: '', items: []};
      default:
        return state
    }
}

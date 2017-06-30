

export function deviceProto (state = {name: '', location: '', items: []}, action) {
    switch (action.type) {
      case 'ADD':
        console.log("add");
        return  Object.assign(state,{items:[...state.items,action.item]});
      case 'NAME':
          return Object.assign(state,{name: action.name});
      case 'LOCATION':
        return Object.assign(state,{name: action.name});
      default:
        return state
    }
}

export function list (state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            state.push(state[state.length - 1] + 1);

            return state;
        default:
            return state
    }
}
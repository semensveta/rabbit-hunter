export function rabbitLocation (state = {x: 0, y: 0}, action) {
    switch (action.type) {
        case 'RUN':
           return Object.assign({},state,action.newLocation);

        default:
            return state
    }
}
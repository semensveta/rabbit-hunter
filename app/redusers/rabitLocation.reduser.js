export function rabbitLocation (state = {x: 0, y: 0}, action) {
    switch (action.type) {
        case 'RUN':
            let newLocation = {
                x: action.location.x,
                y: action.location.y
            };
            state = newLocation;
            console.log(state);

            return state;
        default:
            return state
    }
}
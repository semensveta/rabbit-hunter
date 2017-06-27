export function rabbitLocation (state = {x: 0, y: 0}, action) {
    switch (action.type) {
        case 'RUN':
            let newLocation = {
              x: Math.floor(Math.random() * 100),
              y: Math.floor(Math.random() * 100)
            };
            return Object.assign({},state,newLocation);

        default:
            return state
    }
}
import { LEADERS } from '../shared/leaders';

export const Leaders = (states = LEADERS, action) => {
    switch(action.type) {
        default:
            return states;
    }
}
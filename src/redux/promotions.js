import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (states = PROMOTIONS, action) => {
    switch(action.type) {
        default:
            return states;
    }
}
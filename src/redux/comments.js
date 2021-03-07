import { COMMENTS } from '../shared/comments';

export const Comments = (states = COMMENTS, action) => {
    switch(action.type) {
        default:
            return states;
    }
}
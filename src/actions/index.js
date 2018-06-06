import { EMAIL_CHANGED } from '../actions/types';

export const emailChanged = (text) => ({
        type: 'email_changed',
        payload: text
    });

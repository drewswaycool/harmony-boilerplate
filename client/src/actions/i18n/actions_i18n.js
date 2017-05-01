import * as ActionTypes from '../';

export function changeLocale(locale) {
    return {
        type: ActionTypes.CHANGE_LOCALE,
        payload: locale
    }
}
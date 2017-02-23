export const TOGGLE_BIT = 'TOGGLE_BIT';
export const PLUS_ONE = 'PLUS_ONE';
export const MINUS_ONE = 'MINUS_ONE';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export function toggle(bit) {
  return {
    type: TOGGLE_BIT,
    bit
  };
}

export function plus() {
  return {
    type: PLUS_ONE,
  };
}

export function minus() {
  return {
    type: MINUS_ONE,
  };
}

export function changeLanguage(lang) {
  let texts = {};
  switch(lang) {
    case 'de-at':
    case 'de-de':
    case 'de-li':
    case 'de-lu':
    case 'de-ch': {
      texts = {
        target: 'Ziel',
        result: 'Ergebnis',
      };
      break;
    }
    default: {
      texts = {
        target: 'Target',
        result: 'Result',
      };
      break;
    }
  }
  return {
    type: SET_LANGUAGE,
    texts: texts
  };
}

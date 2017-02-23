import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as gameLogic from './gameLogic.jsx';
import {
  TOGGLE_BIT,
  PLUS_ONE,
  MINUS_ONE,
  SET_LANGUAGE } from '../actions/actions.jsx';

const initialGameState = {
  won: false,
  target: gameLogic.randomTarget(),
  bits: [{value: 0, status: true},
    {value: 1, status: false},
    {value: 2, status: false},
    {value: 3, status: false},
    {value: 4, status: false},
    {value: 5, status: false},
    {value: 6, status: false},
    {value: 7, status: false}]
  };

function game(state = initialGameState, action) {
  switch (action.type) {
    case TOGGLE_BIT: {
      const newState = Object.assign({}, state, {
        bits: state.bits.map((bit) => Object.assign({}, bit, {
          status: (action.bit.value === bit.value? !bit.status : bit.status)
        }))
      });
      return gameLogic.solved(newState);
    }
    case PLUS_ONE: {
      let target = gameLogic.result(state.bits) + 1;
      target = (target + 256) % 256;
      const newState = Object.assign({}, state, {
        bits: gameLogic.bitsForTarget(state.bits, target),
      });
      return gameLogic.solved(newState);
    }
    case MINUS_ONE: {
      let target = gameLogic.result(state.bits) - 1;
      target = (target + 256) % 256;
      const newState = Object.assign({}, state, {
        bits: gameLogic.bitsForTarget(state.bits, target),
      });
      return gameLogic.solved(newState);
    }
    default: {
      return state;
    }
  }
}

const initialLanguageState = {target: 'Target', result: 'Result'};

function language(state = initialLanguageState, action) {
  switch (action.type) {
    case SET_LANGUAGE: {
      return action.texts;
    }
    default: {
      return state;
    }
  }
}

const reducer = combineReducers({
  game: game,
  language: language
});

const middleware = applyMiddleware(thunk);

export default createStore(reducer, {}, middleware);

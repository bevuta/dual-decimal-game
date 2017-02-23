import React from 'react';
import styles from '../styles.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.jsx';

const Bit = ({ bit, toggle }) => {
  return (
    <div className={styles.bit} onClick={() => toggle(bit)}>
      <label>{Math.pow(2, bit.value)}</label>
      <input value={bit.status + 0} type="text" readOnly/>
      <label>2<sup>{bit.value}</sup></label>
      <input type="radio" checked={bit.status} readOnly/>
    </div>
  );
};

Bit.propTypes = {
  bit: React.PropTypes.object,
  toggle: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    toggle: (bit) => dispatch(actions.toggle(bit)),
  };
}

export default connect(null, mapDispatchToProps)(Bit);

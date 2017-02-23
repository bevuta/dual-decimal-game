import React from 'react';
import styles from '../styles.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.jsx';

const Controls = ({ plus, minus}) => {
    return (
      <div className={styles.controls}>
        <input type='button' onClick={plus} value='+' />
        <input type='button' onClick={minus} value='-' />
      </div>
    );
};

Controls.propTypes = {
  plus: React.PropTypes.func,
  minus: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(actions.plus()),
    minus: () => dispatch(actions.minus()),
  };
}

export default connect(null, mapDispatchToProps)(Controls);

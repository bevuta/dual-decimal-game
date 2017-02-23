import React, { Component } from 'react';
import styles from '../styles.css';
import { connect } from 'react-redux';

class Result extends Component {
  result() {
    let result = 0;
    this.props.game.bits.forEach(function (bit) {
      result += Math.pow(2, bit.value) * bit.status;
    });
    return result;
  }
  render() {
    return (
      <div className={styles.result}>
        <label>{this.props.lang.result}</label>
        <input value={this.result()} type="text" readOnly/>
      </div>
    );
  }
}

Result.propTypes = {
  game: React.PropTypes.object,
  lang: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    game: store.game,
    lang: store.language
  };
}

export default connect(mapStateToProps)(Result);

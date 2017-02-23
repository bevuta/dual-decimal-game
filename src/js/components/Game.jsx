import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.jsx';
import styles from '../styles.css';
import Bit from './Bit.jsx';
import Result from './Result.jsx';
import Controls from './Controls.jsx';

class Game extends Component {
  componentWillMount() {
    const lang = window.navigator.userLanguage || window.navigator.language;
    this.props.changeLanguage(lang);
  }

  render() {
    const bits = this.props.game.bits.map(bit =>
      <Bit key={bit.value} bit={bit} />
    );

    const wonClass = this.props.game.won ? styles.won : '';

    return (
      <div className={styles.game + ' ' + wonClass}>
        <div className={styles.target}>
          <label>{this.props.lang.target}</label>
          <input value={this.props.game.target} type="text" readOnly/>
        </div>
        {bits.reverse()}
        <Result className={styles.target}/>
        <Controls />
      </div>
    );
  }
}

Game.propTypes = {
  changeLanguage: React.PropTypes.func,
  game: React.PropTypes.object,
  lang: React.PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: (l) => dispatch(actions.changeLanguage(l)),
  };
}

function mapStateToProps(store) {
  return {
    game: store.game,
    lang: store.language
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  style: PropTypes.instanceOf(Object).isRequired
};

const App = ({ style }) => (
  <main style={style.contentWrapper}>
    <h1>My Records</h1>
    <img src="https://media.giphy.com/media/Ca9TNthVXlWms/giphy.gif" alt="plate" />
  </main>
);

App.propTypes = propTypes;

export default App;

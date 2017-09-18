import { connect } from 'react-redux';
import App from './component';
import getStyle from './style';

const mapStateToProps = () => ({
  style: getStyle()
});

export default connect(mapStateToProps)(App);

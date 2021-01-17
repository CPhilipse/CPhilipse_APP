import {connect} from 'react-redux';
import Home from './Home';
import {RootState} from '../../store/reducers';

const mapStateToProps = (state: RootState) => {
  const {darkmode, splashscreen} = state.profile;
  return {
    darkmode,
    hasSplashscreenOn: splashscreen,
  };
};

export default connect(mapStateToProps, null)(Home);

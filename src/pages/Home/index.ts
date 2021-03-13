import {connect} from 'react-redux';
import Home from './Home';
import {RootState} from '../../store/reducers';
import {setFavorites} from '../../store/reducers/profileReducer';

const mapStateToProps = (state: RootState) => {
  const {darkmode, splashscreen, favorites} = state.profile;
  return {
    darkmode,
    hasSplashscreenOn: splashscreen,
    favorites,
  };
};

const mapDispatchToProps = {
  setFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

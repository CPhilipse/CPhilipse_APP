import {connect} from 'react-redux';
import Home from './Home';
import {RootState} from '../../store/reducers';

const mapStateToProps = (state: RootState) => {
  const {darkmode} = state.profile;
  return {
    darkmode,
  };
};

export default connect(mapStateToProps, null)(Home);

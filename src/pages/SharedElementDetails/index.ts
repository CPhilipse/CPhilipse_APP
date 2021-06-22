import {connect} from 'react-redux';
import SharedElementDetails from './SharedElementDetails';
import {RootState} from '../../store/reducers';

const mapStateToProps = (state: RootState) => {
  return {
    darkmode: state.profile.darkmode,
  };
};

export default connect(mapStateToProps)(SharedElementDetails);

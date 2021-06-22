import {connect} from 'react-redux';
import SharedElement from './SharedElement';
import {RootState} from '../../store/reducers';

const mapStateToProps = (state: RootState) => {
  return {
    darkmode: state.profile.darkmode,
  };
};

export default connect(mapStateToProps)(SharedElement);

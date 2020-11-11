import {connect} from 'react-redux';
import Settings from './Settings';
import {switchDarkmode} from '../../store/reducers/profileReducer';

const mapStateToProps = (state: any) => {
  console.log(state, 'STATE');
  /** Call the reducer by it's name. */
  return {
    darkmode: state.profile.darkmode,
  };
};

const mapDispatchToProps = {
  switchDarkmode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

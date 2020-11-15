import {connect} from 'react-redux';
import Settings from './Settings';
import {switchDarkmode} from '../../store/reducers/profileReducer';
import {setLanguage} from '../../store/reducers/languageSlice';

const mapStateToProps = (state: any) => {
  /** Call the reducer by it's name. */
  const {darkmode} = state.profile;
  const {language} = state.language;
  return {
    /** Shorthand object literal */
    darkmode,
    language,
  };
};

const mapDispatchToProps = {
  switchDarkmode,
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

import {connect} from 'react-redux';
import Settings from './Settings';
import {
  switchDarkmode,
  setSplashscreen,
} from '../../store/reducers/profileReducer';
import {setLanguage} from '../../store/reducers/languageSlice';

const mapStateToProps = (state: any) => {
  /** Call the reducer by it's name. */
  const {darkmode, splashscreen} = state.profile;
  const {language} = state.language;
  return {
    /** Shorthand object literal */
    darkmode,
    splashscreen,
    language,
  };
};

const mapDispatchToProps = {
  setSplashscreen,
  switchDarkmode,
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

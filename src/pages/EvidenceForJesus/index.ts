import {connect} from 'react-redux';
import {RootState} from '../../store/reducers';
import EvidenceForJesus from './EvidenceForJesus';

const mapStateToProps = (state: RootState) => {
  const {darkmode} = state.profile;
  return {
    darkmode,
  };
};

export default connect(mapStateToProps, null)(EvidenceForJesus);

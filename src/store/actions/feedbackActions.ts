// import { createAction } from 'redux-actions';
// import endpoints from '../../api/endpoints';
// import apiRequest from '../../api/apiRequest';
// import { logApiError, logApiSuccess } from '../../utils/LoggingUtils';
// import { DELETE, POST, PUT } from '../../api/methods';
//
// const BASE_ACTION = 'FEEDBACK';
// export const GET_FEEDBACK = `${BASE_ACTION}/GET_FEEDBACK`;
//
// const setFeedbackAction = createAction(GET_FEEDBACK);
//
// export const getFeedbackList = () => async (dispatch: any, getState: any) => {
//   try {
//     const state = getState();
//     const { isConnected } = state.profileReducer;
//     const endpoint = `${endpoints.FEEDBACK_BASE}/${endpoints.GET_FEEDBACK_LIST}`;
//     const feedback = await apiRequest({
//       endpoint,
//       hasInternet: isConnected,
//     });
//     logApiSuccess('Successfully received feedback');
//
//     dispatch(setFeedbackAction(feedback.data));
//     return feedback;
//   } catch (e) {
//     logApiError('Failed to get the feedback list', e);
//     throw Error(e);
//   }
// };
//
// export const createFeedback = (feedback: string) => async (dispatch: any, getState: any) => {
//   try {
//     const state = getState();
//     const {
//       token,
//       user: { id },
//       isConnected,
//     } = state.profileReducer;
//     const endpoint = `${endpoints.FEEDBACK_BASE}/${endpoints.CREATE_FEEDBACK}`;
//     const body = {
//       user: id,
//       feedback,
//     };
//     const response = await apiRequest({
//       method: POST,
//       endpoint,
//       headers: {
//         Authorization: `Token ${token}`,
//       },
//       body,
//       hasInternet: isConnected,
//     });
//     logApiSuccess('Successfully created feedback');
//     return response;
//   } catch (e) {
//     logApiError('Failed to create feedback', e);
//     throw Error(e);
//   }
// };
//
// export const updateFeedback = (feedback: string, feedback_id: number) => async (
//   dispatch: any,
//   getState: any,
// ) => {
//   try {
//     const state = getState();
//     const {
//       token,
//       user: { id },
//       isConnected,
//     } = state.profileReducer;
//     const endpoint = `${endpoints.FEEDBACK_BASE}/${feedback_id}/${endpoints.UPDATE_FEEDBACK}`;
//     const body = {
//       user: id,
//       feedback,
//     };
//     const response = await apiRequest({
//       method: PUT,
//       endpoint,
//       headers: {
//         Authorization: `Token ${token}`,
//       },
//       body,
//       hasInternet: isConnected,
//     });
//     logApiSuccess('Successfully updated feedback');
//     return response;
//   } catch (e) {
//     logApiError('Failed to update feedback', e);
//     throw Error(e);
//   }
// };
//
// export const deleteFeedback = (feedback_id: number) => async (dispatch: any, getState: any) => {
//   try {
//     const state = getState();
//     const { isConnected, token } = state.profileReducer;
//     const endpoint = `${endpoints.FEEDBACK_BASE}/${feedback_id}/${endpoints.DELETE_FEEDBACK}`;
//     const response = await apiRequest({
//       method: DELETE,
//       endpoint,
//       headers: {
//         Authorization: `Token ${token}`,
//       },
//       hasInternet: isConnected,
//     });
//     logApiSuccess('Successfully deleted feedback');
//     return response;
//   } catch (e) {
//     logApiError('Failed to delete feedback', e);
//     throw Error(e);
//   }
// };

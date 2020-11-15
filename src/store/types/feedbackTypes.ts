import { GET_FEEDBACK } from '../actions/feedbackActions';

export interface FeedbackObject {
  id: number;
  user_id: number;
  username: string;
  user: number;
  feedback: string;
  created_at: string;
}

export interface FeedbackState {
  /** feedback is an array with FeedbackObjects in it. */
  feedback: FeedbackObject[];
}

interface GetFeedbackAction {
  type: typeof GET_FEEDBACK;
  payload: FeedbackObject[];
}

export type FeedbackActionTypes = GetFeedbackAction;

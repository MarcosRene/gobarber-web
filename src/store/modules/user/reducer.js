import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, aciton) {
  return produce(state, draft => {
    switch (aciton.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = aciton.payload.user;
        break;
      }
      case '@auth/UPDATE_PROFILE_SUCESS': {
        draft.profile = aciton.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}

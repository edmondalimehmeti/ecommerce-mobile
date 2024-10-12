import {
  AUTHENTICATION,
  SHOW_BOTTOM_SHEET,
  HIDE_BOTTOM_SHEET,
  SHOW_GLOBAL_LOADER,
  HIDE_GLOBAL_LOADER,
} from '_redux/app/types';

const bottomSheetState = (state = {}, action) => {
  switch (action.type) {
    case SHOW_BOTTOM_SHEET:
      return {
        ...state,
        ...action.data,
      };
    case HIDE_BOTTOM_SHEET:
      return null;
    default:
      return state;
  }
};

const globalLoaderState = (state = {}, action) => {
  switch (action.type) {
    case SHOW_GLOBAL_LOADER:
      return {
        ...state,
        show: true,
      };
    case HIDE_GLOBAL_LOADER:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

const authentication = (state = {isFetching: false}, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {
        ...state,
        isFetching: false,
        ...action.data,
      };
    default:
      return state;
  }
};

// const me = (state = {isFetching: false}, action) => {
//   switch (action.type) {
//     case ADD_ME:
//       return {...state, isFetching: false, ...action.data};
//     case COMPLETE_ONBOARDING:
//       return {...state, isFetching: false, has_completed_onboarding: true};
//     case CHANGE_VERIFICATION_STATUS:
//       return {
//         ...state,
//         isFetching: false,
//         all_requirements: {...state.all_requirements, is_verified: action.data},
//       };
//     default:
//       return state;
//   }
// };

const favorites = (state = {products: []}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default {
  authentication,
  bottomSheetState,
  globalLoaderState,
  favorites,
};

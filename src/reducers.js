import { 
  CHANGE_SEARCH_FILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
} from './constants';

const initialSearchFieldState = {
  searchField: ''
};

const initialRobotState = {
  robots: [],
  isPending: false,
  error: ''
};

export const searchRobots = (state = initialSearchFieldState, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FILED: 
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export const requestRobots = (state = initialRobotState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
}
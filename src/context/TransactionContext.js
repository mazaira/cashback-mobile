import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const transactionReducer = (state, action) => {
  switch(action.type) {
    case 'get_transactions':
      return action.payload;
    default:
      return state;
  }
};

const getTransactions = dispatch => {
  return async () => {
    const response = await jsonServer.get('transactions');

    dispatch({type: 'get_transactions', payload: response.data});
  };
}

export const { Context, Provider } = createDataContext(
  transactionReducer,
  { getTransactions} ,
  []
);

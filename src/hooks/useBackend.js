import { useEffect, useState } from 'react';
import backend from '../api/backend';

export default () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [account, setAccount] = useState('corona');

  const fetchAccount = async (accountId) => {
    try {
      const response = await backend.get('/accounts/1', { params: { id: accountId } });
      setAccount(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => { fetchAccount('1'); }, []);

  return [account, errorMessage];
};

const LOCAL_STORAGE_AUTHORIZATION_KEY = 'authorization-token';

export const getSavedToken = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTHORIZATION_KEY);
  return token || '';
};

export const saveToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_AUTHORIZATION_KEY, token);
};

export const deleteToken = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_AUTHORIZATION_KEY);
};

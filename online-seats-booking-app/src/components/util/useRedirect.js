import { useNavigate } from 'react-router-dom';






export const useRedirect = () => {
  const navigate = useNavigate();

  const redirect = (path) => {
    navigate(path);
  };

  return redirect;
};

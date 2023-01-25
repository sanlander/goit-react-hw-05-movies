// import { useLocation } from 'react-router-dom';
import { Button } from './BtnGoBack.styled';
import { BiArrowBack } from 'react-icons/bi';

export const BtnGoBack = ({ href }) => {
  return (
    <>
      <Button to={href}>
        <BiArrowBack />
        Go back
      </Button>
    </>
  );
};

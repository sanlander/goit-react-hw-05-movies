import { Button } from './BtnGoBack.styled';
import { BiArrowBack } from 'react-icons/bi';

export const BtnGoBack = () => {
  return (
    <>
      <Button to="/">
        <BiArrowBack  />
        Go back
      </Button>
    </>
  );
};

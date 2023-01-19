import { Input, Button } from './Movies.styled';

export const Movies = () => {
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <main>
      <form>
        <Input type="text"></Input>
        <Button onClick={handleFormSubmit} type="submit">
          Search
        </Button>
      </form>
    </main>
  );
};

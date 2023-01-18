import { Input, Form, Button } from './Movies.modules';

export const Movies = () => {
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <main>
      <Form>
        <Input type="text"></Input>
        <Button onClick={handleFormSubmit} type="submit">
          Search
        </Button>
      </Form>
    </main>
  );
};

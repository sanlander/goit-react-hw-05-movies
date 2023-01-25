import { Input, Button } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ onClick, values }) => {
  const [inputValue, setInputValue] = useState(values);

  const onChengeInput = e => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    onClick(inputValue);

    setInputValue('');
  };

  return (
    <div>
      <Input value={inputValue} type="text" onChange={onChengeInput} />
      <Button type="submit" onClick={handleClick}>
        Отправить
      </Button>
    </div>
  );
};

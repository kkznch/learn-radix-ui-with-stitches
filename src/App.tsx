import type { FC } from 'react';
import { styled } from './theme';

const Button = styled('button', {
  backgroundColor: '$forest-200',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  marginX: '120px',
  '&:hover': {
    backgroundColor: 'LightGray',
  },
});

const App: FC = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Button>ボタンです</Button>
    </div>
  );
};

export default App;

import { useTheme } from '@emotion/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const theme = useTheme()

  return (
    <div css={{
      color: theme.colors.main
    }}>
      Home
    </div>
  );
}

export default Home;

import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useMainGame } from 'games/main';

const Home: NextPage = () => {
  const { init, animate } = useMainGame()

  useEffect(()=>{
    init()
    animate()
  },[animate, init])

  return (
    <div/>
  );
}

export default Home;

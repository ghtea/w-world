import { createContext, useCallback, useRef, useMemo, useContext, ReactNode } from 'react'
import { MainGame } from './MainGame'

export type MainGameContext = {
  init: ()=>void
  animate: ()=>void
}

export const mainGameContext = createContext<MainGameContext>({
  init: ()=>{},
  animate: ()=>{}
})

export const useMainGame = () => useContext(mainGameContext)

export const MainGameProvider = ({ children }: { children: ReactNode }) => {
  const mainGameRef = useRef<MainGame | null>(null)

  const init = useCallback(()=>{
    if (mainGameRef.current) return;

    mainGameRef.current = new MainGame()
    mainGameRef.current.init()
  },[])

  const animate = useCallback(()=>{
    mainGameRef.current?.animate()
  },[])

  const value = useMemo(()=>({ init, animate }),[animate, init])

  return (
    <mainGameContext.Provider value={value}>
      {children}
    </mainGameContext.Provider>
  )
}
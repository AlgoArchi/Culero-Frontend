import { contentsContext } from '@/providers'
import { useContext } from 'react'

export const useContents = () => {
  const contents = useContext(contentsContext)
  return contents
}

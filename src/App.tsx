import { useEffect, useState } from 'react'
import { ApiResponse } from './types/ApiResponse';
import { getComments } from './services/ApiService';

const App = () => {

  const [apiRes, setApiRes] = useState<ApiResponse>();

  useEffect(() => {
    getComments().then(res => setApiRes(res))
  }, [])

  return (
    <div>{apiRes?.currentUser.username}</div>
  )
}

export default App
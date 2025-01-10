import { useEffect, useState } from 'react'
import { ApiResponse } from './types/ApiResponse';
import { getComments } from './services/ApiService';
import Comment from './components/Comment';

const App = () => {

  const [apiRes, setApiRes] = useState<ApiResponse>();

  useEffect(() => {
    getComments().then(res => setApiRes(res))
  }, [])

  return (
    <div>
      {apiRes?.comments.map(comment => <Comment {...comment}/>)}
    </div>
  )
}

export default App
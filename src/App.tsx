import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const baseURL: string = "http://ceprj.gachon.ac.kr:60006";
  const [hasVal, setHasVal] = useState<boolean>(false);

  const onClickBtn = () => {
    const axiosInstance = axios.create({
      baseURL: baseURL,
      withCredentials: true,
    })
    axiosInstance.get(`/getUser?userId=1`)
      .then((res) => {
        console.log({res});
        setHasVal(true);
      })
      .catch((e) => {
        console.error({e});
      });
  }

  const onClickClearBtn = () => {
    setHasVal(false);
  }

  return (
    <>
      <button onClick={onClickBtn}>서버에 요청 보내보기</button>
      {
        hasVal ?
          <div>정상 동작 중..</div> :
          <div>응답 없음</div>
      }
      <button onClick={onClickClearBtn}>초기화 하기</button>
    </>
  );
}

export default App;

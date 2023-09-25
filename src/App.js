import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* 헤더 컴포넌트 들어갈 부분*/}
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          {/*홈*/}
        </Routes>
      {/* 푸터 컴포넌트 들어갈 부분*/}
      </BrowserRouter>
    </div>
  );
}

export default App;

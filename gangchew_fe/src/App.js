import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./main/Header";
import FundingCreate from "./funding/FundingCreate";
import Login from "./member/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route exact path='/' element={<Home/>}/> */}
          {/*홈*/}
          <Route exact path="/fundingcreate" element={<FundingCreate />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        {/* 푸터 컴포넌트 들어갈 부분*/}
      </BrowserRouter>
    </div>
  );
}

export default App;

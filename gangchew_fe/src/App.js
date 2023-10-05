import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './main/Header';
import FundingList from './funding/FundingList';
import FundingCreate from './funding/FundingCreate';
import Test from './funding/Test';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
       {/* <Route exact path='/' element={<Home/>}/> */} 
        {/*홈*/}
        <Route exact path='/fundinglist' element={<FundingList/>}/>
        <Route exact path='/fundingcreate' element={<FundingCreate/>}/>
        <Route exact path='/test' element={<Test/>}/>
      </Routes>
    {/* 푸터 컴포넌트 들어갈 부분*/}
    </BrowserRouter>
  </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './main/Header';
import FundingList from './funding/FundingList';
import FundingCreate from './funding/FundingCreate';
import Login from './member/Login';
import ConsumerCreate from './consumer/ConsumerCreate';
import ConsumerDetail from './consumer/ConsumerDetail';


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
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/consumercreate' element={<ConsumerCreate/>}/>        
        <Route exact path='/consumerdetail' element={<ConsumerDetail/>}/>

              
      </Routes>
    {/* 푸터 컴포넌트 들어갈 부분*/}
    </BrowserRouter>
  </div>
  );
}

export default App;

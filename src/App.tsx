import React from 'react';
import logo from './logo.svg';
import './css/MainPage.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" >
					<Route index element={<MainPage />} />
				</Route>
      </Routes>
    </BrowserRouter >
    </>
  );
}

export default App;

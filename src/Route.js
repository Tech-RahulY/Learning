import {Routes,Route,BrowserRouter} from "react-router-dom";
import React from 'react';
import './App.css';
import Todo from "./Pages/Todo"
import Table from "./Pages/Table"
//import Users from "./Pages/Users"

const LazyPage= React.lazy(() => import("./Pages/Users"));

function Router() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Todo/>} />
      <Route path="/table" element={<Table/>} />
      <Route path="/users" element={
      <React.Suspense  fallback='...Loading'>
        <LazyPage />
      </React.Suspense>
      } />
     </Routes>
    </BrowserRouter>
  );
}

export default Router;

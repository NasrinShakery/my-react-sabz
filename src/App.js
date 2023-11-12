import './App.css';
import Login from "./components/Login"
import Login1 from "./components/Login1"

function App() {
  return (
    <>
      {/* <Login/>   WRONG!! */} 
      <Login1/>
    </>
  );
}

export default App;

// 
//  npm i @mui/material
//
// npm install @supabase/supabase-js 
// import { createClient } from "@supabase/supabase-js";
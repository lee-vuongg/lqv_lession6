import logo from './logo.svg';
import './App.css';
import React,{useState}from 'react'
import LQVListTask from './components/LQVListTask';
import LQVTaskAddOrEdit from './components/LQVTaskAddOrEdit';
function App() {
  // mock data
  const LQV_listTasks = [
    {LQV_taskId:2210900083,LQV_taskName:"Lê Quốc Vương", LQV_level:"Small" },
    { LQV_taskId:1,LQV_taskName:"Học lập trình frontend", LQV_level:"Small" },
    { LQV_taskId:2, LQV_taskName:"Học lập trình reactjs",LQV_level:"Medium"},
    { LQV_taskId:3, LQV_taskName:"Lập trình với Frontend - Reactjs",LQV_level:"High"},
    { LQV_taskId:4, LQV_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",LQV_level:"Small"},
   ];
   // sử dụng hàm usestate để lưu trữ trạng thái dữ liệu
   const [tvcLisrTasks,setLQVListTasks]= useState(LQV_listTasks);
  return (
    <div className="container border">
      <h1> Lê Quốc Vương-K22CNTT2</h1>
      <hr/>
      <div>
        {/* Danh sách list task*/}
        <LQVListTask rederLQVListTasks ={LQV_listTasks}/>
        <LQVTaskAddOrEdit/>
      </div>
    </div>
  );
}

export default App;
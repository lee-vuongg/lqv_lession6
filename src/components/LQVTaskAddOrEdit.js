import React, { useState } from 'react'

export default function LQVTaskAddOrEdit() {
    // Đối tượng task
    const LQVTaskobj ={ 
        LQV_taskId:0, 
        LQV_taskName:"",
        LQV_level:""
    }
    
    const [LQVTask,setLQVTask]=useState(LQVTaskobj);
    // Hàm sử lý sự lý sự kiện thay đổi trên điều kiện
    const LQVHandleChage=(LQVEvent)=>{
        let name = LQVEvent.target.name;
        let value=LQVEvent.target.value;

        setLQVTask(prev=>{
            return{
            ...prev,
            [name]:value,
            }
        })
    }
    const LQVHandleSubmit=(LQVEvent)=>{
        LQVEvent.preventDefault();
        LQVOnSubmit(LQVTask);
    }
  return (
    <div>
      <h2>Thêm mới task</h2>
      <form>
        <div class="input-group mb-3"> 
        <span class="input-group-text" id="basic-addon1">Task ID</span>
        <input type="text"
           name='LQV_taskId' value={LQVTask.LQV_taskId} onChange={LQVHandleChage}
           class='form-control' placeholder="Username" aria-lable="Usernamr" aria-aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3"> 
        <span class="input-group-text" id="basic-addon1">Task ID</span>
        <input type="text"
           name='LQV_taskId' value={LQVTask.LQV_taskId} onChange={LQVHandleChage}
           class='form-control' placeholder="Username" aria-lable="Usernamr" aria-aria-describedby="basic-addon1">
            <lable>Tas ID</lable>
            <input name='LQV_TaskId' value={LQVTask.LQV_taskId} onChange={'LQVHandleChage'}></input>
        </div>
        <div>
            <lable>Tas ID</lable>
            <input name='LQV_TaskId' value={LQVTask.LQV_taskId} onChange={'LQVHandleChage'}></input>
        </div>
        <div>
            <lable>Tas Name</lable>
            <input name='LQV_TaskName' value={LQVTask.LQV_taskName} onChange={'LQVHandleChage'}></input>
        </div>
        <div>
            <lable>Tas ID</lable>
            <select name='LQV_level' value={LQVTask.LQV_level} onChange={'LQVHandleChage'}>
                <option value={'Small'}>Small</option>
                <option value={'Small'}>Small</option>
                <option value={'Small'}>Small</option>
            </select>
        </div>
        <button onClick={LQVHandleSubmit}>Ghi lại</button>
      </form>
    </div>
  )
}
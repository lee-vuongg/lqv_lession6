import React from 'react'

export default function LQVListTask() {
    console.log(renderLQVListTasks);
    // render dât
    let LQVElementTask=renderLQVListTasks.map((task,index)=>{
  return (
    <>
      <tr key={index}>
        <td>{index+1}</td>
        <td>{task.LQV_taskID}</td>
        <td>{task.LQV_taskName}</td>
        <td>{task.LQV_level}</td>
        <td>{task.LQV_level}</td>
        <td>
            <button className='btn btn-success'>Edit</button>
            <button className='btn btn-danger'>Remove</button>
        </td>
      </tr>
    </>
  )
    })
   return(
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th> STT </th>
                    <th> Task Id </th>
                    <th> Task Name </th>
                    <th> Task Level </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                { LQVElementTask}
            </tbody>
        </table>
      
    </div>
  )
}
import { useState } from "react"

const Form=()=>{
    const [data,setData] =useState({
        username:"",
        email:"",
         mobile:"",
         password:""
     
    })
    const [result ,setResult] =useState([])
      const HandleChange =(e)=>{
        const name =e.target.name;
        const value =e.target.value;
        console.log(name,value)
        setData({...data,[name]:value})

           
      }
      const handle =(e)=>{
    e.preventDefault()
       const newUser = {...data, id:new Date().getDate().toString()}
      setResult([...result,newUser])
      setData({username:"",email:"",mobile:"", password:""})
      }
    return (
        <div>
    <form action="" onSubmit={handle}>
    <div className="username">
          <label className="name">username</label><br></br>
        <input type="text" name="username" value={data.username} autoComplete="off" required className="input" onChange={HandleChange}/>
</div>
       
       <div className="username">
          <label className="name">email</label><br></br>
        <input type="text" name="email" value={data.email} autoComplete="off" required className="input" onChange={HandleChange}/>
</div>

<div className="username">
          <label className="name">mobile</label><br></br>
        <input type="text" name="mobile" value={data.mobile} autoComplete="off" required className="input" onChange={HandleChange}/>
</div>
<div className="username">
          <label className="name">password</label><br></br>
        <input type="password" name="password" value={data.password} autoComplete="off" required className="input" onChange={HandleChange}/>
</div>

   <button className="button" type="submit">registration</button>
    </form>
   <div className="div">
  {result.map((e)=>(
    <div key={e.id}>
    <h3>Name: {e.username}</h3>
    <h3>Email: {e.email}</h3>
    <h3>Mobile: {e.mobile}</h3>
    <h3>Password: {e.password}</h3>
    </div>
  ))}
   </div>

        </div>
    )
}
export default Form



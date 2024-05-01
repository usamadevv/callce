import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import prof from '../../images/prof.png'
import { api } from '../apis';
import axios from 'axios'
// Example items, to simulate fetching from another resources.
const items = [{
  name:'John Cena',
  Role :'Owner',
  Bill:40,
  limit:0,
  img:prof

},
{
  name:'John Cena',
  Role :'Owner',
  Bill:40,
  limit:0,
  img:prof

},
{
  name:'John Cena',
  Role :'Owner',
  Bill:40,
  limit:0,
  img:prof

},
{
  name:'John Cena',
  Role :'Owner',
  Bill:40,
  limit:0,
  img:prof

},
{
  name:'John Cena',
  Role :'Owner',
  Bill:40,
  limit:0,
  img:prof

},
{
  name:'John Cena',
  Role :'Owner',
  Bill:40,
  limit:0,
  img:prof

},
{
  name:'John Cena',
  Role :'Owner',
  Bill:40,
  limit:0,
  img:prof

},
{
  name:'John Cena',
  Role :'Owner',
  Bill:40,
  limit:0,
  img:prof

},



];


function Table({ currentItems }) {
  return (
    <>
      
 
        {
          currentItems.map(val=>(
            <div className="header rowmod">
<h1>
  <img src={val.img} alt="" />
{val.name
}
</h1>

<h1>
Holly Disney
</h1>      
<h1>{val.Bill} $ / Hourly</h1>
<h1>{val.limit}</h1>
<h1><button className='edit-mem' >Edit Member</button></h1>

      </div>
          ))
        }
  
    </>
  );

        }
const Users = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [users, setusers] = useState([])
  useEffect(() => {
    axios.get(`${api}/user/getallusers`).then(res=>{
setusers(res.data.User)
    })
  
    return () => {
      
    }
  }, [])
  
  function submit(){
    axios.post(`${api}/user/add`,{
  name:name,
  address:address,
  email:email,
  password:password,
  billrate:billrate,
  payrate:payrate,
  ptype:ptype,
  
    }).then(res=>{
      console.log(res)
      axios.get(`${api}/user/getallusers`).then(resa=>{
      setusers(resa.data.User)
      })
    })
  }
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [address, setaddress] = useState('')
const [timezone, settimezone] = useState('')
const [ptype, setptype] = useState('hourly')
const [payrate, setpayrate] = useState('')
const [billrate, setbillrate] = useState('')
const [Role, setRole] = useState('')
  const [steps, setsteps] = useState(0)
const [add, setadd] = useState(false)

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  
  return (
<div className="users">
 <div className="toprow">
 <button
 onClick={e=>setadd(true)}
    className='std-btn'
    >+ Add Member</button>

 </div>


{
  add?
  <>

 <h4><button className='' onClick={e=>setadd(false)}>Back</button> Add member</h4>
  <div className="formbox">


  
  <div className="process">
{
  steps===0?
  <div className="prcs1">

  </div>:
      <div className="prcs0">

      </div>
}
{
  steps===1?
  <div className="prcs1">

  </div>:
      <div className="prcs0">

      </div>
}
 


  </div>
{
  steps===0?

  <>
  <h5>General Details</h5>
  <h6>Name <p>*</p></h6>
  <input onChange={e=>setname(e.target.value)} type="text" placeholder='Name' />
  <h6>Email <p>*</p></h6>
  <input onChange={e=>setemail(e.target.value)} type="text" placeholder='Email' />
  <h6>Password <p>*</p></h6>
  <input onChange={e=>setpassword(e.target.value)} type="text" placeholder='Password' />
  <h6>Address </h6>
  <input onChange={e=>setaddress(e.target.value)} type="text" placeholder='California' />
<h6>Timezone</h6>
<Select
  className='select-formdata'
        options={options}
      />
      <button onClick={e=>setsteps(1)} className='std-btn-full' >Next</button>
  </>:

<>
<h5>Other Info</h5>
<h6>Payment </h6>
<div className="payment">
  <input type="radio" />
  <p>Hourly</p>

  <input type="radio" />
  <p>Monthly</p></div>
<h6>Pay Rate <p>*</p></h6>
<input onChange={e=>setpayrate(e.target.value)} type="text" placeholder='Pay Rate' />
<h6>Bill Rate <p>*</p></h6>
<input onChange={e=>setbillrate(e.target.value)} type="text" placeholder='Bill Rate' />

<h6>Team</h6>
<Select
className='select-formdata'
      options={options}
    />
    <h6>Role</h6>
<Select
className='select-formdata'
      options={options}
    />
 <div className="btns">
 <button onClick={e=>setsteps(0)} className='std-btn-full-grey' >Back</button>
 <button onClick={e=>submit()} className='std-btn-full-green' >Submit</button>
 </div>
</>
}

 </div>
 </>
 :<div className="tablemod">
 <div className="header">
   <h1>Name</h1>
   <h1>Assigned Projects</h1>
   <h1>Payment</h1>
   <h1>Weekly limit</h1>
   <h1>Actions</h1>
 </div>

{
          users&&users.map(val=>(
            <div className="header rowmod">
<h1>
  <img src={val.img} alt="" />
{val.name
}
</h1>

<h1>
{val.name}
</h1>      
<h1>{val.billrate} $ / Hourly</h1>
<h1>{val.email}</h1>
<h1><button className='edit-mem' >Edit Member</button></h1>

      </div>
          ))
        }
  
</div>

}



</div>
  )
}

export default Users
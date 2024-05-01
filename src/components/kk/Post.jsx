import React, { useState } from 'react'

import { RiDashboard3Line } from "react-icons/ri";
import { PiFilesBold } from "react-icons/pi";
import { MdScreenshotMonitor } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { CgLivePhoto } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
import { MdOutlineAvTimer } from "react-icons/md";
import svg from '../../images/svg.svg'
import './post.css'
import Users from '../Users/Users';
import Screenshots from '../Users/Screenshots';

const Post = () => {
  const [i, seti] = useState('users')
  return (
  <div className="wide">
    <div className="left">
      <img src={svg} alt="" />
      <p>
      <RiDashboard3Line  className='icond'/> Dashboard</p>

      <p>
      <PiFilesBold  className='icond'/>

        Projects</p>
      <p>
        <MdScreenshotMonitor  className='icond'/>
        App usage</p>
<p
onClick={e=>seti('users')}
>
  <IoPeople  className='icond'/>
  People</p>
  <p>
  <IoPeople  className='icond'/>
  Chat</p>

<p>
  
  <TbReportAnalytics  className='icond'/>
  Reports</p>
<p onClick={e=>seti('screen')}>
  <CgLivePhoto className='icond' />
  Live Tracking</p>
<p>
  <MdPayment  className='icond'/>
  Payroll</p>
<p>
  <BiSolidDollarCircle  className='icond'/>
  Payments</p>
<p>
  <MdOutlineBusinessCenter className='icond'/>
  Clients</p>
      <p>
        <MdOutlineAvTimer className='icond'/>
        Timesheets</p>

    </div>
    <div className="right">
{i==='users'&&
<Users />


}
{i==='screen'&&
<Screenshots />


}

    </div>
  </div>
  )
}

export default Post
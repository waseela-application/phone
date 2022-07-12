import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CSS from './Thanks.module.css'
import { UserContext } from '../../Contexts/UserContext'


export default function Thanks() {

    const {setTab} = useContext(UserContext);

    const navigate = useNavigate();

  return (
    <div className={CSS.container}>
        <h1>تم إستلام طلبك بنجاح</h1>
        <p>سوف تتواصل معك الإداره خلال 48 ساعه</p>
        <div><button onClick={()=>{
          setTab("main")
          navigate('/home')
        }}>فهمت</button></div>
        <p onClick={()=>{
          setTab("main")
          navigate('/home')
        }}>إغلاق</p>
    </div>
  )
}
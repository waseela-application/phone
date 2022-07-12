import React, {useContext, useEffect, useRef} from 'react'
import CSS from './StepFour.module.css'
import {UserContext} from '../../Contexts/UserContext'
import Schedule from '../Schedule/Schedule';

export default function StepFour() {

    const {userDetails, setUserDetails} = useContext(UserContext);

    const chatDiv = useRef();
    const dateDiv = useRef();

    useEffect(()=>{
        if (userDetails.order === "chat"){ chat() }
        if (userDetails.order === "date"){ date() }
    },[])

    function chat(){
        setUserDetails({...userDetails, order: "chat" })
        chatDiv.current.classList.add(CSS[`active`])
        dateDiv.current.classList.remove(CSS[`active`])
    }

    function date(){
        setUserDetails({...userDetails, order: "date" })
        dateDiv.current.classList.add(CSS[`active`])
        chatDiv.current.classList.remove(CSS[`active`])
    }

  return (
    <>
        <p>الخطوة الأخيرة</p>
        <h1 className={CSS.title}>الأوقات المتاحة</h1>
        <h4>انواع الحجز</h4>

        <div className={CSS.orderContainer}>
            <div>
                <div className={CSS.order} ref={dateDiv} onClick={date} >
                    <h4>حجز فوري</h4>
                    <p>يختار الطلب موعد من المواعيد المتاحه في التقويم</p> 
                </div>
            </div>
            <div>
                <div className={CSS.order} ref={chatDiv} onClick={chat} >
                    <h4>الموعد بالمراسلة</h4>
                    <p>يتم تحديد الموعد من خلال تواصل الطلب معك بالدردشة</p>                    
                </div>
            </div>
        </div>

        <h4>التقويم الخاص بك</h4>

        <Schedule />

    </>
  )
}
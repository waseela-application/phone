import React, {useContext, useEffect, useRef} from 'react'
import CSS from './StepThree.module.css'
import {UserContext} from '../../Contexts/UserContext'
import Subjects from '../Subjects/Subjects';

export default function Step3() {

    const {userDetails, setUserDetails} = useContext(UserContext);

    const remoteDiv = useRef();
    const attendDiv = useRef();
    const remotePrice = useRef();
    const attendPrice = useRef();
    const maleButton = useRef();
    const femaleButton = useRef();
    const midButton = useRef();
    const highButton = useRef();
    const uniButton = useRef();

    useEffect(()=>{
        if (userDetails.student === "male"){male()}
        if (userDetails.student === "female"){female()}
        
        if (userDetails.teaching === "remote"){remote()}
        if (userDetails.teaching === "attend"){attend()}

        if (userDetails.stage === "mid"){mid()}
        if (userDetails.stage === "high"){high()}
        if (userDetails.stage === "uni"){uni()}

    },[])

    function remote(){
        setUserDetails({...userDetails, teaching: "remote"})
        remoteDiv.current.classList.add(CSS[`active`])
        attendDiv.current.classList.remove(CSS[`active`])
        remotePrice.current.style.display = "flex"
        attendPrice.current.style.display = "none"
    }

    function attend(){
        setUserDetails({...userDetails, teaching: "attend" })
        attendDiv.current.classList.add(CSS[`active`])
        remoteDiv.current.classList.remove(CSS[`active`])
        attendPrice.current.style.display = "flex"
        remotePrice.current.style.display = "none"
    }

    function male(){
        setUserDetails({...userDetails, student: "male" })
        maleButton.current.classList.add(CSS[`active`])
        femaleButton.current.classList.remove(CSS[`active`])
    }

    function female(){
        setUserDetails({...userDetails, student: "female" })
        femaleButton.current.classList.add(CSS[`active`])
        maleButton.current.classList.remove(CSS[`active`])
    }

    function mid(){
        setUserDetails({...userDetails, stage: "mid" })
        midButton.current.classList.add(CSS[`active`])
        highButton.current.classList.remove(CSS[`active`])
        uniButton.current.classList.remove(CSS[`active`])
    }

    function high(){
        setUserDetails({...userDetails, stage: "high" })
        highButton.current.classList.add(CSS[`active`])
        midButton.current.classList.remove(CSS[`active`])
        uniButton.current.classList.remove(CSS[`active`])
    }

    function uni(){
        setUserDetails({...userDetails, stage: "uni" })
        uniButton.current.classList.add(CSS[`active`])
        midButton.current.classList.remove(CSS[`active`])
        highButton.current.classList.remove(CSS[`active`])
    }
        
  return (
    <div className={CSS.container}>
        <p>الخطوة الثالثة</p>
        <h1 className={CSS.title}>خصائص التدريس</h1>
        <h4>انواع التدريس</h4>

                <div className={CSS.teachingType} ref={attendDiv} onClick={attend} >
                    <div>
                        <div ref={attendPrice} className={CSS.price}>
                            <button>ريال</button>
                            <input 
                                type='number' 
                                defaultValue={userDetails.price} 
                                placeholder='سعر الساعة' 
                                onChange={(e)=>( setUserDetails({...userDetails, price: e.target.value}) )} >
                            </input>
                        </div>
                    </div>
                    <div className={CSS.type}>
                        <h4>حضوري</h4>
                        <p>يتم تحديد المكان بالاتفاق</p> 
                    </div>
                   
                </div>
                <div className={CSS.teachingType} ref={remoteDiv} onClick={remote}>
                    <div>
                        <div ref={remotePrice} className={CSS .price}>
                            <button>ريال</button>
                            <input 
                                type='number' 
                                defaultValue={userDetails.price} 
                                placeholder='سعر الساعة' 
                                onChange={(e)=>( setUserDetails({...userDetails, price: e.target.value}))} >
                            </input>
                        </div>
                    </div>
                    <div className={CSS.type}>
                        <h4>عن بعد</h4>
                        <p>zoom يتم من على برنامج </p> 
                    </div>
                   
                </div>
            <div>

                <h3 style={{paddingTop: "15px"}}>نوع الطلاب اللذين ترغب بالتدريس لهم</h3>
                
                <div className={CSS.buttons}>   
                    <button className={CSS.button} ref={maleButton} onClick={male} >ذكور</button>
                    <button className={CSS.button} ref={femaleButton} onClick={female} >إناث</button>
                </div>

            </div>
            <div>

                <h3>المرحله الدراسية للذين ترغب بالتدريس لهم</h3>
                
                <div>
                    <button ref={midButton} className={CSS.button} onClick={mid} >متوسط</button>
                    <button ref={highButton} className={CSS.button} onClick={high} >ثانوي</button>
                    <button ref={uniButton} className={CSS.button} onClick={uni}>جامعي</button>
                </div>

            </div>

        <Subjects />
    </div>
  )
}

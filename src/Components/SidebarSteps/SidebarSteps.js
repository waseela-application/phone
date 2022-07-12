import React, { useContext, useEffect, useRef } from 'react'
import CSS from './SidebarSteps.module.css'
import { UserContext } from '../../Contexts/UserContext'

export default function SidebarSteps() {

  const {Tab} = useContext(UserContext);

  const StepOne = useRef();
  const StepTwo = useRef();
  const StepThree = useRef();
  const StepFour = useRef();

  useEffect(()=>{

    StepOne.current.classList.remove(CSS[`done`],CSS[`active`])
    StepTwo.current.classList.remove(CSS[`done`],CSS[`active`])
    StepThree.current.classList.remove(CSS[`done`],CSS[`active`])
    StepFour.current.classList.remove(CSS[`done`],CSS[`active`])

    if (Tab === "StepOne"){
      StepOne.current.classList.add(CSS[`active`])
    }
    if (Tab === "StepTwo"){
      StepOne.current.classList.add(CSS[`done`])
      StepTwo.current.classList.add(CSS[`active`])
    }
    if (Tab === "StepThree"){
      StepOne.current.classList.add(CSS[`done`])
      StepTwo.current.classList.add(CSS[`done`])
      StepThree.current.classList.add(CSS[`active`])
    }
    if (Tab === "StepFour"){
      StepOne.current.classList.add(CSS[`done`])
      StepTwo.current.classList.add(CSS[`done`])
      StepThree.current.classList.add(CSS[`done`])
      StepFour.current.classList.add(CSS[`active`])
    }
  })

  return (
    <div className={CSS.sidebar}>
      <div>
        <h1>أعداد الحساب</h1><br/>

        <div className={CSS.steps}>
          <div>
            <p>الخطوه الاولى</p>
            <h3>المعلومات الأساسية</h3>
          </div>
          <div ref={StepOne} className={CSS.number}>01</div>
        </div>

        <div className={CSS.line}></div>

        <div className={CSS.steps}>
          <div>
            <p>الخطوه الثانية</p>
            <h3>الدراسة و الشهادات</h3>
          </div>
          <div ref={StepTwo} className={CSS.number}>02</div>
        </div>

        <div className={CSS.line}></div>
        
        <div className={CSS.steps}>
          <div>
            <p>الخطوه الثالثة</p>
            <h3>خصائص التدريس</h3>
          </div>
          <div ref={StepThree} className={CSS.number}>03</div>
        </div>

        <div className={CSS.line}></div>
  
        <div className={CSS.steps}>
          <div>
            <p>الخطوه الرابعة</p>
            <h3>الأوقات المتاحه</h3>
          </div>
          <div ref={StepFour} className={CSS.number}>04</div>
        </div>

        <div className={CSS.help}>
          <div>
            <p>هل تواجه تحديات؟</p>
            <h4>تواصل معنا لمساعدتك</h4>
          </div>
          <div className={CSS.helpNumber}>؟</div>
        </div>
      </div>
    </div>
  )
}
import React, { useContext, useEffect, useRef } from 'react'
import CSS from './StepOne.module.css'
import profile from '../../images/profile.jpg'
import { UserContext } from '../../Contexts/UserContext';

export default function Step1() {

  const { activeUser, userDetails, setUserDetails } = useContext(UserContext);

  const acadimyButton = useRef();
  const profitionButton = useRef();

  useEffect(() => {
    if (userDetails.type === "acadimy") { acadimy() }
    if (userDetails.type === "profition") { profition() }
  }, [])

  function acadimy() {
    setUserDetails({ ...userDetails, type: "acadimy" })
    acadimyButton.current.classList.add(CSS[`active`])
    profitionButton.current.classList.remove(CSS[`active`])
  }

  function profition() {
    setUserDetails({ ...userDetails, type: "profition" })
    profitionButton.current.classList.add(CSS[`active`])
    acadimyButton.current.classList.remove(CSS[`active`])
  }

  return (
    <>
      <h1 className={CSS.name}>مرحبا بك-استاذ {activeUser.name}</h1>
      <h4>خطوات سريعه و يصبح حسابك مكتمل</h4>
      <div className={CSS.profileContainer}>
        <div>
          <p className={CSS.link}>تغيير الصوره</p>
          <p>يوصى بمقاس الصوره</p>
          <p>120x120</p>
        </div>
        <img src={profile} alt='logo'></img>
      </div>

      <div className={CSS.selectDiv}>

        <div className={CSS.country}>
          <select defaultValue={userDetails.country} onChange={(e) => { setUserDetails({ ...userDetails, country: e.target.value }) }} >
            <option value="" disabled hidden>الدولة</option>
            <option value="Saudi Arabia">المملكه العربيه السعوديه</option>
          </select>
        </div>

        <div className={CSS.city}>
          <select defaultValue={userDetails.city} onChange={(e) => { setUserDetails({ ...userDetails, city: e.target.value }) }} >
            <option value="" disabled hidden>المدينة</option>
            <option value="Jeddah">جده</option>
            <option value="Riyadh">الرياض</option>
          </select>
        </div>
      </div>

      <h4>نوع المدرس</h4>
      <div className={CSS.buttonsContainer}>
        <button ref={profitionButton} className={CSS.button} onClick={profition} >مهني</button>
        <button ref={acadimyButton} className={CSS.button} onClick={acadimy} >أكاديمي</button>
        <input type='textbox' defaultValue={userDetails.prief} placeholder='نبذة تعريفية' onChange={(e) => { setUserDetails({ ...userDetails, prief: e.target.value }) }} ></input>
      </div>
      <p className={CSS.allowed}>متاح استخدام 300 حرف</p>

    </>
  )
}
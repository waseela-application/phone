import React, { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CSS from './Home.module.css'
import { UserContext } from '../../Contexts/UserContext'
import profile from '../../images/profile.jpg'
import Main from '../../Components/Main/Main'
import Dates from '../../Components/Dates/Dates'
import Massages from '../../Components/Massages/Massages'
import Development from '../../Components/Development/Development'
import FreeLessons from '../../Components/FreeLessons/FreeLessons'
import Savings from '../../Components/Savings/Savings'
import Settings from '../../Components/Settings/Settings'
import elmLogo from '../../images/smallLogo.png'

export default function Home() {

  const { Auth, setAuth, activeUser, userDetails, Tab, setTab } = useContext(UserContext);
  const navigate = useNavigate()

  const sidebar = useRef();
  const button1 = useRef();
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();
  const button5 = useRef();
  const button6 = useRef();
  const button7 = useRef();

  useEffect(() => {

    if (Auth) {
      if (Tab !== "main" && Tab !== "dates" && Tab !== "massages" && Tab !== "development" && Tab !== "freeLessons" && Tab !== "savings" && Tab !== "settings") {
        navigate('/steps')
      }
      else { highlight() }
    }
  }, [Tab])

  function removeActive() {
    button1.current.classList.remove(CSS[`active`])
    button2.current.classList.remove(CSS[`active`])
    button3.current.classList.remove(CSS[`active`])
    button4.current.classList.remove(CSS[`active`])
    button5.current.classList.remove(CSS[`active`])
    button6.current.classList.remove(CSS[`active`])
    button7.current.classList.remove(CSS[`active`])
  }

  function highlight() {
    if (Tab === "main") { button1.current.classList.add(CSS[`active`]) }
    if (Tab === "dates") { button2.current.classList.add(CSS[`active`]) }
    if (Tab === "massages") { button3.current.classList.add(CSS[`active`]) }
    if (Tab === "development") { button4.current.classList.add(CSS[`active`]) }
    if (Tab === "freeLessons") { button5.current.classList.add(CSS[`active`]) }
    if (Tab === "savings") { button6.current.classList.add(CSS[`active`]) }
    if (Tab === "settings") { button7.current.classList.add(CSS[`active`]) }
  }



  return (
    <>
      {!Auth && (
        <div className={CSS.loginContainer}>

          <img src={elmLogo} alt="img" />
          <Link to={'/login'}>
            <button className={CSS.Button}>تسجيل الدخول</button>
          </Link>
          <Link to={'/signup'}>
            <button className={CSS.Button}>حساب جديد</button>
          </Link>
        </div>
      )}

      {Auth && (

        <div className={CSS.content}>

          {Tab === "main" && (<Main />)}
          {Tab === "dates" && (<Dates />)}
          {Tab === "massages" && (<Massages />)}
          {Tab === "development" && (<Development />)}
          {Tab === "freeLessons" && (<FreeLessons />)}
          {Tab === "savings" && (<Savings />)}
          {Tab === "settings" && (<Settings />)}

          <button className={CSS.sidebarBtn} onClick={() => { 
            sidebar.current.style.display = "flex"
            window.scrollTo(0, 0)
          }}>menu</button>
          <div ref={sidebar} className={CSS.sidebar}>

            <div className={CSS.profile}>
              <img src={profile} alt='logo' />
              <div>
                <p className={CSS.name}>{activeUser.name}</p>
                {userDetails.certificate === "bechlor"
                  ? <p>بكالريوس {userDetails.specialization} </p>
                  : <p> دبلوم {userDetails.specialization}</p>
                }</div>
            </div>

            <button ref={button1} className={CSS.button} onClick={() => {
              removeActive()
              button1.current.classList.add(CSS[`active`])
              setTab("main")
              sidebar.current.style.display = "none"
            }}>الرئيسية</button>
            <button ref={button2} className={CSS.button} onClick={() => {
              removeActive()
              button2.current.classList.add(CSS[`active`])
              setTab("dates")
              sidebar.current.style.display = "none"
            }}>المواعيد</button>
            <button ref={button3} className={CSS.button} onClick={() => {
              removeActive()
              button3.current.classList.add(CSS[`active`])
              setTab("massages")
              sidebar.current.style.display = "none"
            }}>الرسائل</button>
            <button ref={button4} className={CSS.button} onClick={() => {
              removeActive()
              button4.current.classList.add(CSS[`active`])
              setTab("development")
              sidebar.current.style.display = "none"
            }}>الدورات التطويرية</button>
            <button ref={button5} className={CSS.button} onClick={() => {
              removeActive()
              button5.current.classList.add(CSS[`active`])
              setTab("freeLessons")
              sidebar.current.style.display = "none"
            }}>الدروس المجانية</button>
            <button ref={button6} className={CSS.button} onClick={() => {
              removeActive()
              button6.current.classList.add(CSS[`active`])
              setTab("savings")
              sidebar.current.style.display = "none"
            }}>المحفظة و المجموعات</button>
            <button ref={button7} className={CSS.button} onClick={() => {
              removeActive()
              button7.current.classList.add(CSS[`active`])
              setTab("StepOne")
              navigate('/steps')
              sidebar.current.style.display = "none"
            }}>الإعدادات</button>
            <button className={CSS.exit} onClick={(e) => { setAuth(false) }}>تسجيل الخروج</button>

          </div>
        </div>

      )}
    </>
  )
}
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext';
import logo from '../../images/elm.PNG'
import LoginCSS from "./Login.module.css"
import PhoneInput from '../../Components/PhoneInput/PhoneInput';
import PasswordInput from '../../Components/PasswordInput/PasswordInput';

export default function Login() {

  const { activeUser, setAuth } = useContext(UserContext);

  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    phone: "",
    password: "",
    eye: "password",
  });

  function login() {

    if (inputValues.password === activeUser.password && inputValues.phone === activeUser.phone) {
      setAuth(true)
      navigate('/steps');
    }
    else {
      alert("Wrong phone number or password")
    }
  }

  return (
    <>
      <div className={LoginCSS.container}>
        <div>
        <div style={{paddingBottom: "20px"}}>
          <h1>تسجيل الدخول</h1>
          <p>ليس لديك حساب؟ <Link to='/signup'>حساب جديد</Link></p>
        </div>
        <PhoneInput inputValues={inputValues} setInputValues={setInputValues} />
        <PasswordInput inputValues={inputValues} setInputValues={setInputValues} forget={"نسيت كلمة المرور"} />
        <button onClick={login}>تسجيل الدخول</button>
        </div>
      </div>
    </>
  )
}
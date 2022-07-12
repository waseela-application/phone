import  { useRef, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from '../../Contexts/UserContext';
import logo from '../../images/elm.PNG'
import SignupCSS from './Signup.module.css'
import PhoneInput from '../../Components/PhoneInput/PhoneInput';
import PasswordInput from '../../Components/PasswordInput/PasswordInput';
import NameInput from '../../Components/NameInput/NameInput';
import EmailInput from '../../Components/EmailInput/EmailInput';

export default function Signup() {
  // Variables
  const { activeUser, setActiveUser, setAuth} = useContext(UserContext);

  const navigate = useNavigate();

  const maleButton = useRef();
  const femaleButton = useRef();

  const nameWarning = useRef();
  const phoneWarning = useRef();
  const emailWarning = useRef();
  const genderWarning = useRef();
  const passwordWarning = useRef();
  const termsConditionsWarning = useRef();

  const [inputValues, setInputValues] = useState({
    name: "",
    phone: "",    
    email: "",
    password: "",    
    eye: "password",
    gender: "null",
    termsConditions: "false",
  });


  function male(){
    setInputValues({ ...inputValues, gender: "male"})

    maleButton.current.classList.add(SignupCSS[`activeButton`])
    femaleButton.current.classList.remove(SignupCSS[`activeButton`])
  }
  function female(){
    setInputValues({ ...inputValues, gender: "female"})

    femaleButton.current.classList.add(SignupCSS[`activeButton`])
    maleButton.current.classList.remove(SignupCSS[`activeButton`])
  }

  function acceptTermsConditions(){
    if (inputValues.termsConditions === "false"){
      setInputValues({ ...inputValues, termsConditions: "true"})
    }
    else{
      setInputValues({ ...inputValues, termsConditions: "false"})
    } 
  }

  function signup(){

    let namePass = inputValues.name !== ""
    let phonePass = /^\d+$/.test(inputValues.phone) === true && inputValues.phone.length === 9;
    let emailPass = inputValues.email.includes("@");
    let genderPass = inputValues.gender === "male" || inputValues.gender === "female";
    let termsConditionsPass = inputValues.termsConditions === "true"
    let passwordPass = 
    /[A-Z]/.test(inputValues.password) &&
    /[a-z]/.test(inputValues.password) &&
    /(?=.*[!@#$%^&*])/.test(inputValues.password) &&
    inputValues.password.length > 7;

    nameWarning.current.style.color = "white"
    phoneWarning.current.style.color = "white"
    emailWarning.current.style.color = "white"
    genderWarning.current.style.color = "white"
    passwordWarning.current.style.color = "white"
    termsConditionsWarning.current.style.color = "white"

    if ( namePass && phonePass && emailPass && genderPass && passwordPass && termsConditionsPass){

      setActiveUser({
        name: inputValues.name,
        phone: inputValues.phone,
        email: inputValues.email,
        gender: inputValues.gender,
        password: inputValues.password
      })
      setAuth(true)
      navigate('/steps');
    }
    if (!namePass){ nameWarning.current.style.color = "red" }
    if (!phonePass){ phoneWarning.current.style.color = "red" }
    if (!emailPass){ emailWarning.current.style.color = "red" }
    if (!genderPass){ genderWarning.current.style.color = "red" }
    if (!passwordPass){ passwordWarning.current.style.color = "red" }
    if (!termsConditionsPass){ termsConditionsWarning.current.style.color = "red" }
  }

  return (
    <>
      <div className={SignupCSS.container}>
        
        <div className={SignupCSS.formContainer}>
          <h1>حساب جديد</h1>
          <p>لديك حساب؟ <Link to='/login'>تسجيل الدخول</Link></p>

          <NameInput inputValues={inputValues} setInputValues={setInputValues} nameWarning={nameWarning}/>
          <PhoneInput inputValues={inputValues} setInputValues={setInputValues} phoneWarning={phoneWarning}/>
          <EmailInput inputValues={inputValues} setInputValues={setInputValues} emailWarning={emailWarning}/>

          <div className={SignupCSS.buttonDiv}>
            <button className={SignupCSS.femaleButton} onClick={female} ref={femaleButton}>أنثى</button>
            <button className={SignupCSS.maleButton} onClick={male} ref={maleButton}>ذكر</button>
          </div>
          <p className={SignupCSS.warning} ref={genderWarning}>* يجب التحديد من الخيارات</p>

          <PasswordInput inputValues={inputValues} setInputValues={setInputValues} passwordWarning={passwordWarning}/>

          <div className={SignupCSS.termsConditionsDiv}>
            <input className={SignupCSS.checkButton} type="checkbox"  onChange={acceptTermsConditions} />
            <p >الموافقة على <Link to='/termsconditions'>الشروط و الأحكام</Link></p>
          </div>
          <p className={SignupCSS.warning} ref={termsConditionsWarning}>* يجب الموافقه على الشروط و الأحكام</p>
          <button className={SignupCSS.signupButton} onClick={signup}>حساب جديد</button>
        </div>
      </div>
    </>
  )
}
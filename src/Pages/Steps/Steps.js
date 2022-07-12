import { useContext, useEffect } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import CSS from './Steps.module.css'
import elmLogo from '../../images/smallLogo.png'
import apple from '../../images/appleLogo.png'
import play from '../../images/playLogo.png'
import SidebarSteps from '../../Components/SidebarSteps/SidebarSteps';
import StepOne from '../../Components/StepOne/StepOne';
import StepTwo from '../../Components/StepTwo/StepTwo';
import StepThree from '../../Components/StepThree/StepThree';
import StepFour from '../../Components/StepFour/StepFour';
import Thanks from '../../Components/Thanks/Thanks';
import Bottom from '../../Components/Bottom/Bottom';
import { useNavigate } from 'react-router-dom';

export default function Steps() {

  const { Tab } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (Tab !== "StepOne" && Tab !== "StepTwo" && Tab !== "StepThree" && Tab !== "StepFour" && Tab !== "thanks") {
      navigate('/home')
    }
  }, [])

  return (
    <div className={CSS.Container}>
      {Tab !== "thanks" && (
        <div className={CSS.container}>

          <div className={CSS.content}>
            {Tab === "StepOne" && (<StepOne />)}
            {Tab === "StepTwo" && (<StepTwo />)}
            {Tab === "StepThree" && (<StepThree />)}
            {Tab === "StepFour" && (<StepFour />)}

            <Bottom />
          </div>

        </div>
      )}

      {Tab === "thanks" && (<Thanks />)}
    </div>
  )
}
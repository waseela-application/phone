import React, { useContext } from 'react'
import CSS from './Bottom.module.css'
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Bottom() {

    const { userDetails, Tab, setTab, subjects, time } = useContext(UserContext);
    const navigate = useNavigate()

    function next() {
        if (Tab === "StepOne") {
            if (userDetails.country !== "" && userDetails.city !== "" && userDetails.type !== "" && userDetails.prief !== "") {
                setTab("StepTwo")
            }
            else { alert("الرجاء تعبئه كافه البيانات") }
        }
        if (Tab === "StepTwo") {
            if (userDetails.certificate !== "" && userDetails.specialization !== "" && userDetails.experience !== "") {
                setTab("StepThree")
            }
            else { alert("الرجاء تعبئه كافه البيانات") }
        }
        if (Tab === "StepThree") {
            let subjectPass = (subjects.arabic !== "" || subjects.english !== "" || subjects.engineer !== "" || subjects.sience !== "" || subjects.physics !== "" || subjects.math !== "")
            if (userDetails.student !== "" && userDetails.price !== "" && userDetails.teaching !== "" && userDetails.stage !== "" && subjectPass) {
                setTab("StepFour")
            }
            else { alert("الرجاء تعبئه كافه البيانات") }
        }
        if (Tab === "StepFour") {
            let timePass = time.sat !== "" || time.san !== "" || time.mon !== "" || time.tus !== "" || time.wen !== "" || time.thr !== "" || time.fri !== ""
            if (userDetails.order !== "" && timePass) {
                setTab("thanks")
            }
            else { alert("الرجاء تعبئه كافه البيانات") }
        }
    }

    function previos() {
        if (Tab === "StepTwo") { setTab("StepOne") }
        if (Tab === "StepThree") { setTab("StepTwo") }
        if (Tab === "StepFour") { setTab("StepThree") }
    }

    function skip() {
        setTab("main")
        navigate('/home')
    }

    return (
        <div className={CSS.bottom}>
            <button onClick={skip} className={CSS.skip}>تخطي الآن</button>
            <button onClick={previos} className={CSS.previos}>السابق</button>
            <button onClick={next} className={CSS.next}>التالي</button>
        </div>
    )
}

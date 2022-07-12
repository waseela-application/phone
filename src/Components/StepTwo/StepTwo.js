import React, {useContext} from 'react'
import CSS from './StepTwo.module.css'
import { UserContext } from '../../Contexts/UserContext';

export default function Step2() {

  const {userDetails, setUserDetails} = useContext(UserContext);

  return (
    <>
      <p>الخطوة الثانية</p>
      <h1>الدراسة الجامعية</h1>

      <div className={CSS.selects}>

        <div>
          <select defaultValue={userDetails.certificate} onChange={(e)=>{ setUserDetails({...userDetails, certificate: e.target.value}) }}>
            <option value="" disabled hidden>الشهادة الجامعية</option>
            <option value="bechlor">بكالريوس</option>
            <option value="deplom">دبلوم</option>
          </select>
        </div>

        <div>
          <select defaultValue={userDetails.specialization} onChange={(e)=>{ setUserDetails({...userDetails, specialization: e.target.value}) }}>
            <option value="" disabled hidden>التخصص</option>
            <option value="اللغة العربية">اللغة العربية</option>
            <option value="اللغة الإنجليزية">اللغة الانجليزيه</option>
            <option value="الهندسة">الهندسة</option>
            <option value="العلوم">العلوم</option>
            <option value="الفيزياء">الفيزياء</option>
            <option value="الجبر">الجبر</option>
          </select>
        </div>

        <div>
          <select defaultValue={userDetails.experience} onChange={(e)=>{ setUserDetails({...userDetails, experience: e.target.value}) }}>
            <option value="" disabled hidden>عدد سنوات الخبره في التدريس</option>
            <option value="3">من 1 الى 3 سنوات</option>
            <option value="5">من 3 الى 5 سنوات</option>
          </select>
        </div>

      </div>

      <p>الشهادات اللتي حصلت عليها</p>

      <div className={CSS.imageContainer}>
        <div className={CSS.delete}>
          <p >حذف</p>
        </div>
        <div className={CSS.import}>
          <p>صوره الشهاده</p>
          <button>اختيار من الجهاز</button>
        </div>
      </div>
    </>
  )
}
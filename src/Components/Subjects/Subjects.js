import React, { useContext, useEffect, useRef, useState } from 'react'
import CSS from './Subjects.module.css'
import { UserContext } from '../../Contexts/UserContext';

export default function Subjects() {

  const { subjects, setSubjects } = useContext(UserContext);
  const source = ["اللغة العربية", "اللغة الإنجليزيه", "الهندسة", "العلوم", "الفيزياء", "الجبر"]
  const [searchKey, setSearchKey] = useState("");

  const checkBoxContainer = useRef();
  const search = useRef();
  const label = useRef();

  let showCheckBox = false;

  function handelCheckBox() {
    if (!showCheckBox) {
      checkBoxContainer.current.style.display = "flex"
      search.current.style.border = "1px solid blue"
      label.current.style.display = "block"
      showCheckBox = true;
    }
    else {
      checkBoxContainer.current.style.display = "none"
      search.current.style.border = "1px solid lightgray"
      label.current.style.display = "none"
      showCheckBox = false;
    }
  }

  return (
    <>
      <div className={CSS.subjects}>
        <div className={CSS.selectBox} onClick={handelCheckBox}>
          <input ref={search} type="text" value={searchKey} placeholder="البحث" className={CSS.search}
            onChange={(e) => { setSearchKey(e.target.value) }} />
          <label ref={label} className={CSS.label}></label>
        </div>

        <div ref={checkBoxContainer} className={CSS.checkBoxContainer}>

          {source.filter(value => {
            return value.includes(searchKey);
          }).map(subject => (
            <label key={subject}>{subject} <input type="checkBox" onChange={(e) => {
              let index = source.indexOf(subject)
              if (e.target.checked) {
                if (index === 0) { setSubjects({ ...subjects, arabic: source[0] }) }
                if (index === 1) { setSubjects({ ...subjects, english: source[1] }) }
                if (index === 2) { setSubjects({ ...subjects, engineer: source[2] }) }
                if (index === 3) { setSubjects({ ...subjects, sience: source[3] }) }
                if (index === 4) { setSubjects({ ...subjects, physics: source[4] }) }
                if (index === 5) { setSubjects({ ...subjects, math: source[5] }) }
              }
              else {
                if (index === 0) { setSubjects({ ...subjects, arabic: "" }) }
                if (index === 1) { setSubjects({ ...subjects, english: "" }) }
                if (index === 2) { setSubjects({ ...subjects, engineer: "" }) }
                if (index === 3) { setSubjects({ ...subjects, sience: "" }) }
                if (index === 4) { setSubjects({ ...subjects, physics: "" }) }
                if (index === 5) { setSubjects({ ...subjects, math: "" }) }
              }
            }} /></label>
          ))}

        </div>
      </div>
      <div style={{paddingBottom: "15px"}}>
        {subjects.arabic !== "" && (<button className={CSS.button}>{subjects.arabic}</button>)}
        {subjects.english !== "" && (<button className={CSS.button}>{subjects.english}</button>)}
        {subjects.engineer !== "" && (<button className={CSS.button}>{subjects.engineer}</button>)}
        {subjects.sience !== "" && (<button className={CSS.button}>{subjects.sience}</button>)}
        {subjects.physics !== "" && (<button className={CSS.button}>{subjects.physics}</button>)}
        {subjects.math !== "" && (<button className={CSS.button}>{subjects.math}</button>)}
      </div>



    </>
  )
}

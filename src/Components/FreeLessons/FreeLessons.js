import React, { useRef, useState } from 'react'
import CSS from './FreeLessons.module.css'
import jed from '../../images/jed.jpg'
import ryd from '../../images/ryd.jpg'
import yon from '../../images/yon.jpg'
import tai from '../../images/tai.jpg'

export default function FreeLessons() {


  const placeContainer = useRef()
  const [placeSearch, setPlaceSearch] = useState("")
  const [form, setForm] = useState(false)
  const [courses, setCourses] = useState("")

  const [activeBtn, setActiveBtn] = useState({
    attend: "button",
    remote: "button"
  })

  const [course, setCourse] = useState({
    name: "",
    teaching: "",
    date: "",
    time: {
      hours: "",
      state: "ص"
    },
    available: "",
    place: {
      name: "",
      description: "",
      img: "",
    }
  })

  const source = ["جدة", "الرياض", "ينبع", "الطائف"]

  const [places, setPlaces] = useState([
    {
      name: "جدة",
      description: "جدة - الكورنيش",
      img: jed
    },
    {
      name: "الرياض",
      description: "الرياض - طريق الملك",
      img: ryd
    },
    {
      name: "ينبع",
      description: "ينبع - المنتزه",
      img: yon
    },
    {
      name: "الطائف",
      description: "الطائف - الهدى",
      img: tai
    },
  ])

  function share() {
    if (course.name !== "" && course.teaching !== "" && course.date !== "" && course.time !== "" && course.available !== "") {
      setCourses([...courses, {
        name: course.name,
        teaching: course.teaching,
        available: course.available,
        time: {
          hours: course.time.hours,
          state: course.time.state,
        }
      }])
      setForm(false)
    }
    else {
      alert("الرجاء تعبئه كافه البيانات")
    }
  }

  function handleRemote() {
    setCourse({ ...course, teaching: "عن بعد" })
    setActiveBtn({ remote: "active", attend: "button" })
  }

  function handleAttend() {
    setCourse({ ...course, teaching: "حضوري" })
    setActiveBtn({ remote: "button", attend: "active" })
  }

  return (
    <>
      {form && (<>
        <h1 className={CSS.title}>إضافة درس</h1>

        <div className={CSS.inputs}>

          <input placeholder="موضوع الدرس" defaultValue={course.name} onChange={(e) => { setCourse({ ...course, name: e.target.value }) }} />

          <h3>موقع الدورة</h3>
          <div className={CSS.details}>
            <button className={CSS[`${activeBtn.remote}`]} onClick={handleRemote}>عن بعد</button>
            <button className={CSS[`${activeBtn.attend}`]} onClick={handleAttend}>حضوري</button>
          </div>
          {course.teaching === "حضوري" && (
            <>
              {course.place.name === ""
                ? (<div className={CSS.places} onClick={() => { 
                  placeContainer.current.style.display = "flex" 
                  window.scrollTo(0, 0)
                }}>
                  <h3>قائمة اماكن مقترحة</h3>
                  <h3>{">"}</h3>
                </div>)
                : (<div className={CSS.placeDiv2}>
                  <div className={CSS.imgDiv}>
                    <img src={course.place.img} className={CSS.img} alt="img" />
                    <div className={CSS.cityDiv}>
                      <h3>{course.place.name}</h3>
                      <p className={CSS.delete} onClick={() => {
                        setCourse({
                          ...course, place: {
                            name: "",
                            description: "",
                            img: "",
                          }
                        })
                      }}>حذف الموقع</p>
                    </div>
                  </div>
                  <h4 className={CSS.edit} onClick={() => { placeContainer.current.style.display = "flex" }}>تعديل</h4>
                </div>)
              }

            </>
          )}
          <input placeholder="تاريخ الدرس" defaultValue={course.date} onChange={(e) => { setCourse({ ...course, date: e.target.value }) }} />
          <div style={{ position: "relative" }}>
            <input placeholder="توقيت الدرس" defaultValue={course.time.hours} onChange={(e) => { setCourse({ ...course, time: { ...course.time, hours: e.target.value } }) }} />
            <select className={CSS.timeSelect} defaultValue={course.time.state} onChange={(e) => { setCourse({ ...course, time: { ...course.time, state: e.target.value } }) }}>
              <option value="ص">ص</option>
              <option value="م">م</option>
            </select>
          </div>
          <input placeholder="اقصى عدد مسموح للحضور" type="number" defaultValue={course.available} onChange={(e) => { setCourse({ ...course, available: e.target.value }) }} />


        </div>
        <button className={CSS.share} onClick={share}>نشر موعد الدرس</button>

        <div ref={placeContainer} className={CSS.placeContainer}>
          <div className={CSS.placeDiv}>
            <h1>اماكن مقترحة للدورة</h1>
            <h1 className={CSS.exit} onClick={() => { placeContainer.current.style.display = "none" }}>X</h1>
          </div>
          <input className={CSS.placeSearch} defaultValue={placeSearch} placeholder='بحث' onChange={(e) => { setPlaceSearch(e.target.value) }} />

          {source.filter(value => {
            return value.includes(placeSearch);
          }).map(city => (
            <div key={city} className={CSS.placeDiv}>
              <div className={CSS.imgDiv}>
                <img src={places[source.indexOf(city)].img} style={{ width: "50px" }} alt="img" />
                <div className={CSS.cityDiv}>
                  <h3>{places[source.indexOf(city)].name}</h3>
                  <p>{places[source.indexOf(city)].description}</p>
                </div>
              </div>
              <input className={CSS.check} name="city" type="radio" onClick={() => {
                setCourse({
                  ...course, place: {
                    name: places[source.indexOf(city)].name,
                    description: places[source.indexOf(city)].description,
                    img: places[source.indexOf(city)].img
                  }
                })
              }}></input>
            </div>
          ))}

        </div>

      </>)}
      {!form && (
        <>
          {courses === "" && (
            <>
              <div className={CSS.addCourse}>
                <h1>الدروس المجانية</h1>
                <p>الدروس المجانية تزيد من انتشارك و التعريفببك</p>
                <button onClick={() => { setForm(true) }}>إضافة درس مجاني</button>
              </div>
            </>
          )}
          {courses !== "" && (
            <>
              <div className={CSS.coursesHeader}>
                <h1>الدروس المجانية</h1>
                <button onClick={() => { setForm(true) }}>إضافه درس</button>
              </div>
              <div className={CSS.coursesContainer}>
                {courses.map(item => (
                  <div key={courses.indexOf(item)}>
                    <div className={CSS.courseDiv}>
                      <div className={CSS.priceHeader}>
                        <h3>{item.name}</h3>
                        <h3 className={CSS.lessonLink}>رابط الدرس</h3>
                      </div>
                      <div className={CSS.priceDetails}>
                        <div>
                          <p>العدد المسموح</p>
                          <div className={CSS.price}>
                            <h4>{item.available}</h4>
                            <h4>طالب</h4>
                          </div>
                        </div>
                        <div>
                          <p>العدد المحجوز</p>
                          <div className={CSS.price}>
                            <h4>{Math.floor(Math.random() * item.available)}</h4>
                            <h4>طالب</h4>
                          </div>
                        </div>
                        <div>
                          <p>موعد الدرس</p>
                          <h4>{item.time.hours}{item.time.state}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  )
} 
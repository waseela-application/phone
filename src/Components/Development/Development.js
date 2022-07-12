import React, { useRef, useState } from 'react'
import CSS from './Development.module.css'
import jed from '../../images/jed.jpg'
import ryd from '../../images/ryd.jpg'
import yon from '../../images/yon.jpg'
import tai from '../../images/tai.jpg'

export default function Development() {

  const placeContainer = useRef()
  const [placeSearch, setPlaceSearch] = useState("")
  const [topics, setTopics] = useState([])
  const [form, setForm] = useState(false)
  const [courses, setCourses] = useState("")

  const [activeBtn, setActiveBtn] = useState({
    attend: "button",
    remote: "button"
  })

  const [course, setCourse] = useState({
    name: "",
    teaching: "",
    hours: "",
    start: "",
    topic: "",
    place: {
      name: "",
      description: "",
      img: "",
    }
  })

  const [places2, setPlaces2] = useState(["جدة", "الرياض", "ينبع", "الطائف"])

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

  const itemsOne = [];
  const itemsTwo = [];
  for (let i = 0; i < topics.length; i++) {
    i % 2 === 0
      ? itemsOne.push(<div key={i} className={CSS.element}><p className={CSS.number}>{i + 1}</p><p>{topics[i]}</p></div>)
      : itemsTwo.push(<div key={i} className={CSS.element}><p className={CSS.number}>{i + 1}</p><p>{topics[i]}</p></div>)
  }

  function share() {
    if (course.name !== "" && course.teaching !== "" && course.hours !== "" && course.start !== "" && course.topic !== "") {
      setCourses([...courses, {
        name: course.name,
        teaching: course.teaching,
        hours: course.hours,
        start: course.start
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

  function add() {
    if (course.topic !== "") { setTopics([...topics, course.topic]) }
  }

  return (
    <>
      {form && (<>
        <h1 className={CSS.title}>إضافة دوره</h1>

        <div className={CSS.inputs}>

          <input placeholder="اسم الدورة" defaultValue={course.name} onChange={(e) => { setCourse({ ...course, name: e.target.value }) }} />

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
                  <h3>اماكن مقترحة للدورة</h3>
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
          <div className={CSS.details}>
            <input type="number" defaultValue={course.hours} placeholder=" ساعات الدورة" onChange={(e) => { setCourse({ ...course, hours: e.target.value }) }} />
            <input type="text" defaultValue={course.start} placeholder=" تاريخ البدء" onChange={(e) => { setCourse({ ...course, start: e.target.value }) }} />
          </div>
          <div style={{ position: "relative" }}>
            <input placeholder="المواضيع" defaultValue={course.topic} onChange={(e) => { setCourse({ ...course, topic: e.target.value }) }} />
            <button className={CSS.add} onClick={add}>اضافة</button>
          </div>

          <div className={CSS.topics}>
            <div className={CSS.row}>{itemsOne}</div>
            <div className={CSS.row}>{itemsTwo}</div>
          </div>

        </div>
        <button className={CSS.share} onClick={share}>نشر الدورة</button>

        <div ref={placeContainer} className={CSS.placeContainer}>
          <div className={CSS.placeDiv}>
            <h1>اماكن مقترحة للدورة</h1>
            <h1 className={CSS.exit} onClick={() => { placeContainer.current.style.display = "none" }}>X</h1>
          </div>
          <input className={CSS.placeSearch} defaultValue={placeSearch} placeholder='بحث' onChange={(e) => { setPlaceSearch(e.target.value) }} />

          {places2.filter(value => {
            return value.includes(placeSearch);
          }).map(city => (
            <div key={city} className={CSS.placeDiv}>
              <div className={CSS.imgDiv}>
                <img src={places[places2.indexOf(city)].img} style={{ width: "50px" }} alt="img" />
                <div className={CSS.cityDiv}>
                  <h3>{places[places2.indexOf(city)].name}</h3>
                  <p>{places[places2.indexOf(city)].description}</p>
                </div>
              </div>
              <input className={CSS.check} name="city" type="radio" onClick={() => {
                setCourse({
                  ...course, place: {
                    name: places[places2.indexOf(city)].name,
                    description: places[places2.indexOf(city)].description,
                    img: places[places2.indexOf(city)].img
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
                <h1>الدورات التطويرية</h1>
                <p>ابدأ في تقديم دورات في مختلف المجالات من خلال بث مباشر مع طلابك</p>
                <button onClick={() => { setForm(true) }}>إضافه دورة</button>
              </div>
            </>
          )}
          {courses !== "" && (
            <>
              <div className={CSS.coursesHeader}>
                <h1>الدورات التطويرية</h1>
                <button onClick={() => { setForm(true) }}>إضافه دورة</button>
              </div>
              <div className={CSS.coursesContainer}>
                {courses.map(item => (
                  <div key={courses.indexOf(item)} className={CSS.courseDiv}>
                    <div className={CSS.priceHeader}>
                      <h3>{item.name}</h3>
                      <div className={CSS.price}>
                        <h3>{Math.floor(Math.random() * 1000)} </h3>
                        <p>ريال</p>
                      </div>
                    </div>
                    <div className={CSS.priceDetails}>
                      <div>
                        <p>وقت الدورة</p>
                        <div className={CSS.price}>
                          <h4>{item.hours}</h4>
                          <h4>ساعات</h4>
                        </div>
                      </div>
                      <div>
                        <p>موقع الدورة</p>
                        <h4>{item.teaching}</h4>
                      </div>
                      <div>
                        <p>موعد البدء</p>
                        <h4>{item.start}</h4>
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
import React, { useRef, useState } from 'react'
import CSS from './Dates.module.css'
import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'


export default function Dates() {

  const filter = useRef();

  const [teach, setTeach] = useState({
    attend: true,
    remote: true
  });
  const [status, setStatus] = useState({
    coming: true,
    active: true,
    done: true,
    cancel: true
  });

  const [details, setDetails] = useState("");

  const [students, setStudents] = useState([
    {
      name: "أحمد شوقي",
      date: "الجمعه 30 ديسمبر",
      teaching: "عن بعد",
      status: "قادم",
    },
    {
      name: "عبد الرحمن محمد",
      date: "الخميس 27 مايو",
      teaching: "حضوري",
      status: "نشط",
    },
    {
      name: "مروة محمد عامر",
      date: "الاحد 12 ديسمبر",
      teaching: "عن بعد",
      status: "ملغي",
    },
    {
      name: "مسفر الثبيتي",
      date: "الجمعه 30 ديسمبر",
      teaching: "حضوري",
      status: "مكتمل",
    },
    {
      name: "عبد الماجد الخير",
      date: "الاثنين 19 ديسمبر",
      teaching: "حضوري",
      status: "مكتمل",
    },
  ])

  return (
    <>
      {details === "" && (
        <div>
          <div className={CSS.header}>
            <h1>المواعيد</h1>
            <button onClick={() => { 
              filter.current.style.display = "block" 
            }}>التصفية</button>
          </div>

          {teach.remote && status.coming && (
            <div className={CSS.student} onClick={() => { setDetails("0") }}>
              <div className={CSS.profile}>
                <img src={one} alt={"logo"} />
                <div className={CSS.details}>
                  <p>{students[0].name}</p>
                  <h4>{students[0].date}</h4>
                  <h4>{students[0].teaching}</h4>
                </div>
              </div>
              <div className={CSS.coming}>{students[0].status}</div>
            </div>
          )}

          {teach.attend && status.active && (
            <div className={CSS.student} onClick={() => { setDetails("1") }}>
              <div className={CSS.profile}>
                <img src={two} alt={"logo"} />
                <div className={CSS.details}>
                  <p>{students[1].name}</p>
                  <h4>{students[1].date}</h4>
                  <h4>{students[1].teaching}</h4>
                </div>
              </div>
              <div className={CSS.active}>{students[1].status}</div>
            </div>
          )}

          {teach.remote && status.cancel && (
            <div className={CSS.student} onClick={() => { setDetails("2") }}>
              <div className={CSS.profile}>
                <img src={three} alt={"logo"} />
                <div className={CSS.details}>
                  <p>{students[2].name}</p>
                  <h4>{students[2].date}</h4>
                  <h4>{students[2].teaching}</h4>
                </div>
              </div>
              <div className={CSS.cancel}>{students[2].status}</div>
            </div>
          )}

          {teach.attend && status.done && (
            <div className={CSS.student} onClick={() => { setDetails("3") }}>
              <div className={CSS.profile}>
                <img src={four} alt={"logo"} />
                <div className={CSS.details}>
                  <p>{students[3].name}</p>
                  <h4>{students[3].date}</h4>
                  <h4>{students[3].teaching}</h4>
                </div>
              </div>
              <div className={CSS.done}>{students[3].status}</div>
            </div>
          )}

          {teach.attend && status.done && (
            <div className={CSS.student} onClick={() => { setDetails("4") }}>
              <div className={CSS.profile}>
                <img src={five} alt={"logo"} />
                <div className={CSS.details}>
                  <p>{students[4].name}</p>
                  <h4>{students[4].date}</h4>
                  <h4>{students[4].teaching}</h4>
                </div>
              </div>
              <div className={CSS.done}>{students[4].status}</div>
            </div>
          )}
        </div>
      )}

      {details !== "" && (
        <div>
          <h1 className={CSS.detailsTitle}>تفاصيل الموعد</h1>
          <div className={CSS.studentName}>
            {details === "0" && (<img src={one} style={{ width: "50px" }} alt={"img"} />)}
            {details === "1" && (<img src={two} style={{ width: "50px" }} alt={"img"} />)}
            {details === "2" && (<img src={three} style={{ width: "50px" }} alt={"img"} />)}
            {details === "3" && (<img src={four} style={{ width: "50px" }} alt={"img"} />)}
            {details === "4" && (<img src={five} style={{ width: "50px" }} alt={"img"} />)}
            <h3>{students[details].name}</h3>
          </div>
          <div className={CSS.detailsContainer}>
            <h3>تفاصيل الحجز</h3>
            <div className={CSS.row}>
              <p>حالة الموعد</p>
              {details === "0" && (<p className={CSS.coming}>{students[details].status}</p>)}
              {details === "1" && (<p className={CSS.active}>{students[details].status}</p>)}
              {details === "2" && (<p className={CSS.cancel}>{students[details].status}</p>)}
              {details === "3" && (<p className={CSS.done}>{students[details].status}</p>)}
              {details === "4" && (<p className={CSS.done}>{students[details].status}</p>)}
            </div>
            <div className={CSS.row}>
              <p>موعد الدرس</p>
              <p>{students[details].date}</p>
            </div>
            <div className={CSS.row}>
              <p>ساعات الحجز</p>
              <p>3 / الاسبوع</p>
            </div>
            <div className={CSS.row}>
              <p>مدة الدرس</p>
              <p>30 دقيقة</p>
            </div>
            <div className={CSS.row}>
              <p>موقع الدرس</p>
              <p>{students[details].teaching}</p>
            </div>
            <h3 style={{ marginTop: "10px" }}>الفاتورة</h3>
            <div className={CSS.row}>
              <p>السعر</p>
              <p>482.00 ريال</p>
            </div>
            <div className={CSS.row}>
              <p>الضريبة المضافة</p>
              <p>16.80 ريال</p>
            </div>
            <div className={CSS.line}></div>
            <div className={CSS.row}>
              <p>اجمالي المبلغ</p>
              <p>138.80 ريال</p>
            </div>
          </div>
          <div className={CSS.buttonDiv}>
            <button className={CSS.link} onClick={() => { setDetails("") }}>رابط الدرس</button>
            <button className={CSS.send} onClick={() => { setDetails("") }}>مراسلة الطلب</button>
          </div>
        </div>
      )}

      <div ref={filter} className={CSS.filter}>
        <div className={CSS.title}>
          <h1>التصفية</h1>
          <h1 className={CSS.close} onClick={() => { filter.current.style.display = "none" }}>X</h1>
        </div>
        <h3>موقع الدرس</h3>
        <div>
          <button className={CSS.button} onClick={(e) => {
            e.currentTarget.classList.toggle(CSS[`disable`])
            setTeach({ ...teach, remote: !teach.remote })
          }}>عن بعد</button>
          <button className={CSS.button} onClick={(e) => {
            e.currentTarget.classList.toggle(CSS[`disable`])
            setTeach({ ...teach, attend: !teach.attend })
          }}>حضوري</button>
        </div>
        <h3>حالة الموعد</h3>
        <div>
          <button className={CSS.button} onClick={(e) => {
            e.currentTarget.classList.toggle(CSS[`disable`])
            setStatus({ ...status, coming: !status.coming })
          }}>موعد قادم</button>
          <button className={CSS.button} onClick={(e) => {
            e.currentTarget.classList.toggle(CSS[`disable`])
            setStatus({ ...status, active: !status.active })
          }}>موعد نشط</button>
          <button className={CSS.button} onClick={(e) => {
            e.currentTarget.classList.toggle(CSS[`disable`])
            setStatus({ ...status, done: !status.done })
          }}>موعد مكتمل</button>
          <button className={CSS.button} onClick={(e) => {
            e.currentTarget.classList.toggle(CSS[`disable`])
            setStatus({ ...status, cancel: !status.cancel })
          }}>موعد ملغي</button>
        </div>
        <div className={CSS.applyDiv}>
          <button className={CSS.apply} onClick={() => { filter.current.style.display = "none" }}>تطبيق</button>
        </div>
      </div>
    </>
  )
}

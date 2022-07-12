import React, { useEffect, useState } from 'react'
import CSS from './Massages.module.css'
import one from '../../images/one.png'

export default function Massages() {

  const [texts, setTexts] = useState([]);
  const [send, setSend] = useState("");

  const items = [];
  for (let i = 0; i < texts.length; i++) {
    i % 2 === 0
      ? items.push(<div key={i} className={CSS.first}><p>{texts[i]}</p></div>)
      : items.push(<div key={i} className={CSS.second}><p>{texts[i]}</p></div>)
  }

  return (
    <>

      <div className={CSS.top}>
        <h1 className={CSS.title}>المراسلة</h1>
        <div className={CSS.studentDiv}>
          <div className={CSS.student}>
            <img src={one} style={{ width: "50px" }} alt={"img"} />
            <h3>احمد شوقي</h3>
          </div>
          <button>تحديد موعد</button>
        </div>
      </div>

      <div>

        <div className={CSS.massages}>
          {items}
        </div>

        <div className={CSS.send}>
          <input className={CSS.chat} placeholder={"نص الرسالة"} onChange={(e) => { setSend(e.target.value) }} />
          <button onClick={() => {
            if (send !== "") {
              setTexts([...texts, send])
            }
          }}>إرسال</button>
        </div>
      </div>
    </>
  )
}
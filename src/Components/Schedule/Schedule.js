import React, { useContext, useEffect, useRef, useState } from 'react'
import CSS from './Schedule.module.css';
import { UserContext } from '../../Contexts/UserContext';

export default function Schedule() {

    const enterTime = useRef();
    const checkbox = useRef();
    const timeDiv = useRef();

    const { time, setTime } = useContext(UserContext);
    const [edit, setEdit] = useState("");
    const source = ["السبت", "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعه"];

    const [from, setFrom] = useState({
        time: "",
        state: "ص"
    });

    const [to, setTo] = useState({
        time: "",
        state: "ص"
    });

    function handleClass(day) {
        if (day === "السبت") {
            if (time.sat.toTime === "") { return CSS.time }
            else { return `${CSS.time} ${CSS.timeActive}` }
        }
        if (day === "الاحد") {
            if (time.san.toTime === "") { return CSS.time }
            else { return `${CSS.time} ${CSS.timeActive}` }
        }
        if (day === "الاثنين") {
            if (time.mon.toTime === "") { return CSS.time }
            else { return `${CSS.time} ${CSS.timeActive}` }
        }
        if (day === "الثلاثاء") {
            if (time.tus.toTime === "") { return CSS.time }
            else { return `${CSS.time} ${CSS.timeActive}` }
        }
        if (day === "الاربعاء") {
            if (time.wen.toTime === "") { return CSS.time }
            else { return `${CSS.time} ${CSS.timeActive}` }
        }
        if (day === "الخميس") {
            if (time.thr.toTime === "") { return CSS.time }
            else { return `${CSS.time} ${CSS.timeActive}` }
        }
        if (day === "الجمعه") {
            if (time.fri.toTime === "") { return CSS.time }
            else { return `${CSS.time} ${CSS.timeActive}` }
        }
    }

    function save() {
        if (edit === "السبت") {
            if (from.time !== "" && to.time !== "") {
                setTime({
                    ...time, sat: {
                        fromTime: from.time,
                        fromState: from.state,
                        toTime: to.time,
                        toState: to.state
                    }
                })
            }
            else { setTime({ ...time, sat: { fromTime: "", fromState: "", toTime: "", toState: "" } }) }
        }
        if (edit === "الاحد") {
            if (from.time !== "" && to.time !== "") {
                setTime({
                    ...time, san: {
                        fromTime: from.time,
                        fromState: from.state,
                        toTime: to.time,
                        toState: to.state
                    }
                })
            }
            else { setTime({ ...time, san: { fromTime: "", fromState: "", toTime: "", toState: "" } }) }
        }
        if (edit === "الاثنين") {
            if (from.time !== "" && to.time !== "") {
                setTime({
                    ...time, mon: {
                        fromTime: from.time,
                        fromState: from.state,
                        toTime: to.time,
                        toState: to.state
                    }
                })
            }
            else { setTime({ ...time, mon: { fromTime: "", fromState: "", toTime: "", toState: "" } }) }
        }
        if (edit === "الثلاثاء") {
            if (from.time !== "" && to.time !== "") {
                setTime({
                    ...time, tus: {
                        fromTime: from.time,
                        fromState: from.state,
                        toTime: to.time,
                        toState: to.state
                    }
                })
            }
            else { setTime({ ...time, tus: { fromTime: "", fromState: "", toTime: "", toState: "" } }) }
        }
        if (edit === "الاربعاء") {
            if (from.time !== "" && to.time !== "") {
                setTime({
                    ...time, wen: {
                        fromTime: from.time,
                        fromState: from.state,
                        toTime: to.time,
                        toState: to.state
                    }
                })
            }
            else { setTime({ ...time, wen: { fromTime: "", fromState: "", toTime: "", toState: "" } }) }
        }
        if (edit === "الخميس") {
            if (from.time !== "" && to.time !== "") {
                setTime({
                    ...time, thr: {
                        fromTime: from.time,
                        fromState: from.state,
                        toTime: to.time,
                        toState: to.state
                    }
                })
            }
            else { setTime({ ...time, thr: { fromTime: "", fromState: "", toTime: "", toState: "" } }) }
        }
        if (edit === "الجمعه") {
            if (from.time !== "" && to.time !== "") {
                setTime({
                    ...time, fri: {
                        fromTime: from.time,
                        fromState: from.state,
                        toTime: to.time,
                        toState: to.state
                    }
                })
            }
            else { setTime({ ...time, fri: { fromTime: "", fromState: "", toTime: "", toState: "" } }) }
        }
        enterTime.current.style.display = "none"
    }

    return (
        <>
            <div className={CSS.timeContainer}>
                {source.map(day => (

                    <div key={day} className={handleClass(day)}>

                        <div>
                            <h4>{day}</h4>
                            <p className={CSS.edit} onClick={() => {
                                setEdit(day)
                                setTo({ ...to, time: "" })
                                setFrom({ ...from, time: "" })
                                checkbox.current.checked = false
                                enterTime.current.style.display = "block"
                            }}>تعديل</p>
                        </div>

                        {source.indexOf(day) === 0 && (
                            time.sat.toTime === "" ? (<p>غير متاح</p>)
                                : (<p>{time.sat.fromTime} {time.sat.fromState} الى {time.sat.toTime} {time.sat.toState}</p>)
                        )}
                        {source.indexOf(day) === 1 && (
                            time.san.toTime === "" ? (<p>غير متاح</p>)
                                : (<p>{time.san.fromTime} {time.san.fromState} الى {time.san.toTime} {time.san.toState}</p>)
                        )}
                        {source.indexOf(day) === 2 && (
                            time.mon.toTime === "" ? (<p>غير متاح</p>)
                                : (<p>{time.mon.fromTime} {time.mon.fromState} الى {time.mon.toTime} {time.mon.toState}</p>)
                        )}
                        {source.indexOf(day) === 3 && (
                            time.tus.toTime === "" ? (<p>غير متاح</p>)
                                : (<p>{time.tus.fromTime} {time.tus.fromState} الى {time.tus.toTime} {time.tus.toState}</p>)
                        )}
                        {source.indexOf(day) === 4 && (
                            time.wen.toTime === "" ? (<p>غير متاح</p>)
                                : (<p>{time.wen.fromTime} {time.wen.fromState} الى {time.wen.toTime} {time.wen.toState}</p>)
                        )}
                        {source.indexOf(day) === 5 && (
                            time.thr.toTime === "" ? (<p>غير متاح</p>)
                                : (<p>{time.thr.fromTime} {time.thr.fromState} الى {time.thr.toTime} {time.thr.toState}</p>)
                        )}
                        {source.indexOf(day) === 6 && (
                            time.fri.toTime === "" ? (<p>غير متاح</p>)
                                : (<p>{time.fri.fromTime} {time.fri.fromState} الى {time.fri.toTime} {time.fri.toState}</p>)
                        )}

                    </div>
                ))}
            </div>

            <div ref={enterTime} className={CSS.enterTime}>
                <div className={CSS.header}>
                    <h1>حدد مدى توافرك</h1>
                    <h2 onClick={() => { enterTime.current.style.display = "none" }}>x</h2>
                </div>
                <p>{edit}</p>
                <div className={CSS.input}>
                    <div style={{ position: "relative" }}>
                        <input type="number" placeholder='الى' value={to.time} onChange={(e) => { setTo({ ...to, time: e.target.value }) }}></input>
                        <select className={CSS.timeSelect} defaultValue={to.state} onChange={(e) => { setTo({ ...to, state: e.target.value }) }}>
                            <option value="ص">ص</option>
                            <option value="م">م</option>
                        </select>
                    </div>
                    <div style={{ position: "relative" }}>
                        <input type="number" placeholder='من' value={from.time} onChange={(e) => { setFrom({ ...from, time: e.target.value }) }}></input>
                        <select className={CSS.timeSelect} defaultValue={from.state} onChange={(e) => { setFrom({ ...from, state: e.target.value }) }}>
                            <option value="ص">ص</option>
                            <option value="م">م</option>
                        </select>
                    </div>
                </div>
                <div className={CSS.header}>
                    <label><input type="checkbox" ref={checkbox} onClick={(e) => {
                        if (e.target.checked) {
                            save()
                        }
                    }} /> غير متاح </label>
                    <button onClick={save}>حفظ</button>
                </div>
            </div>
        </>
    )
}
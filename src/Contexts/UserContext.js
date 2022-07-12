import React, { useState, useEffect } from 'react'

export const UserContext = React.createContext({});

export default function UserContextProvider({ children }) {

  const [Auth, setAuth] = useState(null);
  const [Tab, setTab] = useState("StepOne");
  const [activeUser, setActiveUser] = useState({});

  const [subjects, setSubjects] = useState({
    arabic: "",
    english: "",
    engineer: "",
    sience: "",
    physics: "",
    math: "",
  });

  const [time, setTime] = useState({
    sat: { fromTime: "", fromState: "", toTime: "", toState: "" },
    san: { fromTime: "", fromState: "", toTime: "", toState: "" },
    mon: { fromTime: "", fromState: "", toTime: "", toState: "" },
    tus: { fromTime: "", fromState: "", toTime: "", toState: "" },
    wen: { fromTime: "", fromState: "", toTime: "", toState: "" },
    thr: { fromTime: "", fromState: "", toTime: "", toState: "" },
    fri: { fromTime: "", fromState: "", toTime: "", toState: "" }
  })

  const [userDetails, setUserDetails] = useState({
    country: "",
    city: "",
    type: "",
    prief: "",
    certificate: "",
    specialization: "",
    experience: "",
    teaching: "",
    price: "",
    stage: "",
    student: "",
    order: "",
  });

  useEffect(() => {
    const storedActiveUser = JSON.parse(localStorage.getItem("activeUser"))
    const storedTab = JSON.parse(localStorage.getItem("Tab"))
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"))
    const storedSubjects = JSON.parse(localStorage.getItem("subjects"))
    const storedTime = JSON.parse(localStorage.getItem("time"))
    const storedAuth = JSON.parse(localStorage.getItem("Auth"))

    storedActiveUser && setActiveUser(storedActiveUser)
    storedTab && setTab(storedTab)
    storedSubjects && setSubjects(storedSubjects)
    storedTime && setTime(storedTime)
    storedUserDetails && setUserDetails(storedUserDetails)
    storedAuth && storedAuth ? setAuth(true) : setAuth(false)
  }, []);

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser))
    localStorage.setItem("Tab", JSON.stringify(Tab))
    localStorage.setItem("subjects", JSON.stringify(subjects))
    localStorage.setItem("Auth", JSON.stringify(Auth))
    localStorage.setItem("time", JSON.stringify(time))
    localStorage.setItem("userDetails", JSON.stringify(userDetails))

  }, [Auth, activeUser, Tab, userDetails, subjects, time]);

  return (
    <UserContext.Provider value={{
      activeUser, setActiveUser,
      Auth, setAuth,
      Tab, setTab,
      userDetails, setUserDetails,
      subjects, setSubjects,
      time, setTime,
    }}>
      {children}
    </UserContext.Provider>
  )
}
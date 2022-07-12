import React, { useContext } from 'react'
import CSS from './Main.module.css'
import { UserContext } from '../../Contexts/UserContext'
import profile from '../../images/profile.jpg'

export default function Main() {

    const { activeUser, userDetails } = useContext(UserContext)

    return (
        <>
            <h1 className={CSS.title}>الرئيسية</h1>
            <div className={CSS.score}>
                <div>
                    <h2>723810</h2>
                    <p>ساعات التدريس</p>
                </div>
                <div>
                    <h2>9321</h2>
                    <p>طلاب درست لهم</p>
                </div>
                <div>
                    <h2>437102</h2>
                    <p>مشاهدات ملفك</p>
                </div>
            </div>

            <div className={CSS.container}>

                <div className={CSS.balance}>
                    <div className={CSS.price}>
                        <h1>6450.00</h1>
                        <p>ريال </p>
                    </div>
                    <p>الرصيد الكلي</p>
                    <button>المعاملات المالية</button>
                </div>

                <h2>الموعد القادم</h2>
                <div className={CSS.date}>
                    <div className={CSS.teacher}>
                        <img src={profile} alt='logo' />
                        <div>
                            <h3>{activeUser.name}</h3>
                            {userDetails.teaching === "attend"
                                ? <p className={CSS.tag}>حضوري</p>
                                : <p className={CSS.tag}>عن بعد</p>
                            }
                        </div>
                    </div>
                    <div className={CSS.time}>
                        <div>
                            <h1>36</h1>
                            <p>دقائق</p>
                        </div>
                        <div>
                            <h1>05</h1>
                            <p>ساعات</p>
                        </div>
                        <div>
                            <h1>01</h1>
                            <p>يوم</p>
                        </div>
                    </div>
                    <button>رابط الدرس</button>
                </div>

                <div className={CSS.course}>
                    <div className={CSS.forth}>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                    </div>
                    <div className={CSS.first}>
                        <div>
                            <p>درس خصوصي</p>
                            <h3>محمد عبدالرحمن</h3>
                        </div>
                        <div>
                            <button className={CSS.linkBtn}>رابط الدرس</button>
                        </div>
                    </div>
                    <div className={CSS.fifth}>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                    </div>
                    <div className={CSS.second}>
                        <div>
                            <p>دورة تطويرية</p>
                            <h3>تحسين ظهور محركات البحث</h3>
                        </div>
                        <div>
                            <button className={CSS.linkBtn}>رابط الدرس</button>
                        </div>
                    </div>
                    <div className={CSS.sixth}>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                    </div>
                    <div className={CSS.third}>
                        <div>
                            <p>درس خصوصي</p>
                            <h3>عبد الرحمن خطري</h3>
                        </div>
                        <div>
                            <button className={CSS.linkBtn}>رابط الدرس</button>
                        </div>
                    </div>
                </div>

                <h2>روابط سريعة</h2>
                <div className={CSS.links}>
                    <div><h4>كيف يظهر ملفك للطلاب</h4></div>
                    <div><h4>دعوة الاصدقاء</h4></div>
                    <div><h4>إدخال كود الإحالة</h4></div>
                    <div><h4>الشروط و الأحكام</h4></div>
                    <div><h4>سياسة الإستخدام</h4></div>
                    <div><h4>الدعم الفني واتس اب</h4></div>
                </div>

            </div>
        </>
    )
}

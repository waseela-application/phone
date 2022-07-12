import React from 'react'
import { Link } from 'react-router-dom'
import TermsConditionCSS from'./TermsConditions.module.css'


export default function TermsConditions() {
  return (
    <div className={TermsConditionCSS.termsConditionsContainer}>
        <h1>الشروط و الأحكام</h1>
        <p className={TermsConditionCSS.termsConditionsContent}>
            apeojv erjgsh  yusegkeu h eoriushfroieuh rih eoiush oih ih oriu hiu ahl o8ypwoenf oih
            uefig lwaiuefhaoiwhdfoaiud  iah wohw oi oehohfp hpeheo ho hpwe hfohpohf ph h hefwpahph eh 
            lohfawoeihfoih  oweahf hi iha efo8h o9 iua leohfp98hw ih uhapwoh ph phewfp;O IHPAW8H  HPEF HUSH 
            adsgr qe egpq oiqup34ofh p  fisiuh ua dgkieh owirhg s hsoieriuq  qaeofiuho a cygaoif iehf iauhdysgf ihaoiufh 
            aaouwgey  aoiuwdh   bfaiwu iaw iaiowfhe  hweaoi iw ia e u hfoiw aoieu fi waoi fiou we e .
        </p>
        <Link to={'/signup'}>
            <button className={TermsConditionCSS.termsConditionsButton}>رجوع</button>
        </Link>
    </div>
  )
}

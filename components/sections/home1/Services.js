'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one service_padding" id="around-the-corner" style={{paddingTop: 0}} dir="rtl">
            <div className="container banner_container_main_feature">
              <div>
                                    <p className="small_heading">
                                        تميز التطوير

                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">لماذا إعمار؟</h2>
                                </div>
                                <p className="about_para services_cont">
                                    <span className="about_para_span">شركة إعمار العقارية، واحدة من أكثر شركات تطوير العقارات تكاملاً وقيمة وإعجابًا في العالم، تُشكّل أسلوب حياة المستقبل. عند شراء عقار من إعمار، فإنك تستثمر في اسم يمكنك الوثوق به، وفي أسلوب حياة يمكنك الاستمتاع به، وفي مجتمع يمكنك الازدهار فيه، كل ذلك داخل مدينة تتحقق فيها الأحلام.</span>
                                </p>
                <div className="row service_c">

                   <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div className="highlighted" 
    >
        <div className="feauture-one__single-text">

          <div className="feauture-one__single-bottom">
            <div className="icon-box">
                <span className="icon-plane" style={{color: "#ffffff"}}>
<FaHouseUser className="icon-plane" size={30}/> 
                </span>
                
            </div>
        </div>

 <h3 className="investment_content" style={{color: "#ffffff"}}>
<span className="investment_content_para" style={{color: "#ffffff"}}>116,500+</span></h3>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_para_span" style={{color: "#ffffff"}}>الوحدات المسلمة حتى يوليو 2024.</span>
</p> 
        </div>
    </div>
</div>

 <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div className="highlighted" 
    >
        <div className="feauture-one__single-text">

          <div className="feauture-one__single-bottom">
            <div className="icon-box">
                <span className="icon-plane" style={{color: "#ffffff"}}>
<FaBuilding className="icon-plane" size={30}/> 
                </span>
                
            </div>
        </div>

 <h3 className="investment_content" style={{color: "#ffffff"}}>
<span className="investment_content_para" style={{color: "#ffffff"}}>30,000+</span></h3>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_para_span" style={{color: "#ffffff"}}>المساكن تحت التطوير في الإمارات.</span>
</p> 
        </div>
    </div>
</div>

 <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div className="highlighted" 
    >
        <div className="feauture-one__single-text">

          <div className="feauture-one__single-bottom">
            <div className="icon-box">
                <span className="icon-plane" style={{color: "#ffffff"}}>
<FaChartLine className="icon-plane" size={30}/> 
                </span>
                
            </div>
        </div>

 <h3 className="investment_content" style={{color: "#ffffff"}}>
<span className="investment_content_para" style={{color: "#ffffff"}}>56%</span></h3>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_para_span" style={{color: "#ffffff"}}>زيادة في مبيعات العقارات في النصف الأول من 2024.</span>
</p> 
        </div>
    </div>
</div>

 <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div className="highlighted" 
    >
        <div className="feauture-one__single-text">

          <div className="feauture-one__single-bottom">
            <div className="icon-box">
                <span className="icon-plane" style={{color: "#ffffff"}}>
<FaGlobe className="icon-plane" size={30}/> 
                </span>
                
            </div>
        </div>

 <h3 className="investment_content" style={{color: "#ffffff"}}>
<span className="investment_content_para" style={{color: "#ffffff"}}>12+ دولة</span></h3>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_para_span" style={{color: "#ffffff"}}>وجود رائد في الأسواق العالمية.</span>
</p> 
        </div>
    </div>
</div>


                </div>
            </div>

            <div className="btn_style btn_style_margin">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            سجّل اهتمامك
          </button>
</div>
        </section>
       
        </>
    )
}

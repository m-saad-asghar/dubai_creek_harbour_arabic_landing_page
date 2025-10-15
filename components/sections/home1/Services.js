'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one service_padding" id="why-emaar" style={{paddingTop: 0}}>
            <div className="container banner_container_main_feature component_container" dir="rtl">
              <div>
                                    <p className="small_heading">
                                        التميز في التطوير
                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">لماذا إعمار؟</h2>
                                </div>
                                <p className="about_paragraph services_cont">
                                    <span className="about_paragraph_span">إعمار العقارية، واحدة من أكثر شركات التطوير العقاري تكاملاً وقيمة وإعجابًا في العالم، تشكل أساليب حياة المستقبل. عند شراء عقار من إعمار، فإنك تستثمر في اسم يمكنك الوثوق به، وأسلوب حياة يمكنك الاستمتاع به، ومجتمع يمكنك الازدهار فيه، كل ذلك داخل مدينة تتحقق فيها الأحلام.</span>
                                </p>
                <div className="row service_c">

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted" 
                        >
                            <div className="feauture-one__single-text min_hei">

                             <div className="why_c">
                               <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaHouseUser className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

 <h3 className="investment_content service_num" style={{color: "#ffffff"}}>
<span className="investment_content_para service_num" style={{color: "#ffffff"}}>116,500+</span></h3>
                             </div>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_paragraph_span" style={{color: "#ffffff"}}>الوحدات المسلمة حتى يوليو 2024.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted"
                        >
                            <div className="feauture-one__single-text min_hei">

                               <div className="why_c">
                                <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaBuilding className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

 <h3 className="investment_content service_num" style={{color: "#ffffff"}}>
<span className="investment_content_para service_num" style={{color: "#ffffff"}}>30,000+</span></h3>
                              </div>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_paragraph_span" style={{color: "#ffffff"}}>المساكن قيد التطوير في الإمارات.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted"
                        >
                            <div className="feauture-one__single-text min_hei">

                              <div className="why_c">
                               <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaChartLine className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

 <h3 className="investment_content service_num" style={{color: "#ffffff"}}>
<span className="investment_content_para service_num" style={{color: "#ffffff"}}>56%</span></h3>
                             </div>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_paragraph_span" style={{color: "#ffffff"}}>زيادة في مبيعات العقارات خلال النصف الأول من 2024.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted"
                        >
                            <div className="feauture-one__single-text min_hei">

                              <div className="why_c">
                               <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaGlobe className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

 <h3 className="investment_content service_num" style={{color: "#ffffff"}}>
<span className="investment_content_para service_num" style={{color: "#ffffff"}}>12+ دولة</span></h3>
                             </div>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_paragraph_span" style={{color: "#ffffff"}}>حضور قوي في الأسواق العالمية.</span>
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
            سجل اهتمامك
          </button>
</div>
        </section>
       
        </>
    )
}

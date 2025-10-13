'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function  Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one feature_wrap" id="around-the-corner">
            <div className="container banner_container_main_feature component_container" dir="rtl">
              <div>
                                    <p className="small_heading">
                                        التفاصيل
                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">لماذا تستثمر في دبي؟</h2>
                                </div>
                <div className="row feature_row">

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{marginBottom: 0}} 
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaDollarSign className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">عائدات إيجارية أعلى</span></h3>

<p className="investment_text">
  <span className="about_para_span">تتراوح العوائد الإيجارية الإجمالية للمستثمرين بين 5٪ و9٪.</span>
</p> 
                            </div>
                        </div>
                    </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single">
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaHouseUser className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">عقارات فاخرة</a></h2>
<p className="investment_text">
  <span className="about_para_span">أسعار العقارات لكل قدم مربع لا تزال أقل من العديد من المدن الأخرى.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single">
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaMoneyBill className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
عقارات بدون ضرائب</a></h2>

<p className="investment_text">
  <span className="about_para_span">بمجرد شراء عقار، لن تدفع أي ضرائب مرة أخرى.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single">
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaWalking className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">سهولة الوصول العالية</a></h2>
<p className="investment_text">
  <span className="about_para_span">تتمتع المدينة برحلات جوية مباشرة من جميع المدن الكبرى في العالم.</span>
</p>

                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}>
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaMap className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
الجاذبية السياحية</a></h2>

<p className="investment_text">
  <span className="about_para_span">مراكز تسوق عالمية، ومعالم جذب، وفنادق، وشواطئ خلابة.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}>
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaShieldAlt className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">الأمان المجتمعي</a></h2>

<p className="investment_text">
  <span className="about_para_span">دبي آمنة للغاية ومثالية للعائلات والأفراد.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single"  style={{paddingTop: 0}}>
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaChartLine className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">مركز تجاري ولوجستي</a></h2>
<p className="investment_text">
  <span className="about_para_span">تجذب دبي المستثمرين الأجانب في مختلف القطاعات.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}>
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaIdCard className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">تأشيرة الإقامة الذهبية في الإمارات</a></h2>
<p className="investment_text">
  <span className="about_para_span">الإقامة في الإمارات: التأشيرات الذهبية والخضراء متاحة الآن للمستثمرين العقاريين.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}>
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaLightbulb className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
تخطيط مستدام</a></h2>
<p className="investment_text">
  <span className="about_para_span">تستثمر دبي بشكل كبير في التكنولوجيا والطاقة الخضراء والصحة والتعليم.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}>
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaGift className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
مكافآت إعمار يو</a></h2>
<p className="investment_text">
  <span className="about_para_span">استثمر أكثر من 20 مليون درهم للبلاتينيوم و10 ملايين درهم للفئة الذهبية.</span>
</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="btn_style_invest">
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

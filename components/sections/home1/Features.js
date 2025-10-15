'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function  Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one feature_wrap" id="why-invest-in-dubai">
            <div className="container banner_container_main_feature component_container" dir="rtl">
              <div>
                                    <p className="small_heading">
                                        التفاصيل
                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">لماذا الاستثمار في دبي؟</h2>
                                </div>
                <div className="row feature_row">

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{marginBottom: 0}} 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaDollarSign className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

<h2 className="investment_content">
<a href="javascript:void(0);">عوائد إيجارية أعلى</a></h2>

<p className="investment_text">
  <span className="about_para_span">
  عوائد الإيجار الإجمالية للمستثمرين تتراوح بين
  <span className="number_styling"> 5%</span> و
  <span className="number_styling"> 9%</span>.
</span>
</p> 
                            </div>
                        </div>
                    </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaHouseUser className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">عقارات متميزة</a></h2>
<p className="investment_text">
  <span className="about_para_span">تظل أسعار العقارات لكل قدم مربع أقل من العديد من المدن.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
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
  <span className="about_para_span">بمجرد شراء العقار، لن تدفع أي ضرائب مرة أخرى.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaWalking className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">سهولة الوصول</a></h2>
<p className="investment_text">
  <span className="about_para_span">تتوفر رحلات مباشرة من جميع المدن الكبرى حول العالم.</span>
</p>

                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}} 
                        // style={{minHeight: 250}}
                        >
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
  <span className="about_para_span">مراكز تسوق عالمية، معالم سياحية، فنادق وشواطئ جميلة.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
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
  <span className="about_para_span">دبي آمنة للغاية ومناسبة للعائلات والأفراد.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single"  style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
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
  <span className="about_para_span">دبي تجذب المستثمرين الأجانب في مختلف القطاعات.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaIdCard className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">الفيزا الذهبية الإماراتية</a></h2>
<p className="investment_text">
  <span className="about_para_span">الإقامة في الإمارات: الفيز الذهبية والخضراء الآن للمستثمرين العقاريين.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
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
التخطيط المستدام</a></h2>
<p className="investment_text">
  <span className="about_para_span">تستثمر دبي بشكل كبير في التكنولوجيا والطاقة الخضراء والصحة والتعليم.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
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
مكافآت إعمار U</a></h2>
<p className="investment_text">
<span className="about_para_span">
  استثمر <span className="number_styling">20 مليون درهم+</span> للبلاتينيوم، 
  <span className="number_styling">10 مليون درهم+</span> للذهبي.
</span>

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

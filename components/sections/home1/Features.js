'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function  Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one feature_wrap" id="around-the-corner" dir="rtl">
            <div className="container banner_container_main_feature">
              <div>
                                    <p className="small_heading">
                                        التفاصيل
                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">لماذا الاستثمار في دبي؟</h2>
                                </div>
                <div className="row feature_row">

                    <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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

                                <h3 className="investment_content">
<span className="investment_content_para">عوائد إيجارية أعلى</span></h3>

<p className="investment_text">
  <span className="about_para_span">تتراوح العوائد الإيجارية الإجمالية للمستثمرين بين ٥٪ و ٩٪.</span>
</p> 
                            </div>
                        </div>
                    </div>
                  <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
<a href="javascript:void(0);">عقار فاخر</a></h2>
<p className="investment_text">
  <span className="about_para_span">تظل أسعار العقارات لكل قدم مربع أقل من العديد من المدن.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
عقار معفى من الضرائب</a></h2>


<p className="investment_text">
  <span className="about_para_span">بمجرد شراء العقار، لن تدفع أي ضرائب مرة أخرى أبداً.</span>
</p>
 
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
<a href="javascript:void(0);">سهولة الوصول العالية</a></h2>
<p className="investment_text">
  <span className="about_para_span">تحتوي المدينة على رحلات مباشرة من جميع المدن الكبرى في العالم.</span>
</p>

        </div>
    </div>
</div>

 <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
  <span className="about_para_span">مراكز تسوق عالمية، ومعالم سياحية، وفنادق وشواطئ جميلة.</span>
</p>
        </div>
    </div>
</div>

 <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
<a href="javascript:void(0);">السلامة المجتمعية</a></h2>

<p className="investment_text">
  <span className="about_para_span">دبي آمنة للغاية ومثالية للعائلات والأفراد.</span>
</p>
        </div>
    </div>
</div>

 <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
  <span className="about_para_span">تعد دبي وجهة رئيسية للمستثمرين الأجانب في مختلف القطاعات.</span>
</p>
        </div>
    </div>
</div>

 <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
<a href="javascript:void(0);">التأشيرة الذهبية للإمارات</a></h2>
<p className="investment_text">
  <span className="about_para_span">الإقامة في الإمارات: التأشيرات الذهبية والخضراء متاحة الآن لمستثمري العقارات.</span>
</p>
        </div>
    </div>
</div>


                    <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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

 <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
مكافآت إعمار يو</a></h2>
<p className="investment_text">
  <span className="about_para_span">استثمر 20 مليون درهم فأكثر للمستوى البلاتيني، و10 مليون درهم فأكثر للمستوى الذهبي.</span>
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
            سجّل اهتمامك
          </button>
</div>

        </section>
       
        </>
    )
}

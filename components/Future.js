"use client";
import Link from "next/link"
import Image from "next/image";
import { FaBuilding, FaCity, FaDollarSign, FaGift, FaHouseUser, FaTree } from "react-icons/fa";
export default function Future() {
    return (
        <>
            <section className="about-one future_styling" id="about-us">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except component_container" dir="rtl">
                    <div className="row minus_styling">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling">
                                        <span className="welcome_emaar_styling_span">
                                            مستقبل الحياة على الواجهة المائية
                                        </span>
                                    </h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_paragraph">
    <span className="about_paragraph_span">اكتشف التناغم المثالي بين السكينة والعافية والرقي في خور دبي. حيث يجمع هذا المجتمع النابض بالحياة بين هدوء الإطلالات المائية وحيوية المنتزهات والممرات والمرافق الصحية والمشاهد الخلابة للمارينا وأفق دبي.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">استمتع بتمارين اليوغا عند شروق الشمس على ضفاف المياه، أو بتجارب تناول الطعام في الهواء الطلق، أو بنزهة هادئة على طول الخور الساحر. كما يمكنك الاسترخاء بجانب حوض سباحة لامتناهي يطل على برج خليفة، أو استكشاف الحي في جولة بالدراجة الهوائية.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">سواء كنت تبحث عن منزل الأحلام أو فرصة استثمارية واعدة، يقدم خور دبي قيمة استثنائية مع مجموعته من الشقق الفاخرة المكونة من غرفة إلى ثلاث غرف نوم، والمنازل العائلية، والبنتهاوس الفاخرة — جميعها مصممة بأناقة عصرية وجودة عالمية.</span>
</p>
                                </div>

                                <div className="row future_row">
                                
                                                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaBuilding className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">711,399 sqm</span></h3>
                                
                                <p className="investment_text">
    <span className="about_paragraph_span">Serviced Apartments.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                  {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaCity className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">7.4 million sqm</span></h3>
                            
                                <p className="investment_text">
    <span className="about_paragraph_span">Residential Space.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                
                                                     {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaTree className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

<h3 className="investment_content">
<span className="investment_content_para">500,000 sqm</span></h3>
                                
                                <p className="investment_text">
    <span className="about_paragraph_span">Parks & Open Spaces.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                
                                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="btn_style">
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

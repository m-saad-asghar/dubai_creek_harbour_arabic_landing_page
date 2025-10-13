"use client";
import Link from "next/link"
import Image from "next/image";
import { FaBuilding, FaCity, FaDollarSign, FaGift, FaHouseUser, FaTree } from "react-icons/fa";
export default function Future() {
    return (
        <>
            <section className="about-one future_styling" id="about-us">
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

                                <div className="text-box">
<p className="about_para">
    <span className="about_para_span">اختبر المزيج المثالي من الهدوء والعافية والرقي في خور دبي، المجتمع الحيوي الذي يجمع بين أسلوب الحياة الهادئ على الواجهة المائية والممشى النابض بالحياة ومرافق الرفاهية والإطلالات الخلابة على الخور وأفق دبي الساحر. استمتع بجلسات اليوغا عند شروق الشمس، أو بتناول الطعام في الهواء الطلق، أو بنزهة هادئة على الممشى الخلاب. التقط أجمل صور الغروب على الخور، أو انطلق في جولة بحرية لتستكشف معالم دبي الأيقونية من منظور جديد.</span>
</p><br/>

<p className="about_para">
    <span className="about_para_span">استرخِ بجانب المسبح اللامتناهي المطل على برج خليفة، أو تجوّل بالدراجة في أجواء مريحة بين مرافق المجتمع. سواء كنت تبحث عن منزل أحلامك أو فرصة استثمارية مميزة، فإن خور دبي يقدم لك قيمة لا تُضاهى. اختر من بين شقق أنيقة بغرفة إلى ثلاث غرف نوم، أو منازل عائلية فسيحة، أو بنتهاوس فاخرة، جميعها مصممة بأسلوب عصري واهتمام دقيق بأدق التفاصيل.</span>
</p>
                                </div>

                                <div className="row future_row">
                                
  <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div className="feauture-one__single">
      <div className="feauture-one__single-text">

        <div className="feauture-one__single-bottom">
          <div className="icon-box">
            <span className="icon-plane">
              <FaBuilding className="icon-plane" size={30}/> 
            </span>
          </div>
        </div>

        <h3 className="investment_content">
          <span className="investment_content_para">711,399 متر مربع</span>
        </h3>

        <p className="investment_text">
          <span className="about_para_span">شقق فندقية.</span>
        </p>
      </div>
    </div>
  </div>

  <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div className="feauture-one__single">
      <div className="feauture-one__single-text">

        <div className="feauture-one__single-bottom">
          <div className="icon-box">
            <span className="icon-plane">
              <FaCity className="icon-plane" size={30}/> 
            </span>
          </div>
        </div>

        <h3 className="investment_content">
          <span className="investment_content_para">7.4 مليون متر مربع</span>
        </h3>

        <p className="investment_text">
          <span className="about_para_span">مساحة سكنية.</span>
        </p>
      </div>
    </div>
  </div>

  <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div className="feauture-one__single">
      <div className="feauture-one__single-text">

        <div className="feauture-one__single-bottom">
          <div className="icon-box">
            <span className="icon-plane">
              <FaTree className="icon-plane" size={30}/> 
            </span>
          </div>
        </div>

        <h3 className="investment_content">
          <span className="investment_content_para">500,000 متر مربع</span>
        </h3>

        <p className="investment_text">
          <span className="about_para_span">حدائق ومساحات مفتوحة.</span>
        </p>
      </div>
    </div>
  </div>

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
            سجّل اهتمامك
          </button>
</div>
                
            </section>
        </>
    )
}

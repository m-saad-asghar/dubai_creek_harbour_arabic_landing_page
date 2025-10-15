"use client";
import Link from "next/link"
import Image from "next/image";
export default function About() {
    return (
        <>
            <section className="about-one about_spacing" id="welcome-to-dubai-creek-harbour">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except component_container" dir="rtl">
                    <div className="row">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div>
                                    <p className="small_heading">
                                        <span>ارتقِ بأسلوب حياتك</span>
                                    </p>
                                </div>
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling"><span className="welcome_emaar_styling_span">مرحباً بكم في خور دبي</span></h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_paragraph">
    <span className="about_paragraph_span">موطناً لمعالم أيقونية مثل مرسى خور دبي ومحمية رأس الخور للحياة البرية، يجمع خور دبي بين الأناقة الحضرية وجمال الطبيعة في تناغم فريد. تجوّل على طول البحيرات الهادئة، واستمتع بتجربة تناول الطعام على الواجهة المائية، وتأمل الإطلالات البانورامية الخلابة لأفق دبي.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">بفضل موقعه الاستراتيجي واتصاله المثالي بـ وسط مدينة دبي ومطار دبي الدولي ومشروع توسعة المترو القادم، يقدم خور دبي أسلوب حياة استثنائي يجمع بين الراحة والرقي.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">اكتشف مجموعة من الشقق الأنيقة والبنتهاوس والفنادق الفاخرة مثل فندق فيدا كريك هاربر، وفندق العنوان هاربر بوينت، وقصر رزيدنس  — جميعها توفر مرافق عالمية المستوى وتجارب راقية في التسوق والترفيه ضمن وجهة واجهة مائية نابضة بالحياة.</span>
</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="about-one__img about_i">
                                <div className="inner">
                                    <Image
  src="/assets/img/about/about_us.jpg"
  alt="About Us"
  width={600} 
  height={350}
  style={{objectFit: "cover"}}
/>

                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
                
            </section>
        </>
    )
}
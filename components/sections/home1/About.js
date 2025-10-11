"use client";
import Link from "next/link"
import Image from "next/image";
export default function About() {
    return (
        <>
            <section className="about-one about_spacing" id="about-us" dir="rtl">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except">
                    <div className="row">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div>
                                    <p className="small_heading">
                                        <span>ارتقِ بأسلوب حياتك</span>
                                    </p>
                                </div>
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling">مرحبًا بكم في خور دبي</h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_para">
    <span className="about_para_span">اختبر التناغم المثالي بين العيش العصري وجمال الطبيعة في خور دبي، موطن المعالم الأيقونية مثل مرسى خور دبي – الجنة لعشّاق اليخوت – ومحمية رأس الخور للحياة الفطرية، المشهورة بتنوّعها البيئي وغناها بالطيور الفلامنجو الجميلة. وتوفر بحيراتها الهادئة أجواءً مثالية للمشي الهادئ وسط الطبيعة ومراقبة الطيور في أجواء من السكينة.</span>
</p><br/>

<p className="about_para">
    <span className="about_para_span">بفضل موقعه الاستراتيجي، يتمتع خور دبي باتصال مباشر مع وسط مدينة دبي ومطار دبي الدولي والتمديد القادم لمترو دبي، مما يجمع بين الفخامة وسهولة الوصول. ومع ممشاه الخلاب، ومطاعمه العالمية، ومدارسه، ومرافقه الصحية، ومناطقه الترفيهية، يُعد خور دبي عنوانًا مميزًا للعيش والاستثمار على حدٍ سواء.</span>
</p><br/>

<p className="about_para">
    <span className="about_para_span">اختر من بين مجموعة رائعة من الشقق والبنتهاوس والفنادق الفاخرة مثل فيدا خور دبي والعنوان هاربر بوينت وقصر الخور، وجميعها تتميز بإطلالات خلابة على الخور وأفق دبي الساحر. يمكن للمقيمين والزوار الاستمتاع بتجارب تناول الطعام الراقية، والاسترخاء في المسابح العلوية، واستكشاف تجارب التسوق الفاخرة – كل ذلك في وجهة استثنائية واحدة.</span>
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

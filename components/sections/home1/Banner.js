'use client'
import { useState, useEffect } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BitrixForm from '@/components/BitrixForm';
import Image from 'next/image';
import toast from 'react-hot-toast';
import PhoneInput from "react-phone-input-2";
import { useRouter } from 'next/navigation';
import 'react-phone-input-2/lib/style.css';
import { useSearchParams } from 'next/navigation';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}

export default function Banner() {
  const router = useRouter();
    const [isOpen, setOpen] = useState(false)
    const [keepUpdated, setKeepUpdated] = useState(true);
     const [disableBtn, setDisableBtn] = useState(false)
      const searchParams = useSearchParams();
  const [originValue, setOriginValue] = useState('');
    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    // message: '',
  });

   useEffect(() => {
    const origin = searchParams.get('origin');

    if (origin) {
      if (origin.toLowerCase() === 'meta') {
        setOriginValue('Meta');
      } else if (origin.toLowerCase() === 'google') {
        setOriginValue('Google Ads');
      } else {
        setOriginValue('');
      }
    } else {
      setOriginValue('');
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    fields: {
      TITLE: `Dubai Creek Harbour AR Landing Page`,
      UF_CRM_1760777561731: originValue,
      NAME: formData.name,
      PHONE_TEXT: formData.phone,
      PHONE: [
        {
          VALUE: formData.phone,
          VALUE_TYPE: "WORK",
        },
      ],
      EMAIL: [
        {
          VALUE: formData.email,
          VALUE_TYPE: "WORK",
        },
      ],
      SOURCE_DESCRIPTION: formData.message,
      SOURCE_ID: "WEB",
      ASSIGNED_BY_ID: 25,
      UF_CRM_1754652292782: "Dubai Creek Harbour AR Landing Page",
    },
    params: {
      REGISTER_SONET_EVENT: "Y",
    },
  };

  try {
    setDisableBtn(true);
    const response = await fetch(
      "https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
   setDisableBtn(false);

    if (result.result) {
      router.push('/thank-you');
//       toast.success(
//   "Thank you for reaching out. Your inquiry has been received and we will contact you soon.",
//   {
//     duration: 5000, 
//   }
// );
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      setDisableBtn(false);
      toast.error(
  "Something Went Wrong. Please Try Again.",
  {
    duration: 5000,
  }
);
    }
  } catch (error) {
    setDisableBtn(false);
    console.error("Error submitting lead:", error);
       toast.error(
  "Something Went Wrong. Please Try Again.",
  {
    duration: 5000,
  }
);
  }
};
  return (
    <>
    
    <section className="main-slider main-slider-one" id="home">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">                    
        <SwiperSlide className="swiper-slide">
          <div className="image-layer main_banner" 
          style={{backgroundImage: 'url(assets/img/slider/emaar_img_2.jpg)'}}
          >
            </div>
            <div className="container banner_container_main" dir='rtl'>
                <div className="main-slider-one__single">
                   <div className="container component_container">

                    <Link href="/" passHref className='logo_styling'>
  <Image
    src="/assets/icon/emaar_logo.png"
    alt="emaar_logo"
    height={30}
    width={300}
    style={{ height: "30px", width: "auto" }}
  />
</Link>

  <div className="row banner_container">
    <div className="col-lg-7 col-md-12">
      <div className="main-slider-one__content">
        <div className='banner_text_container'>
          <p className='heading_middle heading'>خـــور دبـــي</p>
         <h1 className="heading_middle sub_heading">
  منازل فاخرة تبدأ من <span className="line-break">1.7 مليون درهم إماراتي*</span>
</h1>

        <p className='heading_middle content'>احصل على عوائد استثنائية من استثمارك العقاري في أكثر المواقع طلبًا في دبي.</p>
        </div>

        <div className="btn-box">
          <div className="btn-one"></div>
          <div className="btn-two"></div>
        </div>

        {/* <div className="contact-info">
          <ul>
            <li>
              
            </li>

            <li>
              
            </li>
          </ul>
        </div> */}
      </div>
      <div className='resp_usd'>
       <p className="down_styling">
  *463,000 دولار أمريكي / 398,000 يورو / <span className="line-break">344,000 جنيه إسترليني</span>
</p>

      </div>
    </div>
    {/* <div className="col-lg-1 col-md-12"></div> */}
    <div className="col-lg-5 col-md-12">
      <div
        className="contact-form"
        style={{
          background: "#ffffff",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          paddingTop: 25,
          paddingBottom: 25
        }}
      >
        <h3
          className='form_heading'
        >
          سجل اهتمامك
        </h3>

     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="keepUpdated" className='checkbox_text'>
      الاسم الكامل*
    </label>
    <input
      type="text"
      name="name"
      placeholder="أدخل الاسم الكامل"
      className="form-control input_styling"
      value={formData.name}
      onChange={handleChange}
      required
      autoComplete="off"
  autoCorrect="off"
  spellCheck="false"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="keepUpdated" className='checkbox_text'>
      البريد الإلكتروني*
    </label>
    <input
      type="email"
      name="email"
      placeholder="أدخل بريدك الإلكتروني"
      className="form-control input_styling"
      value={formData.email}
      onChange={handleChange}
      required
      autoComplete="off"
  autoCorrect="off"
  spellCheck="false"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="keepUpdated" className='checkbox_text'>
      رقم الهاتف*
    </label>
    <PhoneInput
      name="phone"
      country={"ae"}
      value={formData.phone}
      onChange={(value) =>
        setFormData({
          ...formData,
          phone: value,
        })
      }
      countryCodeEditable={false}
      required
      inputStyle={{
        width: "100%",
        borderRadius: "0",
        border: "1px solid #000",
        height: "50px",
      }}
    />
  </div>

  <p className='form_text'>
    يرجى زيارة <a 
      href="/privacy-policy" 
      target="_blank" 
      rel="noopener noreferrer"
      className='privacy_policy'
    >
      سياسة الخصوصية
    </a> لفهم كيفية تعامل إعمار مع بياناتك الشخصية.
  </p>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 24 }}>
    <input
      type="checkbox"
      id="keepUpdated"
      name="keepUpdated"
      checked={keepUpdated}
      onChange={(e) => setKeepUpdated(e.target.checked)}
      style={{ cursor: 'pointer' }}
      className="modern-checkbox"
    />
    <label htmlFor="keepUpdated" className='checkbox_text'>
      أرغب في تلقي التحديثات حول الأخبار والعروض
    </label>
  </div>

  <button
    disabled={disableBtn}
    type="submit"
    className="btn w-100"
    style={{
      backgroundColor: '#9f8151',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      fontWeight: '600',
      textTransform: "uppercase"
    }}
  >
    <label className='submit_form_btn'>إرسال</label>
  </button>
</form>

      </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </SwiperSlide>
        {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" id="main-slider-one__pagination"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"  role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span></div> */}
      </Swiper>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
    </>
  );
};
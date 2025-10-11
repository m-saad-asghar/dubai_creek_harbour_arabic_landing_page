'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Map() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one map_cont service_padding" id="around-the-corner" style={{paddingTop: 0}} dir="rtl">
            <div className="container banner_container_main_feature map_styling">
              <div>
                                    <p className="small_heading">
                                        التفاصيل

                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">خريطة دبي</h2>
                                </div>

                                <div>
                                    <Image
    src="/assets/icon/map.png"
    alt="emaar_logo"
    height={40}
    width={300}
    style={{ height: "100%", width: "100%" }}
  />
                                </div>
                            
            </div>

            <div className="btn_style_map">
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

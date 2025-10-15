import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import Script from 'next/script';
import { dM_Sans, } from '@/lib/font'
import { Toaster } from 'react-hot-toast';
export const metadata = {
    title: 'Dubai Creek Harbour - EMAAR',
    description: 'Project by Emaar',
}

export default function RootLayout({ children }) {
    return (
         <html lang="en" className={`${dM_Sans.variable}`}>
            <head>
        {/* Google tag (gtag.js) */}
        <Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-3TH6BM8XDQ"
/>
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3TH6BM8XDQ');
  `}
</Script>
      </head>
            <body>
                {children}
                <Toaster position="top-right" reverseOrder={false} />
            </body>
        </html>
    )
}

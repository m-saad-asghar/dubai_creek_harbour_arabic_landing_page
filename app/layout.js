import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dM_Sans, } from '@/lib/font'
import { Toaster } from 'react-hot-toast';
export const metadata = {
    title: 'Dubai Creek Harbour - EMAAR',
    description: 'Project by Emaar',
}

export default function RootLayout({ children }) {
    return (
         <html lang="en" className={`${dM_Sans.variable}`}>
            <body>
                {children}
                <Toaster position="top-right" reverseOrder={false} />
            </body>
        </html>
    )
}

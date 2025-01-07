import { Footer, Navbar } from '@/components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import { manrope, urbanist } from './fonts/font';
import './globals.css';

export const metadata = {
  title: 'Home - Chennai Trail Club',
  description: 'Chennai Trail Club Home Page',
  openGraph: {
    title: 'Home - Chennai Trail Club',
    description: 'Chennai Trail Club Home Page',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${manrope.variable} antialiased `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

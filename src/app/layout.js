import { Footer, Navbar } from '@/components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { manrope, urbanist } from './fonts/font';
import './globals.css';
import GlobalSpeculationRules from '@/components/Speculation/GlobalSpeculationRules';
import { JoinUsProvider } from '@/context/JoinUsContext';

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
      <body
        className={`${urbanist.variable} ${manrope.variable} antialiased bg-white`}
      >
        <JoinUsProvider>
          <Navbar />
          <GlobalSpeculationRules />
          {children}
          <Footer />
        </JoinUsProvider>
      </body>
    </html>
  );
}

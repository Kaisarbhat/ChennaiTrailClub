import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaStrava } from 'react-icons/fa';

export const socialLinksData = [
  {
    href: 'https://www.facebook.com/groups/901820050881838/?ref=share&mibextid=NSMWBT&_rdr',
    icon: <FaFacebookF />,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/chennaitrailclub/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
    icon: <FaInstagram />,
    label: 'Instagram',
  },
  {
    href: 'https://www.youtube.com',
    icon: <FaYoutube />,
    label: 'YouTube',
  },
  {
    href: 'https://www.strava.com/athletes/118722869',
    icon: <FaStrava />,
    label: 'Strava',
  },
];

export const policyLinksData = [
  { href: '/privacypolicy', text: 'Privacy Policy' },
  { href: '/termsofservice', text: 'Terms of Service' },
  {
    href: '/refundandcancellation',
    text: 'Refund and Cancellation Policy',
  },
];

export const quickLinksData = [
  { href: '/', text: 'Home' },
  { href: '/aboutus', text: 'About Us' },
  { href: '/events/upcomingevents', text: 'Upcoming Events' },
  { href: '/events/pastevents', text: 'Past Events' },
];

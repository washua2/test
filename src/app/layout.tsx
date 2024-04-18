import type {Metadata} from 'next';
import Link from 'next/link';
import './globals.css';
import '../assets/font/font.css';

import NavTop from '@/pages/NavTop';
import NavBar from '@/pages/NavBar';
import MeauBar from '@/pages/MeauBar';

export const metadata: Metadata = {
  title: 'next',
  description: 'react-next',
};

const DRAWER_WIDTH = 3840;

// const LINKS = [

// ];

// const PLACEHOLDER_LINKS = [

// ];

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" id="__next" className="dark">
      <body>
        <div className="w-[100vw] h-[135rem]">
          <NavTop></NavTop>
          {/* <NavBar></NavBar> */}
          {/* <div className="flex items-start mt-[14.75rem]">
            <div>
              <MeauBar></MeauBar>
            </div>
          </div> */}
            <div className="w-full mt-[4.25rem]">{children}</div>
        </div>
      </body>
    </html>
  );
}

import { LogoCara, LogosCara } from '@/app/ui/logos';
import AcmeLogo from '@/app/ui/logos';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import SideNav from '../ui/dashboard/sidenav';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
       <p className={`pb-2.5 font-semibold text-xl text-gray-600 md:text-3xl md:leading-normal`}>
       Be patient, your gifts are on the way
       </p>
       <p className={`text-gray-500 md:text-xl md:leading-normal`}>
       The treasure hunt is based on a "mystery" but with some help.
       Your objectives will be to find the treasures as soon as you can. Remember that you only have one chance. Don't waste it.
       </p>
       <div className="items-end items-center justify-center prounded-lg p-5 bg-gray-50 md:px-15 md:py-12"> 
          <Image
            src="/ali-logop1.jpeg"
            width={1200}
            height={1600}
            alt="Fuck"
          />
        </div>  
    </main>
  );
}
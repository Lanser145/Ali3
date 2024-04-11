import { LogoCara, LogosCara } from '@/app/ui/logos';
import AcmeLogo from '@/app/ui/logos';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
       <p className={`pb-2.5 font-semibold text-xl text-gray-600 md:text-3xl md:leading-normal`}>
       Every gift that is given, even if it is small, is actually great, if it is given with love
       </p>
       <p className={`text-gray-500 md:text-xl md:leading-normal`}>
       Congratulations, you have endured without crying, in every way.
       <br/>
        Anyway, now it's time to enjoy your first prize. 
        To do this you just have to show your boyfriend this screen and he will exchange it for a meal at a special place.
       </p>
       <div className="flex justify-center p-3 bg-gray-50 md:px-2.5 md:py-5">
       <div className='px-2.5 py-1'>
          <Image
            src="/juntos1.jpeg"
            width={1158}
            height={1544}
            alt="Fuck"
          />
          <Image
            src="/juntos2.jpeg"
            width={1158}
            height={1544}
            alt="Fuck"
          />
          <Image
            src="/juntos3.jpeg"
            width={1158}
            height={1544}
            alt="Fuck"
          />
           </div> 
        </div>  
    </main>
  );
}

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
       <p className={`pb-2.5 font-semibold text-xl text-gray-600 md:text-3xl md:leading-normal`}>
       Someone has to dare to change the rules of the world so that the world changes
       </p>
       <p className={`text-gray-500 md:text-xl md:leading-normal`}>
       1.- To play the game it is necessary to have 0 visibility at all times except for the light of the flashlight.
       <br/>
       2.- To find a gift you first have to have a chest. We have 3 chests and 5 gifts.
        Although it may seem like the numbers don't add up, you'll understand.
       <br/>
       3.- Breaking the rules at any time will result in immediate expulsion from the game.
       </p>
       <div className="flex justify-center p-10 bg-gray-50 md:px-2.5 md:py-5">
        <div className='px-2.5 py-1'>
          <Image
            src="/alibebe.jpeg"
            width={1600}
            height={1200}
            alt="Fuck"
          />
          <p className={`pt-5 pb-5 text-gray-500 md:text-xl md:leading-normal`}>
          Look at the sky tonight, all of the stars have a reason
          </p>
          <p className={lusitana.className}><b> Gustav Elijah Åhr - Star Shopping</b></p>
          </div>
          <div className='px-2.5 py-1'>
          <Image
            src="/alisola3.jpeg"
            width={1200}
            height={1600}
            alt="Fuck"
          />
          </div>
        </div>  
    </main>
  );
}


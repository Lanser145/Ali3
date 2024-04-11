import { CubeIcon } from '@heroicons/react/24/solid';
import { lusitana } from '@/app/ui/fonts';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { FaceSmileIcon } from '@heroicons/react/24/solid';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-3xl"><strong>Happy birthday Ali3!</strong></p>
    </div>
  );
}

export function LogoCara(){
  return (
    <div
    className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
    <FaceSmileIcon className="h-12 w-12 rotate-[-15deg]" /> 
    </div>
  );
}
export function LogosCara(){
    return (
      <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-gray-800`}
      >
      <FaceSmileIcon className="h-12 w-12 rotate-[-15deg]" /> <FaceFrownIcon className="h-12 w-12 rotate-[15deg]" /> <FaceFrownIcon className="h-12 w-12 rotate-[150deg]" /><FaceSmileIcon className="h-12 w-12 rotate-[45deg]" />  <FaceSmileIcon className="h-12 w-12 rotate-[-15deg]" /> <FaceFrownIcon className="h-12 w-12 rotate-[15deg]" /> <FaceFrownIcon className="h-12 w-12 rotate-[150deg]" /><FaceSmileIcon className="h-12 w-12 rotate-[45deg]" /> 
      </div>
    );
}


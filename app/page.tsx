import { LogoCara, LogosCara } from '@/app/ui/logos';
import AcmeLogo from '@/app/ui/logos';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana, inter } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-300 p-4 md:h-52">
        <LogoCara />
        <AcmeLogo />
        <LogoCara />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <LogosCara />
          <p className={`font-semibold text-xl text-gray-600 md:text-3xl md:leading-normal`}>
            <strong>Welcome to the treasure hunt.</strong> This is a sign of my affection that I dedicate to you with all my heart.{' '}
            <a className="text-pink-500">
            I hope you like it
            </a>
            <a className="text-white">
            .
            </a>
          </p>
          <LogosCara />
        <p className={lusitana.className}><b>designed by Sergio Tirado Rosales</b></p>
          <Link
          href="/dashboard"
          className="flex items-center gap-5 self-start rounded-lg bg-pink-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 bg-gray-50 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/final.jpeg"
            width={768}
            height={1024}
            alt="Fuck"
          />
        </div>
      </div>
    </main>
  );
}

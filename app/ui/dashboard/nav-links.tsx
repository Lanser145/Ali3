'use client';

import {
  GiftIcon,
  DocumentDuplicateIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Starting', href: '/dashboard', icon: DocumentCheckIcon, },
  {
    name: 'Instructions',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Reward', href: '/dashboard/customers', icon: GiftIcon },
];

export default function NavLinks() {
  const pathname = usePathname();  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
                        className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-pink-50 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-pink-50 text-pink-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

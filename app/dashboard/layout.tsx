import SideNav from '@/app/ui/dashboard/sidenav';
 // Lo que hace el layout es crear otro marco encima de sidenav
// Quitar <SideNav /> para visualizar n<SideNav />
 export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-none md:w-64">
    <SideNav />
  </div>
    <div className="flex-grow p-6 md:overflow-y-auto md:p-0">{children}</div>
    </div>
);

}
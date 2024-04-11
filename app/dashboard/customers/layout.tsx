import SideNav from '@/app/ui/dashboard/sidenav';
 // Lo que hace el layout es crear otro marco encima de sidenav
// Quitar <SideNav /> para visualizar <SideNav />
 export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="flex-grow md:overflow-y-auto md:p-0">{children}</div>
  );

}
import DashboardLayout from '@/components/layouts/dashboard';

type DashboardLayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;

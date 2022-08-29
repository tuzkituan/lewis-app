import type { NextPage } from 'next';
import NavigationBar from '../components/NavigationBar';

interface HomeProps {
  children: React.ReactNode;
}
const MainLayout: NextPage<HomeProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <NavigationBar />
      <div className="container">{children}</div>
    </div>
  );
};

export default MainLayout;

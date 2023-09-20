import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      <div className="p-3 lg:px-10 xl:w-8/12 lg:mx-auto">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;

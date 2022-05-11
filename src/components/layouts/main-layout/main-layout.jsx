import { Footer } from '../../footer';
import { Header } from '../../header';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </>
  );
};

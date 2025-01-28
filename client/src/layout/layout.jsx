import AppNavBar from "./appNavBar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <AppNavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

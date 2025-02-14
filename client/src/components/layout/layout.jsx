import AppNavBar from "./appNavBar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
function Layout({ children }) {
  return (
    <>
      <AppNavBar />
      {children}
      <Toaster position="bottom-center" />
      <Footer />
    </>
  );
}

export default Layout;

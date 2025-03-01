import AppNavBar from "./appNavBar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
function Layout({ children }) {
  return (
    <div className="d-flex flex-column">
      <AppNavBar />
      {children}
      <Toaster position="bottom-center" />
      <Footer />
    </div>
  );
}

export default Layout;

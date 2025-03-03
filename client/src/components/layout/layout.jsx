import AppNavBar from "./appNavBar";
import Footer from "./footer";
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

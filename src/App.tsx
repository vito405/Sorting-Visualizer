import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="hero-pattern min-h-screen w-screen bg-fixed flex flex-col transition-all duration-500 ease-in-out">
        <Header />
        <SideBar />
        <main>
          <AppRoutes />
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

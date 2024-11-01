import { Routes, Route, BrowserRouter } from "react-router-dom";

// componentes
import Usuarios from "./components/Usuarios";
import PdfGenerado from "./components/Pdf";
import { ChartJsComponente } from "./components/Chart";

import { LineChartPage } from "./pages/LineCharPage";
import { BarChartPage } from "./pages/BarChartPage";
import { PdfPage } from "./pages/PdfPage";
import { Alertas } from "./pages/AlertasPages";
import { AlertasConToastTyfi } from "./pages/ToastPage";
import "react-toastify/dist/ReactToastify.css";

//
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        draggable
        autoClose={2000}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Usuarios />} />
          <Route path="/pdf" element={<PdfGenerado />} />
          <Route path="/chart" element={<ChartJsComponente />} />
          <Route path="/linear" element={<LineChartPage />} />
          <Route path="/barra" element={<BarChartPage />} />
          <Route path="/pdfgenerar" element={<PdfPage />} />
          <Route path="/alert" element={<Alertas />} />
          <Route path="/toast" element={<AlertasConToastTyfi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import {
  PDFDownloadLink,
  Document,
  View,
  Text,
  Page,
  PDFViewer,
  StyleSheet,
} from "@react-pdf/renderer";
import { GenerarPdf } from "./Generar";
import { Plantilla } from "./pages/Plantilla";

const PdfGenerado = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/user/listar").then((response) => {
      setUsuarios(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Cargando</p>
        ) : (
          <PDFDownloadLink
            className="btn btn-info"
            document={<GenerarPdf data={usuarios} />}
          >
            {({ isLoading }) => (isLoading ? "generando pdf" : "Descargar pdf")}
          </PDFDownloadLink>
        )}
      </div>
    </>
  );
};

export default PdfGenerado;

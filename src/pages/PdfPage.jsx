import { Plantilla } from "../components/pages/Plantilla";
import { GenerarPdf } from "../components/Generar";
import { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { FichaSolicitud } from "../components/Generar";

export const PdfPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const styles = StyleSheet.create({
    page: { padding: 20 },
    section: {
      border: "1 solid #ccc",
      borderRadius: "2100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    header: {
      border: "1 solid #ccc",
      borderRadius: "2100px",
      display: "flex",
      justifyContent: "center",
    },
    title: { fontSize: 13, marginBottom: 10 },
    hola: { alignContent: "center", fontStyle: "" },
    prueba: { backgroundColor: "blue", height: "10px" },
  });

  useEffect(() => {
    axios.get("http://localhost:3000/user/listar").then((response) => {
      setUsuarios(response.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <Plantilla>
        {/*   <div className="h-screen w-full flex">
          <PDFViewer style={{ width: "100%", height: "100%" }}>
            <Document>
              <Page style={styles.page}>
                <View style={styles.header}>
                  <Text>Hola</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </div> */}
        <div className="h-screen w-full flex">
          <PDFViewer style={{ width: "100%", height: "100%" }}>
            {/*  <GenerarPdf data={usuarios} /> */}
            <FichaSolicitud />
          </PDFViewer>
        </div>
        <div>
          {isLoading ? (
            <p>Cargando</p>
          ) : (
            <PDFDownloadLink
              className="btn btn-info"
              document={<GenerarPdf data={usuarios} />}
            >
              {({ isLoading }) =>
                isLoading ? "generando pdf" : "Descargar pdf"
              }
            </PDFDownloadLink>
          )}
          {isLoading ? (
            <p>Cargando</p>
          ) : (
            <PDFDownloadLink
              className="btn btn-info"
              document={<FichaSolicitud />}
            >
              {({ isLoading }) =>
                isLoading ? "generando pdf" : "Descargar pdf"
              }
            </PDFDownloadLink>
          )}
        </div>
      </Plantilla>
    </>
  );
};

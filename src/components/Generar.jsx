import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20 },
  section: {
    margin: 10,
    padding: 10,
    border: "1 solid #ccc",
    borderRadius: "5px",
  },
  title: { fontSize: 13, marginBottom: 10 },
  hola: { alignContent: "center", fontStyle: "" },
});

export const GenerarPdf = ({ data }) => {
  return (
    <Document>
      <Page style={styles.page}>
        {data.map((item, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.title}> {item.us_nombre}</Text>
            <Text>{item.us_nombre}</Text>
            <Text>{item.us_apellidos}</Text>
            <Text>{item.us_contrasenia}</Text>
            <Text>{item.us_numero_documento}</Text>
            <Text>{item.us_tipo_documento}</Text>
            <Text style={styles.hola}> hola </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export const FichaSolicitud = () => {
  const styles = StyleSheet.create({
    page: { padding: 20 },
    section: {
      padding: 10,
      border: "1 solid #ccc",
      borderRadius: "5px",
    },
    header: {
      height: "80px",
      width: "100%",
      backgroundColor: "red",
      border: "1px solid #ccc",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: { fontSize: 13, marginBottom: 10 },
    hola: { alignContent: "center", fontStyle: "" },
    image: {
      width: 150,
      height: "100%",
    },
  });
  return (
    <>
      <Document>
        <Page style={styles.page}>
          <View style={styles.header}>
            <View>
              <Image style={styles.image} src="images.png" />
            </View>
            <Text>hol</Text>
          </View>
        </Page>
      </Document>
    </>
  );
};

import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maintitulocontainer}>
        <Text style={styles.maintitulo}>Feed</Text>
      </View>
      <View style={styles.subtitulocontainer}>
        <Text style={styles.subtitulo}>Barra de busqueda</Text>
      </View>
      <View style={styles.buttonscontainer}>
        <TouchableOpacity style={styles.boton}>
            <Image style={styles.img} source={require('../src/img/notification.png')}/>
            <Text style={styles.tituloBoton}>Recordatorios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
            <Image style={styles.img} source={require('../src/img/calendar.png')}/>
            <Text style={styles.tituloBoton}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
            <Image style={styles.img} source={require('../src/img/map.png')}/>
            <Text style={styles.tituloBoton}>Google Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
            <Image style={styles.img} source={require('../src/img/to-do-list.png')}/>
            <Text style={styles.tituloBoton}>TO-DO List</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  maintitulocontainer: {
    marginTop: 10,
    alignItems: "center",
  },
  maintitulo: {
    fontSize: 30,
  },
  subtitulocontainer: {
    marginTop: 10,
    alignItems: "center",
  },
  subtitulo: {
    fontSize: 24,
  },
  buttonscontainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 80,
    columnGap: 80,
    justifyContent: 'space-evenly'
  },
  boton: {
    alignItems:'center',
    textAlign: 'center',
  },
  img: {
    width: 50,
    height: 50
  },
  tituloBoton: {
    fontSize: 20,
  },
});

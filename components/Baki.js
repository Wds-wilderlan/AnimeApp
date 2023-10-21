import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Baki The Grappler</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/Baki.jpg')}
            />
          </View>
        </View>
        <View style={styles.section}>
          {renderTextSection('Historia', 'O anime "Baki" gira em torno de Baki Hanma, um jovem lutador que busca se tornar o mais forte do mundo. A série acompanha suas jornadas e desafios enquanto ele enfrenta uma série de adversários poderosos e excêntricos em competições de artes marciais. Além disso, Baki tem um relacionamento complexo com seu pai, Yujiro Hanma, um dos lutadores mais temidos e respeitados do mundo, o que adiciona um elemento emocional à trama. A série é marcada por lutas intensas, habilidades extraordinárias e temas de rivalidade, obsessão pela força suprema e legados familiares, criando um ambiente de ação e artes marciais emocionante e altamente estilizado.')}
          {renderTextSection('Mangá', 'O mangá "Baki the Grappler" foi criado por Keisuke Itagaki. Foi serializado pela primeira vez na revista "Weekly Shonen Champion" em 1991. Desde então, a série passou por várias continuações e adaptações ao longo dos anos, incluindo "Baki," "Baki: Son of Ogre," e "Baki: Hanma." A obra é conhecida por suas lutas intensas e personagens carismáticos, e se tornou um ícone no mundo das artes marciais no mundo do mangá e anime.')}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const renderTextSection = (subtitle, text) => (
  <View style={styles.textSection}>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bb0000',
    alignItems: 'center',
  },
  section: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffa500',
    textAlign: 'center',
    marginBottom: 30,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4, // Sombra mais fina para a imagem
    shadowRadius: 3, // Raio de sombra mais fino para a imagem
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    borderWidth: 6,
    borderColor: '#ffa500',
  },
  textSection: {
    marginBottom: 35,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4, // Sombra mais fina para a imagem
    shadowRadius: 3, // Raio de sombra mais fino para a imagem
    elevation: 5,
  },
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  textAlign:'center',
  },
  textContainer: {
    backgroundColor: '#f5a85e',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    margin:10,
    alignItems:'center',
  },
});

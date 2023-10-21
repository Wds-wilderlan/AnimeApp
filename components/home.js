import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>CASA</Text>
        </View>
        <View style={styles.section}>
          {renderTextSection('O Melhor dos Animes Para Você')}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/iconanime.jpg')}
            />
          </View>
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
    backgroundColor: '#aaaaaa',
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
    color: '#cc0000',
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
    borderColor: '#f5a85e',
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
    backgroundColor: '#cc0000',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    margin:10,
    alignItems:'center',
  },
});

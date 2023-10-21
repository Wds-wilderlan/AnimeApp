import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Hunter X Hunter</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/HxH.jpg')}
            />
          </View>
        </View>
        <View style={styles.section}>
          {renderTextSection('Historia', 'Gon Freecss é um garoto de 12 anos que decide se tornar um Hunter para encontrar seu pai ausente, Ging Freecss, um lendário Hunter. Para se qualificar, Gon enfrenta o Exame Hunter, onde faz amigos, incluindo Killua Zoldyck, um assassino, Leorio Paradinight, um estudante de medicina, e Kurapika, que busca vingança contra a trupe de assassinos que destruiu seu clã.')}
          {renderTextSection('Filmes', 'Em Hunter x Hunter: A Ultima Missão, Em meio à Batalha Olímpia, torneio que reúne os mestres de andar da Arena Celestial para decidir quem ficará no topo, surge uma nova ameaça. Os descendentes de um grupo que era a face oculta da Associação Hunter tomam a Arena Celestial e exigem a publicação de todas as missões secretas executadas por eles sob ordens da Associação. Seu líder, um velho conhecido do Presidente, quer o fim de todos os Hunters e conta com um poder contrário ao Nen e que se pensava estar extinto, o On.')}
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
    backgroundColor: '#00cc00',
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
    borderColor: '#cc0000',
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

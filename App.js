import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList } from 'react-native'

import Lista from './src/Lista';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Lucas Silva',
          descricao: 'Mais um dia de muitos bugs :)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0
        },
        {
          id: '2',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz!!!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0
        },
        {
          id: '3',
          nome: 'Jose Augusto',
          descricao: 'Bora trabalhar Haha',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3
        },
        {
          id: '4',
          nome: 'Gustavo Henrique',
          descricao: 'Isso sim que é TI!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 1
        },
        {
          id: '5',
          nome: 'Guilherme',
          descricao: 'Boa tarde galera do insta...',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32
        }
      ]

    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>

        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id} // garantir que o flatlist vai reconhecer na onde esta o ID
          data={this.state.feed}
          renderItem={({ item }) => <Lista data={item} />}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //flex que componhe o send e o logo insta
  header: {
    height: 55, //largura
    backgroundColor: '#fff', // cor de fundo
    flexDirection: "row", //direcionamento em linha
    alignItems: 'center', //alinhamento no centro
    justifyContent: 'space-between', // dar espaçamento de ponta a ponta do logo
    padding: 7, // espacamento dos paragrafos da borda logo

    borderBottomWidth: 0.2, // criação da linha abaixo do header
    shadowColor: '#000', // cor da linha
    elevation: 1, // dar uma pequena elevação
  },


  //botão send superior
  send: {
    width: 23, //largura
    height: 23 //altura
  },


  logo: {

  },
});

export default App;


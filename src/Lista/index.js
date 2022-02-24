import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like1 = this.like1.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    //comando para troca a foto do like, like sem curtida para like com curtida
    carregaIcone(likeada) {
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    // comando para afzer os calculos dos likes, acrecentar e retirar curtidas
    like1() {
        let feed = this.state.feed;

        if (feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed, // esse comando serve para pegar tudo do feed e mais as duas proximas propriedades, se não fazer isso vai apagar a imagem
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed, // esse comando serve para pegar tudo do feed e mais as duas proximas propriedades, se não fazer isso vai apagar a imagem
                    likeada: true,
                    likers: feed.likers + 1
                }
            });
        }
    }

    // comando para fazer fazer o sistema de curtida
    mostraLikes(likers) {
        let feed = this.state.feed; // variavel feed recebe this.state.feed

        if (feed.likers <= 0) {
            return; // não returna nada
        } // então retorna ...
        return (
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text> // se feed. for maior que 1 então curtidas, senão curtidas
        );
    }

    render() {
        return (
            <View style={styles.areaFeed}>

                <View style={styles.viewPerfil}>

                    <Image
                        source={{ uri: this.state.feed.imgperfil }} // aqui fizemos a importação da 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
                        style={styles.fotosPerfil}
                    />

                    <Text style={styles.nomeUsuario}>
                        {this.state.feed.nome}
                    </Text>

                </View>

                <Image
                    resizeMode='cover' //serve para encaixar a imagem melhor
                    style={styles.fotoPublicacao}
                    source={{ uri: this.state.feed.imgPublicacao }} // aqui fizemos a importação da 'https://sujeitoprogramador.com/instareact/foto3.png'
                />

                <View style={styles.areaBtn}>

                    <TouchableOpacity styles={styles.bLike} onPress={this.like1}>
                        <Image
                            source={this.carregaIcone(this.state.feed.likeada)} // ../ serve para ascessar a pasta que esta na segunda opção ''like
                            style={styles.iconelike}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bSend}>
                        <Image
                            source={require('../img/send.png')} // ../ serve para ascessar a pasta que esta na segunda opção ''send
                            style={styles.iconelike}
                        />
                    </TouchableOpacity>

                </View>

                {/* fazer uma função de renderização para contar os likes*/}
                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.textoRodape}>
                        {this.state.feed.nome}
                    </Text>

                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    areaFeed: {

    },

    //area perfil
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
        marginTop: 15
    },

    // foto perfil
    fotosPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    //nome perfil
    nomeUsuario: {
        fontSize: 20,
        textAlign: 'left',
        color: '#000000',
        padding: 8,

    },

    //foto publicada
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },

    //area de like e send
    areaBtn: {
        flexDirection: 'row',
        padding: 6
    },

    //botão like
    bLike: {
        paddingLeft: 10
    },

    //botão send
    bSend: {
        paddingLeft: 10

    },

    //tamanho, fonte da imagem like e send
    iconelike: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 25,
        width: 25,

    },
    //container do rorapes da imagens
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    //texto rodapé
    textoRodape: {
        fontSize: 18,
        fontWeight: 'bold', // deixar em negrito
        color: '#000000',
        paddingLeft: 5
    },

    //texto descrição no rorapé
    descRodape: {
        paddingLeft: 8,
        fontSize: 15,
        color: '#000000'
    },

    //texto que mostra os likes
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
    },

});

export default Lista;
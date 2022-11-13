import { View, Image, StyleSheet } from "react-native";
import { Texto } from "../../../components/Texto";

export const Itens = ({ titulo, lista }) => {
    return (
        <>
            <Texto style={styles.titulo}>{titulo}</Texto>
            {lista.map(({nome, imagem}) => (
                <View style={styles.item}>
                    <Image style={styles.imagem} source={imagem} />
                    <Texto style={styles.nome} key={nome}>{nome}</Texto>
                </View>
            ))}
        </>
    )
};

const styles = StyleSheet.create({
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems: 'center'
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
});
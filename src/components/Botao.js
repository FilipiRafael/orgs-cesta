import { TouchableOpacity, StyleSheet } from "react-native";
import { Texto } from "./Texto";

export const Botao = ({ texto, style, onPress }) => {
    return (
        <TouchableOpacity style={[style, styles.botao]} onPress={onPress}>
            <Texto style={styles.textoBotao}>
                {texto}
            </Texto>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
});

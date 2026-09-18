import { View, Text, Pressable, StyleSheet } from 'react-native';
import {COLORS} from '../constants/colors';


export function ActionButtons ({onAdd, onReset}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>Adicionar consumo:</Text>

            <View style= {styles.buttonRow}>
                {/*Adiciona 200 ml */}
                <Pressable style = {styles.button} onPress ={() => onAdd (200)}>
                    <Text style = {styles.buttonText}>+200 ml</Text>
                </Pressable>

                {/* Adiciona 350 ml */}
                <Pressable style = {styles.button}  onPress = {()=> onAdd (350)}>
                    <Text style= {style.buttonText}>+350 ml</Text>
                </Pressable>

                 {/* Adiciona  ml */}
                <Pressable style = {styles.button}  onPress = {()=> onAdd (500)}>
                    <Text style= {style.buttonText}>+500 ml</Text>
                </Pressable>
            </View>

             {/* Botão para reiniciar a contagem*/}
            <Pressable style = {styles.resetButton}  onPress = {onReset}>
                <Text style= {style.resetButtonText}>🔄 Reiniciat Dia</Text>
            </Pressable>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        fontSize: 14, 
        fontWeight: '600',
        color: COLORS.textMain,
        marginBottom: 12,
    },
    buttonRow: {
        j
    }
})
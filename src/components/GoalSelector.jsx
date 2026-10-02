import {View, Text, Pressable, StyleSheet } from 'react-native'; 
import { COLORS } from '../constants/colors';

export function GoalSelector ({goal, onIncrease, onDecrease}) {
    return (
        <View style = {styles.card} >
            <Text style = {styles.label }>Ajustar Meta Diária: </Text>
        
        
            <View style = {styles.controlsRow}>
                <Pressable style = {styles.controlButton}  onPress={onDecrease}>
                    <Text style = {styles.buttonText}> - 250 ml </Text>
                </Pressable> 
            
                <Text styles = {styles.goalText} >{goal} ml</Text>

                <Pressable style = {styles.controlButton}  onPress={onIncrease}>

                    <Text style = {styles.buttonText}> + 250 ml </Text>
                </Pressable> 
            </View>
        </View>
    );

}

const styles =  StyleSheet.create({
    card: {
        backgroundColor: COLORS.cardBg, 
        borderRadius:16, 
        padding:16,
        width: '100%',
        alignItems: 'center',
        marginBottom:16, 
        elevation:2,
},
    label: {
        fontSize: 13, 
        fontWeight:'600',
        color: COLORS.textMuted,
        marginBottom: 8,
    },
    controlsRow: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: '100%',
    },
    controlButton: {
        backgroundColor: COLORS.background,
        paddingVertical:8,
        paddingHorizontal:12,
        borderRadius: 8,
        borderWidth:1,
        borderColor: COLORS.secondary,
    },    















    }
})
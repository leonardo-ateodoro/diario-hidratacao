import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function ActionButtons({ onAdd, onReset }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Adicionar consumo:</Text>
      
      <View style={styles.buttonRow}>
        {/* Adiciona 200 ml */}
        <Pressable style={styles.button} onPress={() => onAdd(200)}>
          <Text style={styles.buttonText}>+200 ml</Text>
        </Pressable>

        {/* Adiciona 350 ml */}
        <Pressable style={styles.button} onPress={() => onAdd(350)}>
          <Text style={styles.buttonText}>+350 ml</Text>
        </Pressable>

        {/* Adiciona 500 ml */}
        <Pressable style={styles.button} onPress={() => onAdd(500)}>
          <Text style={styles.buttonText}>+500 ml</Text>
        </Pressable>
      </View>

      {/* Botão para reiniciar a contagem */}
      <Pressable style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetButtonText}>🔄 Reiniciar Dia</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  resetButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.danger,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: COLORS.danger,
    fontWeight: '600',
    fontSize: 13,
  },
});
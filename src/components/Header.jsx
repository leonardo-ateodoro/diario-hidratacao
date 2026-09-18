import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function Header({ goal }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💧 Diário de Hidratação</Text>
      <Text style={styles.subtitle}>Meta diária: {goal} ml</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 4,
  },
});
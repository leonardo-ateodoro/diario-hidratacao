import { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';

export default function App() {
  const GOAL = 2000; // Meta diária em ml
  const [consumed, setConsumed] = useState(0);

  // Função para acumular a quantidade ingerida
  const handleAddWater = (amount) => {
    setConsumed((prev) => prev + amount);
  };

  // Função para zerar o contador
  const handleReset = () => {
    setConsumed(0);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
        
        <View style={styles.content}>
          <Header goal={GOAL} />
          <WaterProgress consumed={consumed} goal={GOAL} />
          <ActionButtons onAdd={handleAddWater} onReset={handleReset} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLottery } from '../hooks/useLottery';
import Ball from '../components/Ball';
import { theme, styles } from '../themes/colors';
import { LotteryResult } from '../types/lotteryTypes';

const QuinaScreen: React.FC = () => {
  const { results, loading } = useLottery();

  // if (loading) {
  //   return <ActivityIndicator size="large" color={theme.colors.quina.background} />;
  // }

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const quinaResultados:LotteryResult | undefined = results?.quina;

  return (
    <View style={styles.container}>
       <Text style={styles.title}>QUINA</Text>
     <View style={styles.ballContainer}>
     {quinaResultados?.dezenas.map((dezena: number) => (
        <Ball key={dezena} number={dezena} color={theme.colors.quina.background} text={theme.colors.quina.text} spacing={theme.spacing.medium}/>
      ))}
     </View>
     <Text style={styles.subText}> {quinaResultados?.dataPorExtenso}</Text>
    </View>
  );
};

export default QuinaScreen;
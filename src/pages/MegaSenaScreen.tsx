import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLottery } from '../hooks/useLottery';
import Ball from '../components/Ball';
import { theme, styles } from '../themes/colors';
import { LotteryResult } from '../types/lotteryTypes';

const MegaSenaScreen: React.FC = () => {
  const { results, loading } = useLottery();

//   if (loading) {
//     return <ActivityIndicator size="large" color={theme.colors.megaSena.background} />;
//   }

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const megaSenaResults:LotteryResult | undefined = results?.megasena;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEGA-SENA</Text>
      <View style={styles.ballContainer}>
      {megaSenaResults?.dezenas.map((dezena: number) => (
        <Ball key={dezena} number={dezena} color={theme.colors.megaSena.background} text={theme.colors.megaSena.text} spacing={theme.spacing.medium}/>
      ))}
      </View>
      <Text style={styles.subText}> {megaSenaResults?.dataPorExtenso}</Text>
    </View>
  );
};

export default MegaSenaScreen;
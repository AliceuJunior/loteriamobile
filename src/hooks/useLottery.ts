// hooks/useLottery.ts
import { useContext } from 'react';
import { LotteryContext } from '../contexts/LotteryContext';

export const useLottery = () => {
  return useContext(LotteryContext);
};
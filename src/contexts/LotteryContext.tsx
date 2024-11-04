import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { getLatestResults } from '../services/lotteryService';

interface LotteryContextData {
  results: any;
  loading: boolean;
  fetchResults: () => Promise<void>;
}

interface LotteryProviderProps {
  children: ReactNode;
}

export const LotteryContext = createContext<LotteryContextData>({} as LotteryContextData);

export const LotteryProvider: React.FC<LotteryProviderProps> = ({ children }) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchResults = async () => {
    setLoading(true);
    const data = await getLatestResults();
    setResults(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <LotteryContext.Provider value={{ results, loading, fetchResults }}>
      {children}
    </LotteryContext.Provider>
  );
};
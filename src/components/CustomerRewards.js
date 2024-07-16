import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../api/transactions';
import { calculatePoints } from '../utils/calculatePoints';
import RewardTable from './RewardTable';

const CustomerRewards = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        setError('Failed to fetch transactions');
      }
    };
    getTransactions();
  }, []);

  const calculateCustomerPoints = () => {
    const pointsMap = {};
    transactions.forEach(({ customer, amount, date }) => {
      const month = new Date(date).getMonth();
      if (!pointsMap[customer]) pointsMap[customer] = { monthly: {}, total: 0 };

      const points = calculatePoints(amount);
      pointsMap[customer].total += points;
      pointsMap[customer].monthly[month] = (pointsMap[customer].monthly[month] || 0) + points;
    });
    return pointsMap;
  };

  const customerPoints = calculateCustomerPoints();

  return (
    <div>
      <h1>Customer Rewards</h1>
      {error && <p>{error}</p>}
      <RewardTable customerPoints={customerPoints} />
    </div>
  );
};

export default CustomerRewards;

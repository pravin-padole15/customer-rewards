import React from 'react';

const RewardTable = ({ customerPoints }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Month</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(customerPoints).map(([customer, { monthly, total }]) => (
          Object.entries(monthly).map(([month, points]) => (
            <tr key={`${customer}-${month}`}>
              <td>{customer}</td>
              <td>{parseInt(month) + 1}</td>
              <td>{points}</td>
            </tr>
          ))
        ))}
        {Object.entries(customerPoints).map(([customer, { total }]) => (
          <tr key={`${customer}-total`}>
            <td>{customer}</td>
            <td>Total</td>
            <td>{total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RewardTable;

export const fetchTransactions = async () => {
    // Simulate an API call with a timeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { customer: 'John Doe', amount: 120, date: '2024-05-01' },
          { customer: 'John Doe', amount: 75, date: '2024-05-21' },
          { customer: 'Jane Smith', amount: 200, date: '2024-06-12' },
          { customer: 'Jane Smith', amount: 50, date: '2024-07-01' },
          // Add more transactions as needed
        ]);
      }, 1000);
    });
  };
  
//get visible expenses: 

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate; 
    const endDateMatch = typeof(endDate) !== "number" || expense.createdAt <= endDate;

    const lowerCaseDescription = expense.description.toLowerCase();
    const lowerCaseText = text.toLowerCase();
    const textMatch = lowerCaseDescription.includes(lowerCaseText);

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === "date") {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortBy === "amount") {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export default getVisibleExpenses;

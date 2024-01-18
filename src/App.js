import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expensesData = [
    {
      id: "1",
      title: "Car Insurance",
      price: 300,
      date: new Date(2022, 5, 15),
    },
    {
      id: "2",
      title: "Kindergarden",
      price: 400,
      date: new Date(2024, 3, 20),
    },
    {
      id: "3",
      title: "Toilet Paper",
      price: 2,
      date: new Date(2023, 1, 25),
    },
    {
      id: "4",
      title: "Online course",
      price: 100,
      date: new Date(2022, 4, 10),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expensesData[0].title}
        price={expensesData[0].price}
        date={expensesData[0].date}
      />
      <ExpenseItem
        title={expensesData[1].title}
        price={expensesData[1].price}
        date={expensesData[1].date}
      />
      <ExpenseItem
        title={expensesData[2].title}
        price={expensesData[2].price}
        date={expensesData[2].date}
      />
      <ExpenseItem
        title={expensesData[3].title}
        price={expensesData[3].price}
        date={expensesData[3].date}
      />
    
    </div>
  );
}

export default App;

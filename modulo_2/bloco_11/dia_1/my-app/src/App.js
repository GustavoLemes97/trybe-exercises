const arrayDoAtoa = ['Jogar', 'Comer', 'Dormir', 'Assistir Netflix'];
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    arrayDoAtoa.map(element => Task(element))
  );
}

export default App;

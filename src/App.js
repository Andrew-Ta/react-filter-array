import logo from './logo.svg';
import './App.css';

function App() {

  let ListA = [
    {
        id: 1,
          name: 'John'
      },{
        id: 2,
          name: 'Bob'
      },{
        id: 3,
          name: 'Tom'
      },{
        id: 3,
          name: 'Fred'
      }
  ]
  let ListB = [
    {
        id: 3,
          name: 'Tom'
      }
  ]
  // ADD ListA ITEMS(itemA) TO ListB If ListB DOESN'T ALREADY HAVE THOSE ITEMS
  let Users = ListA.filter((itemA)=> {
    return !ListB.find((itemB)=> {
      return itemA.id === itemB.id && itemA.name === itemB.name;
    })
  })
  console.log("List A",ListA);
  console.log("List B",ListB);

  console.log("Users",Users);
  let ListC = ListB.concat(...Users);
  console.log("List C", ListC);

  return (
    <div className="App">
      <h3>Add objects to an array if it doesn't already exist</h3>
    </div>
  );
}

export default App;

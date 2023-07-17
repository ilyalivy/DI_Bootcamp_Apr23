import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
};

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

function App() {
    return (
        <div className="App">
            <p>Hello World!</p>
            {myelement}
            {`React is ${sum} times better with JSX`}

            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>

            <UserFavoriteAnimals animals={user.favAnimals} />

            <Exercise />
        </div>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';
import Languages from './components/Languages';

const carinfo = { name: 'Ford', model: 'Mustang' };

function App() {
    return (
        <div className="App">
            <Car model={carinfo.model} />
            <Events/>
            <Phone/>

            <Languages/>

            
        </div>
    );
}

export default App;

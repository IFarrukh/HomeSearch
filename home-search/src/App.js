import './App.css';
import Navbar from './components/Navbar';
import HomeList from './components/HomeList';
import SearchForm from './components/SearchForm';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />
				<SearchForm />
				<HomeList />
			</header>
		</div>
	);
}

export default App;

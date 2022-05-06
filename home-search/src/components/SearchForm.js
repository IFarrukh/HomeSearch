import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { useGlobalContext } from '../context';

function SearchForm() {
	const { setSearchTerms } = useGlobalContext();
	const searchValue = React.useRef('');

	React.useEffect(() => {
		searchValue.current.focus();
	}, []);

	const searchHome = () => {
		setSearchTerms(searchValue.current.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<section className='section search'>
			<form className='search-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='name'>search your dream home</label>
					<span style={{ display: 'flex' }}>
						<input
							type='text'
							name='name'
							id='name'
							ref={searchValue}
							onChange={searchHome}
						/>
						<FaSearch
							style={{
								width: '30px',
								height: '30px',
								margin: '3px 0 0 10px',
								color: '#059aed',
							}}
						/>
					</span>
				</div>
			</form>
		</section>
	);
}
export default SearchForm;

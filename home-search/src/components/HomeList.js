import React from 'react';
import Home from './Home';
import Loading from './Loading';
import { useGlobalContext } from '../context';

function HomeList() {
	const { homes, loading } = useGlobalContext();
	if (loading) {
		return <Loading />;
	}

	if (homes.length < 1) {
		return <h2 className='section-title'>No homes matched</h2>;
	}

	return (
		<section className='section'>
			<h2 className='section-title'>homes</h2>
			<div className='homes-center'>
				{homes.map((item) => {
					return <Home key={item.address} {...item} />;
				})}
			</div>
		</section>
	);
}

export default HomeList;

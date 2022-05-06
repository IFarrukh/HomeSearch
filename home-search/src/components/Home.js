import React from 'react';
import image from '../images/home.jpeg';

const Home = ({ address, city, url }) => {
	return (
		<article className='home'>
			<div className='img-container'></div>
			<div className='home-footer'>
				<img src={image} alt='home' />
				<h3>{address}</h3>
				<h4>{city}</h4>
				<p>
					For more information click <a href={url}>Here</a>
				</p>
			</div>
		</article>
	);
};

export default Home;

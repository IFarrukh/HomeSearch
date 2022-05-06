import React, { useState } from 'react';
import { FaBars, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../images/logo.png';

function Navbar() {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' className='logo' />
					<button
						className='nav-toggle'
						onClick={() => setShowLinks(!showLinks)}>
						<FaBars />
					</button>
				</div>
				<div
					className={`${
						showLinks ? 'links-container show-container' : 'links-container'
					}`}>
					<ul className='links'>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
						<li>
							<a href='#'>Product</a>
						</li>
					</ul>
				</div>
				<ul className='social-icons'>
					<li>
						<a href='#'>
							<FaTwitter />
						</a>
					</li>
					<li>
						<a href='#'>
							<FaFacebook />
						</a>
					</li>
					<li>
						<a href='#'>
							<FaLinkedin />
						</a>
					</li>
				</ul>
			</div>
			<div></div>
		</nav>
	);
}

export default Navbar;

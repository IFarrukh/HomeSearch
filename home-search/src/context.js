import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'http://localhost:4000/search/';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerms] = useState('');
	const [homes, setHomes] = useState([]);

	const fetchHomes = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			const { homes } = data;
			if (homes) {
				const newHomes = homes.map((item) => {
					const { ADDRESS, CITY, URL } = item;
					return {
						address: ADDRESS,
						city: CITY,
						url: URL,
					};
				});
				setHomes(newHomes);
			} else {
				setHomes([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [searchTerm]);
	useEffect(() => {
		fetchHomes();
	}, [searchTerm, fetchHomes]);

	return (
		<AppContext.Provider
			value={{
				loading,
				homes,
				setSearchTerms,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };

import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './page/AlbumPage';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <HomePage/>
	},
	{
		path: '/artist/:id',
		exact: true,
		main: ({macth}) => <ArtistPage macth={macth}/>
	},
	{
		path: '/album/:id',
		exact: true,
		main: ({macth}) => <AlbumPage macth={macth}/>
	},
	{
		path: '',
		exact: true,
		main: () => <NotFoundPage />
	}
]
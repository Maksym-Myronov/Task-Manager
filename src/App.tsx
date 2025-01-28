import { Login } from 'pages/Authorization/Login';
import { Registrasion } from 'pages/Authorization/Registrasion';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Route as RouteEnum } from 'routes/route.enum.ts';

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path={RouteEnum.General} element={<Login />} />
			<Route path={RouteEnum.Registration} element={<Registrasion />} />
		</Routes>
	);
};

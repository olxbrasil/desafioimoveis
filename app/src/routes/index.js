//	@flow
import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Layout from '../layouts/Layout';
import Home from '../views/Home';


export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
	</Route>
);

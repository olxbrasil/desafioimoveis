/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import RentOrBuy from './RentOrBuy';

export default {

  path: '/',

  async action() {

    const resp = await fetch('/api/v1/regions');
    const data = await resp.json();

    return {
      title: 'desai',
      component: <Layout><RentOrBuy data={data} /></Layout>,
    }
  },

};

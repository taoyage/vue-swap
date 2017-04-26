'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as mutations from './mutations';
import * as action from './action';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    action
});

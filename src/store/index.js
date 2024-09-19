import { createStore } from "vuex";
import * as actions from "../providers/actions.js";
import * as mutations from "../providers/mutations.js";
import state from "../providers/state.js";

const store = createStore({
    state,
    actions,
    mutations,
});

export default store;
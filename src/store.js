import Vuex from "Vuex";
import state from "./stores/state.js";
import mutation from "./stores/mutation.js";

export default new Vuex.Store({
    strict: true,
    state,
    mutation,
})

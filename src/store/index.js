import Vue from 'vue'
import Vuex from 'vuex'
import lab_list_store from "./lab_list_store";
import lab_store from "./lab_store";
import student_list_store from "./student_list_store";
import index_store from "./index_store";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 1,
    },
    modules: {
        index_store: index_store,
        lab_list_store: lab_list_store,
        lab_store: lab_store,
        student_list_store: student_list_store
    }
})

export default store

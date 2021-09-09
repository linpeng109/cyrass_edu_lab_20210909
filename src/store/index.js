import Vue from 'vue'
import Vuex from 'vuex'
import lab_list_store from "./lab_list_store";
import lab_store from "./lab_store";
import student_list_store from "@/store/student_list_store";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 1,
    },
    modules: {
        lab_list_store: lab_list_store,
        lab_store: lab_store,
        student_list_store: student_list_store
    },
    getters:{
        get_student_num:()=>{
            return this.modules.student_list_store.clazz.students.length
        }
    }
})

export default store

import Lab_list from "../components/Lab_list";
import Lab from "../components/Lab";
import Student_select from "../components/Student_select";
import Student_list from "../components/Student_list"

export default {
    state: {
        left_view: Lab_list,
        right_view: Student_list,
        center_view: Lab

    },
    mutations: {
        lab_distribute(state) {
            state.right_view = Student_select
        }
    }
}
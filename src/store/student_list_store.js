import Mock from 'mockjs'

export default {
    state: {
        clazz: {
            clazz_num: Mock.mock({"clazz_num|1-100": 100}).clazz_num,
            students: Mock.mock({"students|1-100":
                    [{
                        student_name: Mock.mock('@cname'),
                        host_name: Mock.mock({"host_name|1-100": 100}).host_name,
                        lab_list: []
                    }, {
                        student_name: Mock.mock('@cname'),
                        host_name: Mock.mock({"host_name|1-100": 100}).host_name,
                        lab_list: []
                    }, {
                        student_name: Mock.mock('@cname'),
                        host_name: Mock.mock({"host_name|1-100": 100}).host_name,
                        lab_list: []
                    }, {
                        student_name: Mock.mock('@cname'),
                        host_name: Mock.mock({"host_name|1-100": 100}).host_name,
                        lab_list: []
                    }, {
                        student_name: Mock.mock('@cname'),
                        host_name: Mock.mock({"host_name|1-100": 100}).host_name,
                        lab_list: []
                    }]
            }).students,
        }
    },
    getters: {
        get_student_num: (state) => {
            return state.clazz.students.length
        }
    }
}
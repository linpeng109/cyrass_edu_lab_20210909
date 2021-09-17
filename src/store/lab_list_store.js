import Student_select from "../components/Student_select"

export default {
    state: {
        views: {
            Student_select: Student_select
        },
        lab_list:
            [
                {title: 'Linux命令行的进入', uptime: 30, difficulty: 1, mode: 'single', status: '0', bg: ''},
                {title: 'Linux命令行的执行', uptime: 40, difficulty: 2, mode: 'single', status: '0'},
                {title: 'Linux服务的启动与停止', uptime: 45, difficulty: 4, mode: 'single', status: '0'}
            ]
    },
    mutations: {
    }
}


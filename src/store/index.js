import { createStore } from 'vuex'

export default createStore({
    state: {
        workers: [{
                id: 1,
                firstName: "John",
                lastName: "Smith",
                department: "IT",
                salary: 3000
            },
            {
                id: 2,
                firstName: "Jane",
                lastName: "Doe",
                department: "IT",
                salary: 3000.5
            },
            {
                id: 3,
                firstName: "Bob",
                lastName: "Colman",
                department: "Sales",
                salary: 9000
            },
            {
                id: 4,
                firstName: "Michael",
                lastName: "Smith",
                department: "Sales",
                salary: 4000
            },
            {
                id: 5,
                firstName: "Adam",
                lastName: "Murphy",
                department: "Administration",
                salary: 2000
            },
        ],
        salarySummary: 21000.5,
    },
    getters: {},
    mutations: {
        addWorker(state, [id, firstName, lastName, department, salary]) {
            state.workers.push({
                id,
                firstName,
                lastName,
                department,
                salary
            })

        },
        addSalary(state, { picked, search }) {
            let workers = state.workers.filter((worker) => {
                if (picked == "firstName") {
                    return worker.firstName.toLowerCase().includes(search.toLowerCase())
                } else if (picked == "lastName") {
                    return worker.lastName.toLowerCase().includes(search.toLowerCase())
                } else if (picked == "department") {
                    return worker.department.toLowerCase().includes(search.toLowerCase())
                }
            })
            let salarySummary = state.salarySummary
            salarySummary = 0
            for (let i = 0; i < workers.length; i++) {
                salarySummary += workers[i].salary
            }
            state.salarySummary = salarySummary
        }
    },
    actions: {},
    modules: {}
})
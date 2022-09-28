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
            {
                id: 6,
                firstName: "Jack",
                lastName: "Kowalsky",
                department: "Administration",
                salary: 6000
            },
        ],
        salarySummary: 0,
    },
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
        removeWorker(state, id) {
            let index = state.workers.findIndex(worker => worker.id == id)
            state.workers.splice(index, 1)
        },
        resetSalary(state) {
            state.salarySummary = 0
        },
        addSalary(state, { picked, search }) {
            let salarySummary = state.salarySummary
            salarySummary = 0
            let workers = state.workers.filter((worker) => {
                if (picked == "firstName") {
                    return worker.firstName.toLowerCase().includes(search.toLowerCase())
                } else if (picked == "lastName") {
                    return worker.lastName.toLowerCase().includes(search.toLowerCase())
                } else if (picked == "department") {
                    return worker.department.toLowerCase().includes(search.toLowerCase())
                } else {
                    console.log('działa salary')
                    if (search == '1') {
                        return worker.salary <= 3000
                    } else if (search == '2') {
                        return worker.salary > 3000 && worker.salary <= 6000
                    } else if (search == '3') {
                        return worker.salary > 6000
                    }
                }
            })
            for (let i = 0; i < workers.length; i++) {
                salarySummary += workers[i].salary
            }
            state.salarySummary = salarySummary
        },

    },
})
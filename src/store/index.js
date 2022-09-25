import { createStore } from 'vuex'

export default createStore({
    state: {
        workers: [{
                id: 1,
                name: "John",
                surname: "Smith",
                departament: "IT",
                salary: 3000
            },
            {
                id: 2,
                name: "Jane",
                surname: "Doe",
                departament: "IT",
                salary: 3000.5
            },
            {
                id: 3,
                name: "Bob",
                surname: "Colman",
                departament: "Sales",
                salary: 9000
            },
            {
                id: 4,
                name: "Michael",
                surname: "Smith",
                departament: "Sales",
                salary: 4000
            },
            {
                id: 5,
                name: "Adam",
                surname: "Murphy",
                departament: "Administration",
                salary: 2000
            },
        ],
        salarySummary: 21000.5,
    },
    getters: {},
    mutations: {
        addWorker(state, [name, surname, departament, salary]) {
            state.workers.push({
                name,
                surname,
                departament,
                salary
            })

        },
        addSalary(state) {
            let workers = state.workers
            let salarySummary = state.salarySummary
            salarySummary = 0
            for (let i = 0; i < workers.length; i++) {
                salarySummary += workers[i].salary
            }
            state.salarySummary = salarySummary
            console.log(workers.length)
        }
    },
    actions: {},
    modules: {}
})
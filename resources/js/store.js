export default {
    state() {
        return {
            lastSearch: {
                from: null,
                to: null,
            }
        }
    },
    mutations: {
        setLastSearch(state, payload) {
            state.lastSearch = payload;
        }
    }
}
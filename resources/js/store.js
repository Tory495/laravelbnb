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
    },
    actions: {
        setLastSearch(context, payload) {
            context.commit("setLastSearch", payload);
            localStorage.setItem("lastSearch", JSON.stringify(payload));
        },
        loadLastSearch(context) {
            const lastSearch = localStorage.getItem("lastSearch");
            if (lastSearch !== null) {
                context.commit("setLastSearch", JSON.parse(lastSearch));
            }
        }
    }
}
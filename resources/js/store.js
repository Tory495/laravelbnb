export default {
    state() {
        return {
            lastSearch: {
                from: null,
                to: null,
            },
            basket: {
                items: []
            }
        }
    },
    mutations: {
        setLastSearch(state, payload) {
            state.lastSearch = payload;
        },
        addToBasket(state, payload) {
            state.basket.items.push(payload);
        },
        removeFromBasket(state, payload) {
            state.basket.items = state.basket.items.filter((item) => item.bookable.id !== payload);
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
    },
    getters: {
        itemsInBasket: (state) => state.basket.items.length,
        isAlreadyInBasket: (state) => (id) => state.basket.items.reduce(
            (result, item) => result || item.bookable.id === id,
            false
        )

    }
}
const auth = {
    namespaced: true,
    state: () => ({
        user: {
            email: '',
            isLoggedIn: false,
        }
    }),

    mutations: {

        setIsLoggedIn(state, payload) {

            state.user.isLoggedIn = payload.isLoggedIn;

            state.user.email = state.user.isLoggedIn ? payload.email : '';

            if (state.user.isLoggedIn) {

                const parsed = JSON.stringify(state.user);

                localStorage.setItem('user', parsed);

            } else {

                if (localStorage.getItem('user')) {

                    try {

                        localStorage.removeItem('user');
                        localStorage.removeItem('charactersLiked');

                    } catch (error) {

                        localStorage.removeItem('user');
                        localStorage.removeItem('charactersLiked');

                    }
                }
            }
        }

    },

    actions: {
        async setIsLoggedIn(state, payload) {
            state.commit("setIsLoggedIn", payload);
        }
    },

    getters: {
        getUser: state => {
            let user = localStorage.getItem('user');
            if (user) {
                state.user = JSON.parse(user);
            }

            return state.user;
        }
    }
}

export default auth;
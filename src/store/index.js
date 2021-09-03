import { createStore } from 'vuex'
import user from '../store/modules/user'

const store = createStore({
    state: {
        isMobile: null,
    },
    mutations: {
        checkMobile(state) {
            if (window.screen.width <= 768) {
                state.isMobile = true
            } else {
                state.isMobile = false
            }
        },
    },
})

export default store

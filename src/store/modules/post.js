export default {
    state: {
        // Ваши состояния (данные)
        post: []
    },
    mutations: {
        // Ваши мутации (изменения состояния)
        updatePosts(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        // Ваши действия (асинхронные операции)
        async fetchPosts(ctx, limit=3) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit
            )
            const posts = await res.json()
            ctx.commit('updatePosts', posts)
        }
    },
    getters: {
        // Ваши геттеры (вычисляемые свойства)
        allPosts(state) {
            return state.posts
        }
    },
}
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)

app.mount('#app')

// 创建根存储库并将其传递给应用程序
app.use(createPinia())

import Vue2HelloWorld from './components/Vue2HelloWorld.vue'

const install = (app) => app.component(Vue2HelloWorld.name, Vue2HelloWorld)

export default { install }

export { Vue2HelloWorld }
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = () => import('./components/Home.vue')
const AboutPage = () => import('./components/About.vue')
const ContactPage = () => import('./components/Contact.vue')
const EngineersPage = () => import('./components/Engineers.vue')
const PrivacyPage = () => import('./components/Privacy.vue')
const StoryPage = () => import('./components/Story.vue')

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/engineers', component: EngineersPage },
  { path: '/privacy', component: PrivacyPage },
  { path: '/story', component: StoryPage }
]

export default new VueRouter({mode: 'history', routes})
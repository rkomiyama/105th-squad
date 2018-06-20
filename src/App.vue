<template>
  <div id="app">
    <v-app id="105thSquad" dark>
      <v-content>
        <NavBar />
        <v-container fluid>
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
const NavBar = () => import('./components/NavBar.vue')

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 150ms ease-out forwards;
  transition: opacity 150ms;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-active {
  animation: slide-out 150ms ease-out forwards;
  transition: opacity 150ms;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
}
</style>

<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.path">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ link.label }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="navBar">
      <v-toolbar-side-icon v-if="$mq !== 'desktop'" @click.stop="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title>105th Squad</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        {
          path: '/',
          icon: 'home',
          label: 'Home'
        },
        {
          path: '/about',
          icon: 'info',
          label: 'About Us'
        },
        {
          path: '/story',
          icon: 'star',
          label: 'Our Story'
        },
        {
          path: '/engineers',
          icon: 'people',
          label: 'Our Engineers'
        },
        {
          path: '/contact',
          icon: 'contact_mail',
          label: 'Contact'
        },
        {
          path: '/privacy',
          icon: 'contact_mail',
          label: 'Privacy Policy'
        }
      ]
    }
  }
}
</script>

<style scoped>
.navBar {
  position: relative;
  z-index: 1;
}
</style>

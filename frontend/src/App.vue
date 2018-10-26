<template>
  <v-app>
  <Toolbar></Toolbar>
    <v-content style="padding-top:42px">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '@/components/global/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar
  },
  }

</script>

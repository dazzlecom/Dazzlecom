<template>
  <v-app>
  <Toolbar></Toolbar>
    <v-content style="padding-top:42px">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Toolbar from '@/components/global/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar
  },
   
    data: () => ({
      dialog: false,
      drawer: true,
      team: 'Philadelphia Eagles',
      items: [
        { icon: 'contacts', text: 'Team', 'route': 'Team' },
        { icon: 'event', text: 'Schedule', 'route': 'Schedule' },
        { icon: 'account_balance', text: 'Stadium', 'route': 'Stadium' },
        { icon: 'account_box', text: 'Roster', 'route': 'Roster' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'add', text: 'Create label' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' }
          ]
        },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Go to the old version' }
      ]
    }),
    props: {
      source: String
    }
  }

</script>

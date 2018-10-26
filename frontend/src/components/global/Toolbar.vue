<template>
<div>
   <v-navigation-drawer
      fixed
     v-if="sandwitch"
      app
      v-model="drawer"
    >
    
      <v-list dense>
       
          <v-expansion-panel>
       <h3>Catagories</h3>
    <v-expansion-panel-content
      v-for="(item,index) in items"
      :key="index"
    >
      <div slot="header">{{item.text}}</div>
      <v-card>
        <v-card-text>
          <v-list dense>
            <v-list-tile v-for="(item,index) in item.children" :key="index">
               <v-list-tile-content>
                 {{item.text}}
               </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>





        <!-- <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.index" no-action>
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link v-if="item.route" :to="{ name: item.route }">{{ item.text }}</router-link>
                <span v-else>{{ item.text }}</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template> -->
      </v-list>
    </v-navigation-drawer>






    <v-toolbar class="navbar" app flat color="rgb(237, 237, 236)" scroll-off-screen :scroll-threshold="300">
 
    <v-toolbar-side-icon  v-if="sandwitch" @click.stop="drawer = !drawer"
          ></v-toolbar-side-icon>
    
  <ToggleSidebar :drawer="drawer"></ToggleSidebar>
    <v-toolbar-title class="headline text-uppercase">
      <img src="@/assets/dazzlecom.png" alt="">
    </v-toolbar-title>
    
    <v-spacer v-if="!sandwitch"></v-spacer>
    <div v-if="!sandwitch">
    <v-btn flat target="_blank">
      <span class="mr-1">Home</span>
    </v-btn>

      <v-menu transition="slide-x-transition" 
      >
        <v-btn flat target="_blank" slot="activator">
      <span class="mr-1">Tables</span>
      <v-icon>keyboard_arrow_down</v-icon>
    </v-btn>
        <v-list dense>
          <v-list-tile v-for="(table,index) in tables" :key="index" @click="">
            <v-list-tile-title>{{ table.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    <v-menu transition="slide-x-transition"  >
    <v-btn flat target="_blank" slot="activator">
      <span class="mr-1">Seating</span>
      <v-icon>keyboard_arrow_down</v-icon>
    </v-btn>
<v-list>

 <v-menu offset-x   transition="slide-x-transition" open-on-hover>
            <v-list-tile slot="activator" >
          <v-list-tile-title>Single Seat</v-list-tile-title>
              <v-list-tile-action class="justify-end">
                <v-icon>play_arrow</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list dense  >
              <v-list-tile v-for="(singleseat,index) in singleseats" :key="index" @click="">
                <v-list-tile-title>{{ singleseat.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>


        
         <v-list-tile>
          <v-list-tile-title>Multiple Seats</v-list-tile-title>
        </v-list-tile>
      </v-list>
 </v-menu>

     <v-menu transition="slide-x-transition"  >
    <v-btn flat target="_blank" slot="activator">
      <span class="mr-1">Bed</span>
      <v-icon>keyboard_arrow_down</v-icon>
    </v-btn>
<v-list>
        <v-list-tile
          v-for="(item, i) in bed"
          :key="i"
          @click=""
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
 </v-menu>

    <v-btn flat target="_blank">
      <span class="mr-1">Storage</span>
    </v-btn>
</div>
      <v-btn  icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>shopping_cart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>favorite</v-icon>
    </v-btn>
    <!-- <v-btn  >
      <div id="app">
  <br> Window Width: {{ windowWidth }} <br/>
  {{ txt }}
</div>
    </v-btn> -->
  </v-toolbar>
</div>
</template>
<script>
import ToggleSidebar from './ToggleSidebar'
  export default {
    components:{
      ToggleSidebar,
    },
   
    data: () => ({
          sandwitch:false,
          windowWidth:0,
          drawer: null,
          txt:"",
          items: [
        { icon: 'airline_seat_recline_extra',
          text: 'Chair',
         'route': 'Stadium',
         children:[
            {
              text: 'Lift chai'
            },
            {
              text: 'Bean bag'
            },
            {
              text: 'Chaise longue'
            },
            {
              text: 'Fauteuil'
            },
            {
              text: 'Ottoman'
            },
            {
              text: 'ecline'
            },
            {
              text: 'Stool'
            },
            {
              text: 'Bar Stool'
            },
            {
              text: 'Footstool or ottoman'
            },
            {
              text: 'Tuffet'
            },
            {
              text: 'Fainting couch'
            },
            {
              text: 'Rocking chair'
            },
            {
              text: 'Bar chair'
            },
         ]
        },
        { icon: 'local_hotel',
          text: 'Bed',
          'route': 'Roster',
          children:[
            {
                text: 'Bunk bed'
              },
              {
                text: 'Canopy bed'
              },
              {
                text: 'Four-poster bed'
              },
              {
                text: 'Murphy bed'
              },
              {
                text: 'Platform bed'
              },
              {
                text: 'Sleigh bed'
              },
              {
                text: 'Waterbed'
              },
              {
                text: 'Daybed'
              }
          ]
        },
        { icon: '',
         text: 'Tables',
          'route': 'Schedule',
          children:[
            {
              text: 'Lowboy'
            },
            {
              text: 'Coffee Table'
            },
            {
              text: 'Folding Table'
            },
            {
              text: 'Tv Tray Table'
            },
            {
              text: 'Wine Table'
            },
            {
              text: 'End Table'
            },
            {
              text: 'Poker Table'
            }
          ],
          singleseats: [{
              title: 'Chair'
            },
            {
              title: 'Lift chai'
            },
            {
              title: 'Bean bag'
            },
            {
              title: 'Chaise longue'
            },
            {
              title: 'Fauteuil'
            },
            {
              title: 'Ottoman'
            },
            {
              title: 'ecline'
            },
            {
              title: 'Stool'
            },
            {
              title: 'Bar Stool'
            },
            {
              title: 'Footstool or ottoman'
            },
            {
              title: 'Tuffet'
            },
            {
              title: 'Fainting couch'
            },
            {
              title: 'Rocking chair'
            },
            {
              title: 'Bar chair'
            },
          ]
         },
 
      ],tables: [{
              title: 'Lowboy'
            },
            {
              title: 'Coffee Table'
            },
            {
              title: 'Folding Table'
            },
            {
              title: 'Tv Tray Table'
            },
            {
              title: 'Wine Table'
            },
            {
              title: 'End Table'
            },
            {
              title: 'Poker Table'
            }
          ],
          singleseats: [{
              title: 'Chair'
            },
            {
              title: 'Lift chai'
            },
            {
              title: 'Bean bag'
            },
            {
              title: 'Chaise longue'
            },
            {
              title: 'Fauteuil'
            },
            {
              title: 'Ottoman'
            },
            {
              title: 'ecline'
            },
            {
              title: 'Stool'
            },
            {
              title: 'Bar Stool'
            },
            {
              title: 'Footstool or ottoman'
            },
            {
              title: 'Tuffet'
            },
            {
              title: 'Fainting couch'
            },
            {
              title: 'Rocking chair'
            },
            {
              title: 'Bar chair'
            },
          ],
          bed: [
             {
                title: 'Bunk bed'
              },
              {
                title: 'Canopy bed'
              },
              {
                title: 'Four-poster bed'
              },
              {
                title: 'Murphy bed'
              },
              {
                title: 'Platform bed'
              },
              {
                title: 'Sleigh bed'
              },
              {
                title: 'Waterbed'
              },
              {
                title: 'Daybed'
              }, {
                title: 'Futon'
              }, {
                title: 'Hammock'
              }, {
                title: 'Headboard'
              }, {
                title: 'Infant bed (crib, cradle)'
              }, {
                title: 'Mattress'
              }, {
                title: 'Sofa bed'
              }
      ]
    }),
     watch: {
    windowWidth(newWidth, oldWidth) {
     this.txt = `it changed to ${newWidth} from ${oldWidth}`;
     if(newWidth<1000){
          this.sandwitch=true
        }
        if(newWidth>1000){
          this.sandwitch=false
        }
    return  console.log(this.txt);
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth= window.innerWidth
        
      });
    })
  },
  }
</script>
<style>
.navbar {
   background-color: transparent;
   background: transparent;
   border-color: transparent;
}

.navbar li { color: #000 } 
</style>

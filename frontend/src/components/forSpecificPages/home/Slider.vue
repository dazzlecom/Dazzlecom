<template>
<div class="sliderCarrier">
  <!-- <img src="" alt=""> -->
  
 <carousel  :autoplay="false" :per-page="1" loop >
 <slide  class ="carouselimage" data-name="MySlideName" data-index="0">
       <span class="CarouselImageText">
     <p class="thinText">A Brand </p>
      <p class="thickText">New Arrivals</p>
      <p class="detailsText">Beautiful wallside small size kitchen table is available now</p>
      <p class="priceText">Price: $100</p>
      <v-btn color="black" style="color:white">Shopping Now</v-btn>
      </span>

   <img src="../../../assets/frontSliderimage1.jpg" alt=""  />

  </slide>
  <!-- <slide  class ="carouselimage" data-name="MySlideName" data-index="0">
       <span class="CarouselImageText">
      <p class="thinText">A Brand</p>
      <p class="thickText">New Arrivals is buying on 70% discount</p>
      <v-btn>Details</v-btn>
      </span>

   <img src="../../assets/frontSliderimage2.jpg" alt=""  />

  </slide> -->
 <slide  class ="carouselimage" data-name="MySlideName" data-index="0">
       <span class="CarouselImageText">
     <p class="thinText">A Brand </p>
      <p class="thickText">New Arrivals</p>
      <p class="detailsText">Beautiful archistructured comfort chair for your living room</p>
      <p class="priceText">Price: $300</p>
      <v-btn color="black" style="color:white">Shopping Now</v-btn>
      </span>

   <img src="../../../assets/frontSliderimage3.jpg" alt=""  />

  </slide>
</carousel>
</div>
</template>
 
<script>
import { Carousel, Slide } from 'vue-carousel';
import imgList from '@/jsonData/frontSliderImage.json'
export default {
  components: {
    Carousel,
    Slide
  },
  data(){
    return {
      imgList :imgList
    }
  },
  
  methods: {
    go(data){
      console.log(data)
    },
     getImgUrl(pic) {
   return require(pic)
  }
  }
}
</script>
<style scoped>
.v-btn{
  margin: 0px;
}
.priceText{
   font-size: 1.5em;
 font-weight:normal;
}
.thinText{
 font-size: 5vmin;
 /* font-family: 'Open Sans'; */
 font-weight:lighter;
 
}
 /* Cochin, Georgia, Times, 'Times New Roman', serif */
/* BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif */
.thickText{
  font-size: 5vmin;
}
.detailsText{
 font-size: 1.2em;
 font-weight: lighter;
}
img {
  height: -webkit-fill-available;
  width:100%;
}
.carouselimage{
  width: 100%;
  position: relative;
  height: 100%;
}
.CarouselImageText{
  
  position: absolute;
  z-index: 2;
  top: 20%;
  left: 10%;
}
.sliderCarrier{
  height: 100%;
  weight:100%;
}
 
</style>

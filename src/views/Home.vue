<template>
  <div class="home">
    
  <!-- Image Carousel -->
    <div>
      <b-carousel
        id="home-carousel"
        style="text-shadow: 0px 0px 2px #000"
        no-animation
        indicators
        controls
        img-width="1024"
        img-height="360"
        class = "mt-4"
      >
        <div v-for="slide in carouselPosts" :key="slide.id">
          <b-carousel-slide
            :caption="slide.acf.caption_title"
            :text-html="slide.acf.caption_text"
            :img-src="slide.acf.slide_image"
            content-visible-up="md"
          ></b-carousel-slide>
          
        </div>  
      </b-carousel>
    </div>

    <!--Mission Statement -->
    <b-container class="page-content"> 
      <div class="mission">
        <h1 class="text-center">{{this.missionTitle}}</h1>
        <span class="text-center" v-html="this.missionDescription"></span>
     </div>
    

    <!-- Question Cards -->
    <div v-if="questionsLoaded">
    <b-card-group deck  >
        <b-card v-if="this.questionPosts[0]"
          title-tag="h2"
          :title="this.questionPosts[0].title.rendered"
          :img-src="this.questionPosts[0].acf.image1"
          :img-alt="this.questionPosts[0].acf.image1_alt_text"
          img-top
          style="max-width: 35rem;"
          class="mb-2 text-center"
        >
          <b-card-text>
            <span  v-html="this.questionPosts[1].content.rendered"></span>
          </b-card-text>
         
          <b-button  variant="success"><router-link to="service-dogs">Learn about service dogs</router-link></b-button>
        </b-card>      
      <b-card v-if="this.questionPosts[1]"
          title-tag="h2"
          :title="this.questionPosts[1].title.rendered"
          :img-src="this.questionPosts[1].acf.image1"
          :img-alt="this.questionPosts[1].acf.image1_alt_text"
          img-top
          style="max-width: 35rem;"
          class="mb-2 text-center"
        >
          <b-card-text>
            <span  v-html="this.questionPosts[1].content.rendered"></span>
          </b-card-text>
         
          <b-button variant="success"><router-link to="training">Learn about training programs</router-link></b-button>
        </b-card>      
        
    </b-card-group>
</div>
  <div v-else class="text-center">
     <b-spinner label="Spinning" ></b-spinner>
  </div> 
    </b-container>


  </div>
</template>

<script>

import axios from 'axios';
import Wordpress from '@/common/wordpress.js';
import CommonMethods from '@/common/csdFunctions.js'

export default {
  name: "HomePage",


  data () {
    return {
      //For API calls
      results: null,
      wordpressHomeUrl: Wordpress.wordpressUrl + Wordpress.wordpressCategoryFilter + Wordpress.homeId,
    
      // For Wordpress data
      posts: [],
      //for Mission Statement
      missionSlug: "our-mission",
      missionPost: [],
      missionTitle: "Home",
      missionDescription: "",
      
      //for Question cards
      questionCategory: 13,
      questionPosts: [],
      questionsLoaded: false,

      //Get Carousel Slides
      wordpressCarouselUrl:  Wordpress.wordpressUrl + Wordpress.wordpressCategoryFilter + Wordpress.homePageCarouselId,
      carouselPosts: [],
    };
  },

  created: function() {
    this.questionsLoaded = false;
    //get mission statement
    axios
    .get(this.wordpressHomeUrl, { 
    })
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }

      this.missionPost = CommonMethods.getPostBySlug(this.results, this.missionSlug)
      //this.missionPost = this.getPost(this.results, this.missionSlug);
      this.missionTitle = this.missionPost.title.rendered;
      this.missionDescription = this.$sanitize(this.missionPost.content.rendered);
  
      this.questionPosts = CommonMethods.getPostsByCategory(this.results, this.questionCategory)
      this.questionsLoaded = true;
      })

    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });


//populate Carousel Slides
      axios
    .get(this.wordpressCarouselUrl, { 
    })
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.carouselPosts.push(this.results[post]);
      }
     })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
  }
}

</script>

<style scoped>
.circle {
  border-radius:50%;
}

.circle-img img {
  border-radius:50%;
}


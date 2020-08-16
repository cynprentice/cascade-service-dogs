<template>
  <div class="home">
        <!-- Jumbotron example
      <b-jumbotron fluid container-fluid bg-variant="white" text-variant="dark">
        <template v-slot:header>Cascade Service Dogs</template>
        <template v-slot:lead>{{missionTitle}}</template>
        <hr class="my-4"> 
        <span v-html="this.missionDescription"></span>
      </b-jumbotron>   
   -->

  <!-- Image Carousel -->
    <div>
      <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        no-animation
        indicators
        controls
        img-width="1024"
        img-height="360"
      >
        <div v-for="slide in carouselPosts" :key="slide.id">
          <b-carousel-slide
            :caption="slide.acf.caption_title"
            :text-html="slide.acf.caption_text"
            :img-src="slide.acf.slide_image"
          ></b-carousel-slide>
          
        </div>  
      </b-carousel>
    </div>
    
    <hr />

    <!--Mission Statement -->
    <b-container class="page-content"> 
      <div class="mission">
        <h1 class="center">Cascade Service Dogs</h1>
        <h2 >{{this.missionTitle}}</h2>
        <span class="center" v-html="this.missionDescription"></span>
     </div>
    <hr/>

    <!-- Question Cards -->
    
    <b-card-group deck v-if="questionsLoaded">
      <div v-for="question in questionPosts" :key="question.id">
        <b-card
          :title="question.title.rendered"
          :img-src="question.acf.image1"
          :img-alt="question.acf.image1_alt_text"
          img-top
          style="max-width: 25rem;"
          class="mb-2 text-center"
        >
          <b-card-text>
            <span  v-html="question.content.rendered"></span>
          </b-card-text>
         
          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card>      
      </div>
    </b-card-group>

  <div v-else class="text-center">
     <b-spinner label="Spinning" ></b-spinner>
  </div> 
  <!-- Testimonials -->
    <hr/>
    <h2> Testimonials </h2>
    
    <b-card-group deck>
     <b-card
      title="Derek S"
      sub-title="US Army veteran"
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/man.png"
      img-alt="Image"
      img-bottom
      class="circle-img"
      >
        <b-card-text>
          "Fluffy has changed my life completely and helped me live independantly. Thank Cascade Service Dogs!"
        </b-card-text>
      </b-card>
     <b-card
      title="Mary"
      sub-title="Bailey's mom"
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/woman.png"
      img-alt="Image"
      img-bottom
      
      >
        <b-card-text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        </b-card-text>
      </b-card>
    
 <b-card
      title="Alfred"
      sub-title="Mobility Challenges"
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/man.png"
      img-alt="Image"
      img-bottom
      >
        <b-card-text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        </b-card-text>
      </b-card>


      <b-card
      title="Shauna"
      sub-title="Trained her own dog"
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/woman.png"
      img-alt="Image"
      img-bottom
      >
        <b-card-text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        </b-card-text>
      </b-card>

  </b-card-group>
  </b-container>


  </div>
</template>

<script>

import axios from 'axios';
import { wordpressURL } from '@/common/URL.js';
import CommonMethods from '@/common/csdFunctions.js'

export default {
  name: "HomePage",


  data () {
    return {
      //For API calls
      results: null,
      //wordpressURL: "https://cascadeservicedogs.cyprweb.com/",
      wordpressHomeURL: wordpressURL + "/wp-json/wp/v2/posts?categories=6",
    
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
      wordpressCarouselURL:  wordpressURL + "/wp-json/wp/v2/posts?categories=12",
      carouselPosts: [],
    };
  },

  created: function() {
    this.questionsLoaded = false;
    //get mission statement
    axios
    .get(this.wordpressHomeURL, { 
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
    .get(this.wordpressCarouselURL, { 
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


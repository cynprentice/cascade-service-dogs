<template>
   <div class="programs">
      <div class="mb-4 full-back-img"  :style="{backgroundImage:`url(${this.programsOverviewImgUrl})`}">
      </div>

<!-- show loading spinner while retrieved page content from Wordpress -->
   <div v-if="contentLoading" class="text-center"><b-spinner label="Spinning" ></b-spinner></div>

   <div v-else>
      <b-container class="page-content">
         <!-- CSD Program Overview section -->
         <b-card>
            <b-card-title title-tag="h1" class="text-center mb-5">{{this.programsOverviewTitle}}</b-card-title>
            <b-card-text class="mt-5">
              <span v-html="this.programsOverviewDescription"></span>
            </b-card-text>
         </b-card>

         <!--  Fully Trained Section -->
         <b-card no-body>
            <b-row>
               <b-col md="8">
                  <b-card-body title-tag="h2" :title="this.fullyTrainedTitle">
                     <b-card-text  >
                        <span v-html="this.fullyTrainedDescription"></span>
                        <b-button variant="success" class="mt-4"><router-link to="applications">Apply here</router-link></b-button>
                     </b-card-text>
                  </b-card-body>
               </b-col>
               <b-col md="4">
                  <b-card-img :src="this.fullyTrainedImgUrl1" :alt="this.fullyTrainedImg1AltTag" class="rounded-0"></b-card-img>
               </b-col>
            </b-row>
         </b-card>


         <!-- Owner Trained Section -->   
         <b-card no-body>
            <b-row >
               <b-col md="8">
               <b-card-body title-tag="h2" :title="this.ownerTrainedTitle">
                  <b-card-text >
                     <span v-html="this.ownerTrainedDescription"></span>
                     <b-button variant="success" class="mt-4"><router-link to="applications">Apply here</router-link></b-button>
                  </b-card-text>
               </b-card-body>
               </b-col>
               <b-col md="4">
                  <b-card-img :src="this.ownerTrainedImgUrl1" :alt="this.ownerTrainedImg1AltTag" class="rounded-0"></b-card-img>
               </b-col>
            </b-row>
         </b-card>
      </b-container>
   </div>
 </div>
</template>

<script>

import axios from 'axios';
import Wordpress from '@/common/wordpress.js';
import CommonMethods from '@/common/csdFunctions.js'

export default {
  name: "Training",


  data () {
    return {
      //For API calls
      results: null,
      wordpressTrainingUrl: Wordpress.wordpressUrl + Wordpress.wordpressCategoryFilter + Wordpress.trainingId,
      contentLoading: true,
      // For Wordpress data
      posts: [],
      programsOverviewSlug:"programs-overview",
      programsOverviewPost: [],
      programsOverviewTitle: "",
      programsOverviewDescription: "",
      programsOverviewImgUrl: "",
      
      fullyTrainedSlug:"fully-trained-service-dogs",
      fullyTrainedPost: [],
      fullyTrainedTitle: "",
      fullyTrainedDescription: "",
      fullyTrainedImgUrl1: "",
      fullyTrainedImg1AltTag: "",

      ownerTrainedSlug:"owner-trained-service-dog-program",
      ownerTrainedPost: [],
      ownerTrainedTitle: "",
      ownerTrainedDescription: "",
      ownerTrainedImgUrl1: "",
      ownerTrainedImg1AltTag: "",
    };
  },

  created: function() {
     this.contentLoading = true;
    axios
    .get(this.wordpressTrainingUrl, { 
      
    })
    .then(response => { 
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }

      //get content for Fully Trained Program section
      console.log ("getting Programs Overview section Content: ")
      this.programsOverviewPost = CommonMethods.getPostBySlug(this.results, this.programsOverviewSlug);
      this.programsOverviewTitle = this.programsOverviewPost.title.rendered;
      this.programsOverviewDescription = this.programsOverviewPost.content.rendered;
      this.programsOverviewImgUrl = this.programsOverviewPost.acf.image1;

 
      //get content for Fully Trained Program section
      console.log ("getting Fully Training section Content: ")
      this.fullyTrainedPost = CommonMethods.getPostBySlug(this.results, this.fullyTrainedSlug);
      this.fullyTrainedTitle = this.fullyTrainedPost.title.rendered;
      this.fullyTrainedDescription=this.fullyTrainedPost.content.rendered;
      this.fullyTrainedImgUrl1=this.fullyTrainedPost.acf.image1;
      this.fullyTrainedImgAltTag=this.fullyTrainedPost.acf.image1_alt_text;

      //get content for Owner Trained Program section
      this.ownerTrainedPost = CommonMethods.getPostBySlug(this.results, this.ownerTrainedSlug);
      this.ownerTrainedTitle = this.ownerTrainedPost.title.rendered;
      this.ownerTrainedDescription=this.ownerTrainedPost.content.rendered;
      this.ownerTrainedImgUrl1=this.ownerTrainedPost.acf.image1;
      this.ownerTrainedImgAltTag=this.ownerTrainedPost.acf.image1_alt_text;
      this.contentLoading = false;
      })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
  }

  
}
</script>

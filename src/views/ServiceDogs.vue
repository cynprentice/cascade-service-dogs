<template>
    
<div class="programs">
  
   <b-container class="page-content"> 
      <!-- Nav for Service Dog Page -->
      <div>
         <b-card title="Card Title" no-body>
            <b-card-header header-tag="nav">
               <b-nav  card-header pills>
                  <b-nav-item >
                     <router-link
                        :to="{
                              name:'service-dogs',
                              hash:'#vets'
                        }">
                        Vets
                     </router-link>
                  </b-nav-item>

                  <b-nav-item><router-link
                        :to="{
                              name:'service-dogs',
                              hash:'#autism'
                        }">
                        Autism
                     </router-link></b-nav-item>
                  <b-nav-item>
                     <router-link
                        :to="{
                              name:'service-dogs',
                              hash:'#apply-for-dog'
                        }">
                        Apply for a Dog
                     </router-link>
                  </b-nav-item>
               </b-nav>
            </b-card-header>
         </b-card>
         </div>
      
      <!--What is a Service Dog section-->
      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row >
            <b-col md="2">
               <b-card-img :src="this.serviceDogImgUrl1" alt="Image" class="rounded-0"></b-card-img>
            </b-col>        
            <b-col md="10">
               <b-card-body :title="this.serviceDogTitle"></b-card-body>
            </b-col>
            <b-col md="12">
               <b-card-body>
                  <b-card-text >
                     <span v-html="this.serviceDogDescription"></span>
                  </b-card-text>
               </b-card-body>
            </b-col>
            <!-- Second Image
               <b-col md="2">
               <b-card-img :src="this.fullyTrainedImgUrl2" alt="Image" class="rounded-0"></b-card-img>
               </b-col>
               -->
         </b-row>
      </b-card>

<!--

      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row no-gutters>
            <b-col md="12">
               <b-card-body :title="this.fullyTrainedTitle">
                  <b-card-text >
                     <span v-html="this.fullyTrainedDescription"></span>
                  </b-card-text>
               </b-card-body>
            </b-col>

         </b-row>
      </b-card>
-->

      <b-card id="vets" no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row no-gutters>
            <b-col md="4">
            <b-card-img :src="this.vetImgUrl" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
            <b-card-body :title="this.vetTitle">
               <b-card-text >
                  <span v-html="this.vetDescription"></span>

               </b-card-text>
            </b-card-body>
            </b-col>
         </b-row>
      </b-card>

      <b-card no-body id="autism" class="overflow-hidden" style="max-width: 1024px;">
         <b-row no-gutters>
            <b-col md="4">
            <b-card-img :src="this.autismImgUrl" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
            <b-card-body :title="this.autismTitle">
               <b-card-text >
                  <span v-html="this.autismDescription"></span>

               </b-card-text>
            </b-card-body>
            </b-col>
         </b-row>
      </b-card>
 
 
      <!--how to apply for a service dog -->
      <b-card id="apply-for-dog" no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row no-gutters>
            <b-col md="4">
            <b-card-img :src="this.applyForDogImgUrl" alt="Application Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
            <b-card-body :title="this.applyForDogTitle">
               <b-card-text >
                  <span v-html="this.applyForDogDescription"></span>

               </b-card-text>
            </b-card-body>
            </b-col>
         </b-row>
      </b-card>
   </b-container>
</div>
</template>

<script>

import axios from 'axios';
import Wordpress from '@/common/wordpress.js';
import CommonMethods from '@/common/csdFunctions.js'

export default {
  name: "ServiceDogs",


  data () {
    return {
      //For API calls
      results: null,
      wordpressServiceDogsURL:  Wordpress.wordpressURL + Wordpress.wordpressCategoryFilter + Wordpress.serviceDogsId,
      // For Wordpress data
      posts: [],
      serviceDogSlug:"what-is-a-service-dog",
      serviceDogPost: [],
      serviceDogTitle: "",
      serviceDogDescription: "",
      serviceDogImgUrl1: "",
      fullyTrainedSlug:"fully-trained-service-dogs",
      fullyTrainedPost: [],
      fullyTrainedTitle: "",
      fullyTrainedDescription: "",
      fullyTrainedImgUrl1: "",
      fullyTrainedImgUrl2: "",
      vetSlug: "veterans",
      vetPost: [],
      vetTitle: "Home",
      vetDescription: "",
      vetImgUrl: "",
      autismSlug: "autism",
      autismPost: [],
      autismTitle: "",
      autismDescription: "",
      autismImgUrl: "",
      applyForDogSlug: "apply-for-dog",
      applyForDogPost: [],
      applyForDogTitle: "",
      applyForDogDescription: "",
      applyForDogImgUrl: "",
    };
  },

  created: function() {
    axios
    .get(this.wordpressServiceDogsURL, {})
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }

      this.serviceDogPost = CommonMethods.getPostBySlug(this.results, this.serviceDogSlug);
      this.serviceDogTitle = this.serviceDogPost.title.rendered;
      this.serviceDogDescription=this.serviceDogPost.content.rendered;
      this.serviceDogImgUrl1=this.serviceDogPost.acf.image1;
/*
      console.log ("getting Fully Training section Content: ")
      this.fullyTrainedPost = CommonMethods.getPostBySlug(this.results, this.fullyTrainedSlug);
      this.fullyTrainedTitle = this.fullyTrainedPost.title.rendered;
      this.fullyTrainedDescription=this.fullyTrainedPost.content.rendered;
      this.fullyTrainedImgUrl1=this.fullyTrainedPost.acf.image1;
      this.fullyTrainedImgUrl2=this.fullyTrainedPost.acf.image2;
*/
      this.vetPost = CommonMethods.getPostBySlug(this.results, this.vetSlug);
      this.vetTitle = this.vetPost.title.rendered;
      this.vetDescription=this.vetPost.content.rendered;
      this.vetImgUrl=this.vetPost.acf.image1;

      this.autismPost = CommonMethods.getPostBySlug(this.results, this.autismSlug);
      this.autismTitle = this.autismPost.title.rendered;
      this.autismDescription=this.autismPost.content.rendered;
      this.autismImgUrl=this.autismPost.acf.image1;

      this.applyForDogPost = CommonMethods.getPostBySlug(this.results, this.applyForDogSlug);
      this.applyForDogTitle = this.applyForDogPost.title.rendered;
      this.applyForDogDescription=this.applyForDogPost.content.rendered;
      this.applyForDogImgUrl=this.applyForDogPost.acf.image1;
      })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
  },

  
}
</script>

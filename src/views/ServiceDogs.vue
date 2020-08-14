<template>
    
<div class="programs">
  
   <b-container class="page-content"> 
      <!-- Nav for Service Dog Page -->
      <div>
         <b-nav tabs>
            <b-nav-item active>
                <router-link
                    :to="{
                        name:'service-dogs',
                        hash:'#vets'
                    }">
                    Vets
                </router-link>
            </b-nav-item>
            <!--
            <b-nav-item active><router-link to="#" v-scroll-to="'#section-two'">
               Scroll to #section-two
            
            </b-nav-item>
            -->
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
         </div>
      <!-- Fully Trained Service Dog Cards -->
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


      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row no-gutters>
            <!--first image 
               <b-col md="2">
               <b-card-img :src="this.fullyTrainedImgUrl1" alt="Image" class="rounded-0"></b-card-img>
               </b-col>        
            -->
            <b-col md="12">
               <b-card-body :title="this.fullyTrainedTitle">
                  <b-card-text >
                     <span v-html="this.fullyTrainedDescription"></span>
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

export default {
  name: "ServiceDogs",


  data () {
    return {
      //For API calls
      results: null,
      wordpressServiceDogsURL: "https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=9",
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
    .get(this.wordpressServiceDogsURL, { 
     
    })
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }

      this.serviceDogPost = this.getPost(this.results, this.serviceDogSlug);
      this.serviceDogTitle = this.serviceDogPost.title.rendered;
      this.serviceDogDescription=this.serviceDogPost.content.rendered;
      this.serviceDogImgUrl1=this.serviceDogPost.acf.image1;

      this.fullyTrainedPost = this.getPost(this.results, this.fullyTrainedSlug);
      this.fullyTrainedTitle = this.fullyTrainedPost.title.rendered;
      this.fullyTrainedDescription=this.fullyTrainedPost.content.rendered;
      this.fullyTrainedImgUrl1=this.fullyTrainedPost.acf.image1;
      this.fullyTrainedImgUrl2=this.fullyTrainedPost.acf.image2;

      this.vetPost = this.getPost(this.results, this.vetSlug);
      this.vetTitle = this.vetPost.title.rendered;
      this.vetDescription=this.vetPost.content.rendered;
      this.vetImgUrl=this.vetPost.acf.image1;

      this.autismPost = this.getPost(this.results, this.autismSlug);
      this.autismTitle = this.autismPost.title.rendered;
      this.autismDescription=this.autismPost.content.rendered;
      this.autismImgUrl=this.autismPost.acf.image1;

      this.applyForDogPost = this.getPost(this.results, this.applyForDogSlug);
      this.applyForDogTitle = this.applyForDogPost.title.rendered;
      this.applyForDogDescription=this.applyForDogPost.content.rendered;
      this.applyForDogImgUrl=this.applyForDogPost.acf.image1;
      })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
  },

  methods: {

    //given an array of Wordpress posts and page slug string, return the post that matches that string
    getPost(postArray, slug) {
      let matchingPost = "";
      console.log("getPost called with " + postArray + " and slug: " + slug )
      for(let i=0; i<postArray.length; i++) {
        console.log("getPosts, matching against this slug: " + postArray[i].slug);
        if (postArray[i].slug == slug){
          matchingPost = postArray[i];
        }
      }
      return matchingPost;
    }
  }
}
</script>

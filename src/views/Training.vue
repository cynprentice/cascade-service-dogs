<template>
    
<div class="programs">
  
   <b-container class="page-content"> 

      <!-- Owner Training Cards -->
            <b-row class="mt-4">    
         <h2>Owner Trained Service Dogs </h2>
         <p>
            <ul>
            <li> We support a qualified disabled person in the training of their qualified personal dog.</li> 
               <li> Our trainers teach the owner and dog the skills necessary to be a service dog.</li>
               <li>This program is 9-12 months long, with a minimum attendance requirement of 1-2 training sessions per week.</li>
               <li> The length of training is dependent upon the amount of training the owner/dog team do in addition to class sessions.</li>
            </ul>
         </p>
      </b-row>

      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row >
            <!--first image 
               <b-col md="2">
               <b-card-img :src="this.fullyTrainedImgUrl1" alt="Image" class="rounded-0"></b-card-img>
               </b-col>        
            -->
            <b-col md="12">
               <b-card-body :title="this.ownerTrainedTitle">
                  <b-card-text >
                     <span v-html="this.ownerTrainedDescription"></span>
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
         <b-row >

            <b-col md="8">
            <b-card-body :title="this.ownerTrainedTitle">
               <b-card-text >
                  <span v-html="this.ownerTrainedDescription"></span>

               </b-card-text>
            </b-card-body>
            </b-col>
        <b-col md="4">
            <b-card-img :src="this.ownerTrainedImgUrl1" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
         </b-row>
      </b-card>

      



   </b-container>
</div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Training",


  data () {
    return {
      //For API calls
      results: null,
      wordpressTrainingURL: "https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=10",
      // For Wordpress data
      posts: [],
      ownerTrainedSlug:"owner-trained-service-dog-program",
      ownerTrainedPost: [],
      ownerTrainedTitle: "",
      ownerTrainedDescription: "",
      ownerTrainedImgUrl1: "",
      ownerTrainedImgUrl2: "",
    };
  },

  created: function() {
    axios
    .get(this.wordpressTrainingURL, { 
      
    })
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }
      this.ownerTrainedPost = this.getPost(this.results, this.ownerTrainedSlug);
      this.ownerTrainedTitle = this.ownerTrainedPost.title.rendered;
      this.ownerTrainedDescription=this.ownerTrainedPost.content.rendered;
      this.ownerTrainedImgUrl1=this.ownerTrainedPost.acf.image1;
      this.ownerTrainedImgUrl2=this.ownerTrainedPost.acf.image2;

     
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

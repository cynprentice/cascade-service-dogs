<template>
    
<div class="applications">
   <div class="mb-4 full-back-img"  :style="{backgroundImage:`url(${this.dogApplicationImgUrl1})`}">
    </div>
    
     
   <b-container class="page-content"> 

      <!--  Cascade Service Dogs Applications -->
      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row >
            <!-- Cascade Service Dog Application -->
            <b-col md="12" class="content-block">
                <b-row><b-col>
                    <b-card-title>{{this.dogApplicationTitle}}</b-card-title>
                    <b-card-body>
                        <b-card-text><span v-html="this.dogApplicationDescription"></span></b-card-text>
                        <b-button href="..\assets\Service-Dog-Application.docx" download variant="success" class="csd-button">Download Service Dog Application</b-button>
                       <!--<b-card-img :src="this.dogApplicationImgUrl1" alt="this.dogApplicationImg1AltText" class="rounded-0" fluid></b-card-img>-->
                    </b-card-body>
                </b-col></b-row>

<!--
                <b-row><b-col>
                    <b-card-body :title="this.dogApplicationTitle">
                        <b-card-text >
                        <span v-html="this.dogApplicationDescription"></span>
                        </b-card-text>
                        <b-button href="..\assets\Service-Dog-Application.docx" download variant="success">Download Service Dog Application</b-button>
                    </b-card-body>
                </b-col></b-row>
                -->
            </b-col>
           
         </b-row>
      </b-card>


   </b-container>
</div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Applications",


  data () {
    return {
      //For API calls
      results: null,
      wordpressApplicationstURL: "https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=11",
      // For Wordpress data
      posts: [],
      dogApplicationSlug: "dog-application",
      dogApplicationPost: [],
      dogApplicationTitle: "",
      dogApplicationDescription: "",
      dogApplicationImgUrl1: "",
      dogApplicationImg1AltText: ""

      /* Remove not needed. switching to single application
      ,
      sdTrainingApplicationSlug: "sd-training-application",
      sdTrainingApplicationPost: [],
      sdTrainingApplicationTitle: "About Sharon",
      sdTrainingApplicationDescription: "",
      sdTrainingApplicationImgUrl1: ""
      */
    };
  },

  created: function() {
    axios
    .get(this.wordpressApplicationstURL, {})
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }
      this.dogApplicationPost = this.getPost(this.results, this.dogApplicationSlug);
      this.dogApplicationTitle = this.dogApplicationPost.title.rendered;
      this.dogApplicationDescription=this.dogApplicationPost.content.rendered;
      this.dogApplicationImgUrl1=this.dogApplicationPost.acf.image1;
      this.dogApplicationImg1AltText = this.dogApplicationPost.acf.image1_alt_text;
    /*
      this.sdTrainingApplicationPost = this.getPost(this.results, this.sdTrainingApplicationSlug);
      this.sdTrainingApplicationTitle = this.sdTrainingApplicationPost.title.rendered;
      this.sdTrainingApplicationDescription=this.sdTrainingApplicationPost.content.rendered;
      this.sdTrainingApplicationImgUrl1=this.sdTrainingApplicationPost.acf.image1;
      */
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

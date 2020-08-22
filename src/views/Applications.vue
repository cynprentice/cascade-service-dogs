<template>
    
<div class="applications">
   <div class="mb-4 full-back-img"  :style="{backgroundImage:`url(${this.dogApplicationImgUrl1})`}">
    </div>
    
     
   <b-container class="page-content"> 

      <!--  Cascade Service Dogs Application -->
      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row >
            <b-col md="12" class="content-block">
                <b-row><b-col>
                    <b-card-title class="text-center">{{this.dogApplicationTitle}}</b-card-title>
                    <b-card-body>
                        <b-card-text><span v-html="this.dogApplicationDescription"></span></b-card-text>
                        <b-button :href="this.dogApplicationDocUrl" download variant="success" class="csd-button">Download Service Dog Application (Word Document)</b-button>
                        <b-button :href="this.dogApplicationPdfUrl" download variant="success" class="csd-button">Download Service Dog Application (PDF file)</b-button>
                    </b-card-body>
                </b-col></b-row>
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
  name: "Applications",


  data () {
    return {
      //For API calls
      results: null,
      wordpressApplicationsUrl: Wordpress.wordpressUrl + Wordpress.wordpressCategoryFilter + Wordpress.applicationsId,
      // For Wordpress data
      posts: [],
      dogApplicationSlug: "dog-application",
      dogApplicationPost: [],
      dogApplicationTitle: "",
      dogApplicationDescription: "",
      dogApplicationImgUrl1: "",
      dogApplicationImg1AltText: "",
      dogApplicationPdfUrl: "",
      dogApplicationDocUrl: ""
    };
  },

  created: function() {
    axios
    .get(this.wordpressApplicationsUrl, {})
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }
      this.dogApplicationPost = CommonMethods.getPostBySlug(this.results, this.dogApplicationSlug);
      this.dogApplicationTitle = this.dogApplicationPost.title.rendered;
      this.dogApplicationDescription=this.dogApplicationPost.content.rendered;
      this.dogApplicationImgUrl1=this.dogApplicationPost.acf.image1;
      this.dogApplicationImg1AltText = this.dogApplicationPost.acf.image1_alt_text;
      this.dogApplicationPdfUrl=this.dogApplicationPost.acf.pdf_service_dog_application;
      this.dogApplicationDocUrl = this.dogApplicationPost.acf.word_doc_service_dog_application;
      })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
  }

 
}
</script>

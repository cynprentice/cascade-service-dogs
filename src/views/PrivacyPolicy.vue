<template>
    
<div class="privacy-policy">
   
   <!-- show loading spinner while retrieved page content from Wordpress -->
   <div v-if="contentLoading" class="text-center"><b-spinner label="Spinning" ></b-spinner></div>

   <div v-else>
    <b-container class="page-content"> 

        <!--  Cascade Service Dogs Application -->
        <b-card no-body>
            <b-row >
                <b-col class="content-block">
                    <b-row><b-col>
                        <b-card-title title-tag="h1" class="text-center">{{this.privacyPolicyTitle}}</b-card-title>
                        <b-card-body>
                            <b-card-text><span v-html="this.privacyPolicyDescription"></span></b-card-text>                       
                        </b-card-body>
                    </b-col></b-row>
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
  name: "PrivacyPolicy",


  data () {
    return {
      //For API calls
      results: null,
      wordpressPrivacyPolicyUrl: Wordpress.wordpressUrl + Wordpress.wordpressCategoryFilter + Wordpress.privacyPolicyId,
      contentLoading: true,
      // For Wordpress data
      posts: [],
      privacyPolicySlug: "privacy-policy",
      privacyPolicyPost: [],
      privacyPolicyTitle: "",
      privacyPolicyDescription: ""
    };
  },

  created: function() {
    this.contentLoading = true;
    axios
    .get(this.wordpressPrivacyPolicyUrl, {})
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }
      this.privacyPolicyPost = CommonMethods.getPostBySlug(this.results, this.privacyPolicySlug);
      this.privacyPolicyTitle = this.privacyPolicyPost.title.rendered;
      this.privacyPolicyDescription = this.privacyPolicyPost.content.rendered;
      this.contentLoading = false;
      })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
  }
}
</script>

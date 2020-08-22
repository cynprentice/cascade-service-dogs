<template>
    
<div class="privacy-policy">
   
    
     
   <b-container class="page-content"> 

      <!--  Cascade Service Dogs Application -->
      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row >
            <b-col md="12" class="content-block">
                <b-row><b-col>
                    <b-card-title class="text-center">{{this.privacyPolicyTitle}}</b-card-title>
                    <b-card-body>
                        <b-card-text><span v-html="this.privacyPolicyDescription"></span></b-card-text>                       
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
  name: "PrivacyPolicy",


  data () {
    return {
      //For API calls
      results: null,
      wordpressPrivacyPolicyUrl: Wordpress.wordpressUrl + Wordpress.wordpressCategoryFilter + Wordpress.privacyPolicyId,
      // For Wordpress data
      posts: [],
      privacyPolicySlug: "privacy-policy",
      privacyPolicyPost: [],
      privacyPolicyTitle: "",
      privacyPolicyDescription: ""
    };
  },

  created: function() {
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
      })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
  }
}
</script>

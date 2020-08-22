<template>
    
<div class="programs">
  <!-- add banner image -->
  <div class="mb-4 full-back-img"  :style="{backgroundImage:`Url(${this.aboutImgUrl1})`}"> </div>
  
   <!-- show loading spinner while retrieved page content from Wordpress -->
   <div v-if="contentLoading" class="text-center"><b-spinner label="Spinning" ></b-spinner></div>

   <div v-else>

    <b-container class="page-content"> 
        <h1 class="text-center"> {{this.aboutTitle}} </h1>

        <!-- About Cascade Service Dogs -->
        <b-card no-body >
          <b-row >
              <b-col md="4">
                <b-card-img :src="this.aboutCSDImgUrl1" alt="this.aboutCSDImg1AltText" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body title-tag="h2" :title="this.aboutCSDTitle">
                  <b-card-text >
                      <span v-html="this.aboutCSDDescription"></span>
                  </b-card-text>
                </b-card-body>
              </b-col>
          </b-row>
        </b-card>

  <!-- About Sharon -->
        <b-card no-body>
          <b-row >
              <b-col md="8">
                <b-card-body title-tag="h2" :title="this.aboutSharonTitle">
                  <b-card-text >
                      <span v-html="this.aboutSharonDescription"></span>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="4">
                <b-card-img :src="this.aboutSharonImgUrl1" alt="this.aboutSharonImg1AltText" class="rounded-0"></b-card-img>
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
  name: "About",


  data () {
    return {
      //For API calls
      results: null,
      wordpressAboutUrl: Wordpress.wordpressUrl + Wordpress.wordpressCategoryFilter + Wordpress.aboutId,
      contentLoading: false,
      // For Wordpress data
      posts: [],

      aboutSlug: "about",
      aboutPost: [],
      aboutTitle: "",
      aboutImgUrl1: "",
      aboutImg1AltText: "",

      aboutCSDSlug: "about-csd",
      aboutCSDPost: [],
      aboutCSDTitle: "",
      aboutCSDDescription: "",
      aboutCSDImgUrl1: "",
      aboutCSDImg1AltText: "",

      aboutSharonSlug: "about-sharon",
      aboutSharonPost: [],
      aboutSharonTitle: "About Sharon",
      aboutSharonDescription: "",
      aboutSharonImgUrl1: "",
      aboutSharonImg1AltText: "",
    };
  },

  created: function() {
    this.contentLoading = true;
    axios
    .get(this.wordpressAboutUrl, {})
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }

      this.aboutPost = CommonMethods.getPostBySlug(this.results, this.aboutSlug);
      this.aboutTitle = this.aboutPost.title.rendered;
      this.aboutImgUrl1=this.aboutPost.acf.image1;
      this.aboutImg1AltText = this.aboutPost.acf.image1_alt_text;

      this.aboutCSDPost = CommonMethods.getPostBySlug(this.results, this.aboutCSDSlug);
      this.aboutCSDTitle = this.aboutCSDPost.title.rendered;
      this.aboutCSDDescription=this.aboutCSDPost.content.rendered;
      this.aboutCSDImgUrl1=this.aboutCSDPost.acf.image1;
      this.aboutCSDImg1AltText = this.aboutCSDPost.acf.image1_alt_text;

      this.aboutSharonPost = CommonMethods.getPostBySlug(this.results, this.aboutSharonSlug);
      this.aboutSharonTitle = this.aboutSharonPost.title.rendered;
      this.aboutSharonDescription=this.aboutSharonPost.content.rendered;
      this.aboutSharonImgUrl1 = this.aboutSharonPost.acf.image1;
      this.aboutSharonImg1AltText = this.aboutSharonPost.acf.image1_alt_text;
      this.contentLoading = false;
      })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
  }

  
}
</script>

<template>
  <div id="contact">

    <div class="mb-4 full-back-img"  :style="{backgroundImage:`Url(${this.contactImgUrl1})`}"> </div>
    
   <!-- show loading spinner while retrieved page content from Wordpress -->
   <div v-if="contentLoading" class="text-center"><b-spinner label="Spinning" ></b-spinner></div>

   <div v-else>
    <b-container class="page-content" >
      <!--  Cascade Service Dogs Contact Overview-->

         <b-card>
            <b-card-title title-tag="h1" class="text-center mb-5">{{this.contactTitle}}</b-card-title>
            <b-card-text class="mt-5 text-center">
              <span v-html="this.contactDescription"></span>
            </b-card-text>
         </b-card>

      <!--  Cascade Service Dogs Contact Information-->
        <b-row class="mb-5"> 
            <b-col>
                <h2 class="text-center">Ways to reach us</h2>
            </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col md="6" lg="3" class="text-center mb-5">
                <h3>Phone Number</h3>
                {{this.contactPhone}}
            </b-col>
            <b-col md="6" lg="3"  class="text-center mb-5">
                <h3>Internet</h3>
                <p>{{this.contactEmail}}</p>
                <p><a :href="this.contactFacebook" target="_blank">Facebook</a></p>
            </b-col>
            <b-col md="6"  lg="3" class="text-center mb-5">
                <h3>Mailing Address</h3>
                <span v-html="this.contactMail"></span>
            </b-col>

            <b-col md="6"  lg="3" class="text-center mb-5">
                <h3>In Person</h3>
                <span v-html="this.contactTrainingCenter"></span>
            </b-col>
      </b-row>
    </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Wordpress from '@/common/wordpress.js';
import CommonMethods from '@/common/csdFunctions.js'

export default {
  name: "Contact",

  data() {
    return {
      //For API calls
      results: null,
      wordpressContactUrl: Wordpress.wordpressUrl + Wordpress.wordpressCategoryFilter + Wordpress.contactId,
      contentLoading: true,
      // For Wordpress data
      posts: [],
      contactSlug: "contact",
      contactPost: [],
      contactTitle: "Home",
      contactDescription: "",
      contactImgUrl1: "",
      contactImg1AltText: "",
      contactEmail: "",
      contactPhone: "",
      contactMail: "",
      contactTrainingCenter: "",
      contactFacebook: "",
      
    };
  },

  created: function () {
    this.contentLoading = true;
    axios
      .get(this.wordpressContactUrl, {})
      .then((response) => {
        this.results = response.data;
        for (let post in this.results) {
          this.posts.push(this.results[post]);
        }
        this.contactPost = CommonMethods.getPostBySlug(this.results, this.contactSlug);
        this.contactTitle = this.contactPost.title.rendered;
        this.contactDescription = this.contactPost.content.rendered;
        this.contactImgUrl1 = this.contactPost.acf.image1;
        this.contactImg1AltText = this.contactPost.acf.image1_alt_text;

        this.contactPhone = this.contactPost.acf.phone;
        this.contactEmail = this.contactPost.acf.email;
        this.contactMail = this.contactPost.acf.mail;
        this.contactPhone = this.contactPost.acf.phone;
        this.contactFacebook = this.contactPost.acf.facebook;
        this.contactTrainingCenter = this.contactPost.acf.training_center;
        this.contentLoading = false;
      })

      .catch((error) => {
        console.log("error accessing WordPress data" + error);
      });
  }
};
</script>


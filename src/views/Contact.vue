<template>
  <div id="contact">

    <div class="mb-4 full-back-img"  :style="{backgroundImage:`Url(${this.contactImgUrl1})`}"> </div>
    
  
    <hr/>
    <b-container class="mb-4 mt-4" >
      <!--  Cascade Service Dogs Application -->
         <b-row >
            <b-col md="12" class="content-block text-center">
              <h2 class="mb-4">{{this.contactTitle}}</h2> 
              <p class="reading-width"><span v-html="this.contactDescription"></span></p>
            </b-col>
         </b-row>
        <hr/>

        <b-row class="mb-5"> 
            <b-col>
                <h2 class="text-center">Ways to reach us</h2>
            </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col md="6" class="text-center mb-5">
                <h3>Phone Number</h3>
                {{this.contactPhone}}
            </b-col>
            <b-col md="6" class="text-center mb-5">
                <h3>Internet</h3>
                <p>{{this.contactEmail}}</p>
                <p><a :href="this.contactFacebook" target="_blank">Facebook</a></p>
            </b-col>
            <b-col md="6" class="text-center mb-5">
                <h3>Mailing Address</h3>
                <span v-html="this.contactMail"></span>
            </b-col>

            <b-col md="6" class="text-center mb-5">
                <h3>In Person</h3>
                <span v-html="this.contactTrainingCenter"></span>
            </b-col>
      </b-row>
     
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",

  data() {
    return {
      //For API calls
      results: null,
      wordpressContactUrl:
        "https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=8",
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
    axios
      .get(this.wordpressContactUrl, {})
      .then((response) => {
        this.results = response.data;
        for (let post in this.results) {
          this.posts.push(this.results[post]);
        }
        this.contactPost = this.getPost(this.results, this.contactSlug);
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
      })

      .catch((error) => {
        console.log("error accessing WordPress data" + error);
      });
  },

  methods: {
    //given an array of Wordpress posts and page slug string, return the post that matches that string
    getPost(postArray, slug) {
      let matchingPost = "";
      console.log("getPost called with " + postArray + " and slug: " + slug);
      for (let i = 0; i < postArray.length; i++) {
        console.log(
          "getPosts, matching against this slug: " + postArray[i].slug
        );
        if (postArray[i].slug == slug) {
          matchingPost = postArray[i];
        }
      }
      return matchingPost;
    },
  },
};
</script>

<style scoped>



.reading-width {
max-width: 700px;
margin: auto;
} 
.semi-opaque {
    background: rgba(0,0,0,.7)
}
</style>
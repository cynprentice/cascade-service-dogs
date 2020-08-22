<template>
    
<div class="programs">
  <!-- add banner image -->
  <div class="mb-4 full-back-img"  :style="{backgroundImage:`Url(${this.aboutImgUrl1})`}"> </div>

   <b-container class="page-content"> 

      <!-- About Cascade Service Dogs -->
      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row >
            <b-col md="4">
            <b-card-img :src="this.aboutCSDImgUrl1" alt="this.aboutCSDImg1AltText" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
            <b-card-body :title="this.aboutCSDTitle">
               <b-card-text >
                  <span v-html="this.aboutCSDDescription"></span>

               </b-card-text>
            </b-card-body>
            </b-col>
         </b-row>
      </b-card>

<!-- About Sharon -->
      <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
         <b-row >
            <b-col md="8">
            <b-card-body :title="this.aboutSharonTitle">
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
</template>

<script>

import axios from 'axios';

export default {
  name: "About",


  data () {
    return {
      //For API calls
      results: null,
      wordpressAboutUrl: "https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=7",
      // For Wordpress data
      posts: [],

      aboutSlug: "about",
      aboutPost: [],
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
    axios
    .get(this.wordpressAboutUrl, {})
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }

      this.aboutPost = this.getPost(this.results, this.aboutSlug);
      this.aboutImgUrl1=this.aboutPost.acf.image1;
      this.aboutImg1AltText = this.aboutPost.acf.image1_alt_text;


      this.aboutCSDPost = this.getPost(this.results, this.aboutCSDSlug);
      this.aboutCSDTitle = this.aboutCSDPost.title.rendered;
      this.aboutCSDDescription=this.aboutCSDPost.content.rendered;
      this.aboutCSDImgUrl1=this.aboutCSDPost.acf.image1;
      this.aboutCSDImg1AltText = this.aboutCSDPost.acf.image1_alt_text;

      this.aboutSharonPost = this.getPost(this.results, this.aboutSharonSlug);
      this.aboutSharonTitle = this.aboutSharonPost.title.rendered;
      this.aboutSharonDescription=this.aboutSharonPost.content.rendered;
      this.aboutSharonImgUrl1 = this.aboutSharonPost.acf.image1;
      this.aboutSharonImg1AltText = this.aboutSharonPost.acf.image1_alt_text;
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

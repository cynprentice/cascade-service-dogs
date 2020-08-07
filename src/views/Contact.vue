<template>
    <div id="contact">
        <b-container class="page-content"> 
            <!--Contact Form -->
            <h2>{{this.contactTitle}}</h2>
            <b-card no-body class="overflow-hidden" style="max-width: 1024px;"
                                >
                <b-row no-gutters>
                    <b-col md="12">
                    <b-card-img :src="this.contactImgURL1" alt="Image" class="rounded-0" img-height="300">
                             
                    </b-card-img>
                    </b-col>
                </b-row>
                 <b-row no-gutters>
                    <b-col md="12">
                    <b-card-body >
                    <b-card-text >
                        <span v-html="this.contactDescription" ></span>

                    </b-card-text>
                    </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

        <div>
            <h2> Ways to reach us</h2>
            <b-row no-gutters >
                <b-col md="3">
                   <h3>Mailing Address</h3>
                </b-col>
                <b-col md="3">
                   <h3>Phone Number</h3>
                </b-col>
                <b-col md="3">
                   <h3>Internet</h3>
                </b-col>
                <b-col md="3">
                   <h3>In Person</h3>
                </b-col>
            </b-row>
            <b-row no-gutters>
                <b-col md="3">
                    <span v-html="this.contactMail" ></span>
                </b-col>
                <b-col md="3">
                  {{this.contactPhone}}
                </b-col>
                <b-col md="3">
                  {{this.contactEmail}}
                  <a href="this.contactFacebook"> Facebook</a>
                </b-col>
                <b-col md="3">
                   <span v-html="this.contactTrainingCenter" ></span>
                </b-col>
                </b-row>
                </div>
        </b-container>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Contact",


  data () {
    return {
      //For API calls
      results: null,
      wordpressContactURL: "https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=8",
      // For Wordpress data
      posts: [],
      contactSlug: "contact",
      contactPost: [],
      contactTitle: "Home",
      contactDescription: "",
      contactImgURL1: "",
      contactEmail: "",
      contactPhone: "",
      contactMail: "",
      contactTrainingCenter: "",
      contactFacebook: ""
    };
  },

  created: function() {
    axios
    .get(this.wordpressContactURL, { 
    })
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }
      this.contactPost = this.getPost(this.results, this.contactSlug);
      this.contactTitle = this.contactPost.title.rendered;
      this.contactDescription=this.contactPost.content.rendered;
      this.contactImgURL1 = this.contactPost.acf.image1;
      this.contactPhone = this.contactPost.acf.phone;
      this.contactEmail = this.contactPost.acf.email;
      this.contactMail = this.contactPost.acf.mail;
      this.contactPhone = this.contactPost.acf.phone;
      this.contactFacebook = this.contactPost.acf.facebook;
      this.contactTrainingCenter = this.contactPost.acf.training_center;
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

<template>
  <div class="home">
    <div>
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators
    controls
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="Our Mission"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/service-dog-tank-1024x480-1.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Fourth Slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/service-dog-tank-lake-rock-1024x480-1.jpg"
    ></b-carousel-slide>
  </b-carousel>
</div>
    
    <!-- Jumbotron example
      <b-jumbotron fluid container-fluid bg-variant="dark" text-variant="white">
        <template v-slot:header>Cascade Service Dogs</template>
        <template v-slot:lead>Our Mission</template>
        <hr class="my-4"> 
        <p>{{this.homePageDescription}}</p>
      </b-jumbotron>
    
  -->

  <hr />
  

  <b-container class="page-content">
     
<hr/>
    <b-card-group deck>
        <b-card
          title="Is a service dog right for me?"
          img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/paw-hand-500x500-1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <p>We pair service dogs with qualified clients with traumatic brain injury (TBI), mobility and balance challenges, post-traumatic stress (PTS), and persons on the Autism Spectrum.</p>
            <p> Waiting time is 1 ½ to 2 years. </p>
          </b-card-text>
          
          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card>

        <b-card
          title="Can I train my own service dog?"
          img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/paw-hand-500x500-1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p>Program is 9-12 months long.</p>
          </b-card-text>

          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card>

        <b-card
          title="How can I help?"
          img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/paw-hand-500x500-1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <p>Your contributions will help provide Service Dogs FREE OF CHARGE for veterans and children with disabilities and other special needs!</p>
          </b-card-text>

          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card> 
    </b-card-group>

<!-- Testimonials -->
    <hr/>
    <h2> Testimonials </h2>
    
    <b-card-group deck>
     <b-card
      title="Derek S"
      sub-title="US Army veteran"
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/man.png"
      img-alt="Image"
      img-bottom
      class="circle-img"
      >
        <b-card-text>
          "Fluffy has changed my life completely and helped me live independantly. Thank Cascade Service Dogs!"
        </b-card-text>
      </b-card>
     <b-card
      title="Mary"
      sub-title="Bailey's mom"
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/woman.png"
      img-alt="Image"
      img-bottom
      
      >
        <b-card-text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        </b-card-text>
      </b-card>
    
 <b-card
      title="Alfred"
      sub-title="Mobility Challenges"
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/man.png"
      img-alt="Image"
      img-bottom
      >
        <b-card-text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        </b-card-text>
      </b-card>


      <b-card
      title="Shauna"
      sub-title="Trained her own dog"
      img-src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/woman.png"
      img-alt="Image"
      img-bottom
      >
        <b-card-text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        </b-card-text>
      </b-card>

  </b-card-group>
  </b-container>


  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "HomePage",


  data () {
    return {
      //For API calls
      results: null,
      wordpressURL: "https://cascadeservicedogs.cyprweb.com/",
      // For Wordpress data
      posts: [],
      homePageSlug: "our-mission",
      homePagePost: [],
      homePageTitle: "Home",
      homePageDescription: "",
      trainingDescription:"",

    };
  },

  created: function() {
    axios
    .get(this.wordpressURL, { 
      params: {
        rest_route: "/wp/v2/posts"
      }
    })
    .then(response => {
      this.results = response.data;
      for (let post in this.results) {
        this.posts.push(this.results[post]);
      }
    this.homePagePost = this.getPost(this.results, this.homePageSlug);
    this.homePageTitle = this.homePagePost.title.rendered;
    this.homePageDescription=this.homePagePost.content.rendered;
      this.trainingDescription="We currently have two service dog programs training service dogs for qualified clients with traumatic brain injury (TBI), mobility and balance challenges, post-traumatic stress (PTS), and persons on the Autism Spectrum. ";
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

<style scoped>
.circle {
  border-radius:50%;
}

.circle-img img {
  border-radius:50%;
}
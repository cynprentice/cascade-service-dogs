<template>
    <div id="testimonials">
        <b-container class="page-content"> 
            <!--Testimonials -->
            <h2>Testimonials</h2>

            <!-- sample testimonial with placeholder data
            <b-card 
                title="Testimonial Title"
                sub-title="NAME - SUBTITLE"
                img-src="https://placekitten.com/300/300" img-alt="Card image" img-left
                class="mb-3">
            <b-card-text>
                    testimonial excerpt goes here....
            </b-card-text>
            <b-button
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="visible = !visible"
            v-b-toggle:collapse-4
            >
            <span class="when-open">Read Less</span><span class="when-closed">Read More</span>
            </b-button >
            <b-collapse id="collapse-4" v-model="visible" class="mt-2">
            <b-card  no-body border-variant="white">Full Testimonial Content Goes Here!</b-card>
            </b-collapse>
            </b-card>
            -->

            <!-- testimonial test of WP connections
             
             <div v-if="hasTestimonials">
            <b-card 
                :title="this.testimonials[0].title"
                :sub-title="this.testimonials[0].acfTestimonialName + ' - ' + this.testimonials[0].acfTestimonialSubtitle"
                :img-src="this.testimonials[0].acfTestimonialImageURL" img-alt="Card image" img-left img-width="300" img-height="300"
                class="mb-3"
            >
                <b-card-text>
                    <span v-html="this.testimonials[0].acfTestimonialExcerpt"></span>
                </b-card-text>
                <b-button
                    :class="visible ? null : 'collapsed'"
                    :aria-expanded="visible ? 'true' : 'false'"
                    aria-controls="collapse-4"
                    @click="visible = !visible"
                    v-b-toggle:collapse-4
                >
                    <span class="when-open">Read Less</span><span class="when-closed">Read More</span>
                </b-button >
                <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                    <b-card  no-body border-variant="white" ><span v-html="this.testimonials[0].htmlContent"></span></b-card>
                </b-collapse>
            </b-card>
             </div>
             -->
            <!-- loop through testimonials and display them -->
            <div v-if="hasTestimonials">
            
            <div v-for="testimonial in testimonials" :key="testimonial.id">
                <b-card 
                    :title="testimonial.title"
                    :sub-title="testimonial.acfTestimonialName"
                    :img-src="testimonial.acfTestimonialImageURL" img-alt="Card image" img-left img-width="300" img-height="300"
                    class="mb-3">
                <b-card-text>
                    <span v-html="testimonial.acfTestimonialExcerpt"></span>
                </b-card-text>
                <b-button
                :class="visible ? null : 'collapsed'"
                :aria-expanded="visible ? 'true' : 'false'"
                aria-controls="collapse-4"
                @click="visible = !visible"
                v-b-toggle:collapse-4
                >
                <span class="when-open">Read Less</span><span class="when-closed">Read More</span>
                </b-button >
                <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                <b-card  no-body border-variant="white" ><span v-html="testimonial.htmlContent"></span></b-card>
                </b-collapse>
                </b-card>
            </div>
        </div>
        </b-container>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Testimonials",


  data () {
    return {
      //For API calls
      results: null,
      wordpressTestimonialsURL: "https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=4",
      // For Wordpress data
      testimonials: [],
      hasTestimonials: false,
      visible: false     

    };
  },

  created: function() {
    axios
    .get(this.wordpressTestimonialsURL, { 
      
    })
    .then(response => {
      this.results = response.data;
      for (let testimonial of this.results) {
        console.log("processing testimonial # "+ testimonial.id + " with title " + testimonial.title.rendered)
        let csdTestimonial = {id: "", title: "", htmlContent:"", acfTestimonialName: "", acfTestimonialSubtitle:"", acfTestimonialExcerpt:"", acfTestimonialImageURL:""};
        csdTestimonial.id = testimonial.id;
        csdTestimonial.title = testimonial.title.rendered;
        csdTestimonial.htmlContent = testimonial.content.rendered;
        csdTestimonial.acfTestimonialName = testimonial.acf.testimonial_name;
        csdTestimonial.acfTestimonialSubtitle = testimonial.acf.testimonial_subtitle;
        csdTestimonial.acfTestimonialExcerpt = testimonial.acf.testimonial_excerpt;
        csdTestimonial.acfTestimonialImageURL = testimonial.acf.testimonial_image;
          
        this.testimonials.push(csdTestimonial);
      }
       this.hasTestimonials=true;
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
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
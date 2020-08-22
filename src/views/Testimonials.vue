<template>
    <div id="testimonials">
        <b-container class="page-content"> 
            <!--Testimonials -->
            <h2 class="text-center">Testimonials</h2>        
            <!-- loop through testimonials and display them -->
            <div v-if="testimonialFlag">
            
            <div v-for="testimonial in testimonials" :key="testimonial.id">

              <b-card no-body class="overflow-hidden" style="max-width: 1024px;">
                <b-row>
                  <b-col md="4">
                      <b-card-img :src="testimonial.acfTestimonialImageUrl" :alt="testimonial.acfTestimonialImageAltTag" class="rounded-0" ></b-card-img>
                  </b-col>
                  <b-col md="8">
                      <b-card-body :title="testimonial.title"  :sub-title="testimonial.acfTestimonialName + ' - ' + testimonial.acfTestimonialSubtitle">
                        <b-card-text >
                            <span v-html="testimonial.acfTestimonialExcerpt"></span>
                        </b-card-text>
                        <b-button
                        
                          variant="success"
                          :aria-expanded="visible ? 'true' : 'false'"
                          aria-controls="testimonial.toggleID" 
                          v-b-toggle="testimonial.toggleID" 
                          >
                          <span class="when-open">Read Less</span><span class="when-closed">Read More</span>
                          </b-button >
                          <b-collapse :id="testimonial.toggleID" class="mt-2">
                          <b-card  no-body border-variant="white" ><span v-html="testimonial.htmlContent"></span></b-card>
                          </b-collapse>
                      </b-card-body>
                  </b-col>

                </b-row>
            </b-card>
<!---------- 

                <b-card 
                    :title="testimonial.title"
                    :sub-title="testimonial.acfTestimonialName + ' - ' + testimonial.acfTestimonialSubtitle"
                    :img-src="testimonial.acfTestimonialImageUrl" img-alt="Card image" img-left img-width="300" img-height="300"
                    class="mb-3">
                <b-card-text>
                    <span v-html="testimonial.acfTestimonialExcerpt"></span>
                </b-card-text>
                <b-button
                :class="visible ? null : 'collapsed'"
                variant="success"
                :aria-expanded="visible ? 'true' : 'false'"
                aria-controls="testimonial.toggleID" 
                @click="visible = !visible"
                v-b-toggle="testimonial.toggleID" 
                >
                <span class="when-open">Read Less</span><span class="when-closed">Read More</span>
                </b-button >
                <b-collapse :id="testimonial.toggleID" v-model="visible" class="mt-2">
                <b-card  no-body border-variant="white" ><span v-html="testimonial.htmlContent"></span></b-card>
                </b-collapse>
                </b-card>

                -->
            </div>
        </div>
        </b-container>
    </div>
</template>

<script>

import axios from 'axios';
import Wordpress from '@/common/wordpress.js';
//import CommonMethods from '@/common/csdFunctions.js'

export default {
  name: "Testimonials",


  data () {
    return {
      //For API calls
      results: null,
      wordpressTestimonialsUrl: Wordpress.wordpressUrl + "/wp-json/wp/v2/posts?categories=" + Wordpress.testimonialsId,
      // For Wordpress data
      testimonials: [],
      testimonialFlag: true,
      visible: false     

    };
  },

  created: function() {
    axios
    .get(this.wordpressTestimonialsUrl, { 
      
    })
    .then(response => {
      this.results = response.data;
      for (let testimonial of this.results) {
        console.log("processing testimonial # "+ testimonial.id + " with title " + testimonial.title.rendered)
        let csdTestimonial = {id: "", toggleID: "", title: "", htmlContent:"", acfTestimonialName: "", acfTestimonialSubtitle:"", acfTestimonialExcerpt:"", acfTestimonialImageUrl:""};
        csdTestimonial.id = testimonial.id;
        csdTestimonial.toggleID = "collapse-" + testimonial.id;
        csdTestimonial.title = testimonial.title.rendered;
        csdTestimonial.htmlContent = this.$sanitize(testimonial.content.rendered);
        csdTestimonial.acfTestimonialName = testimonial.acf.testimonial_name;
        csdTestimonial.acfTestimonialSubtitle = testimonial.acf.testimonial_subtitle;
        csdTestimonial.acfTestimonialExcerpt = testimonial.acf.testimonial_excerpt;
        csdTestimonial.acfTestimonialImageUrl = testimonial.acf.testimonial_image;
        csdTestimonial.acfTestimonialImageAltTag = testimonial.acf.testimonial_image_alt_tag;
          
        this.testimonials.push(csdTestimonial);
      }
       this.hasTestimonials=true;
      })
     
    .catch(error => {
      console.log("error accessing WordPress data" + error);
      });
    
  }
  
  /*
  ,

  methods: {
    setTestimonials: function() {
      this.testimonials = CommonMethods.getTestimonials(this.wordpressTestimonialsUrl);
    },

    hasTestimonials: function () {
      this.testimonialFlag = true;
    },

    doesNotHaveTestimonials: function () {
      this.testimonialsFlag = false;
  }
  }
  */
}
</script>

<style scoped>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
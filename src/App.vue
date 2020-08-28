<template>
  <div id="app">
    <div class="logo">
      <router-link to="/">
        <b-img alt="Cascade Service Dogs" height="125px" center src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/cropped-cascade-service-dogs-logo.jpg"> </b-img>
      </router-link>
    </div>
    
    <!--Navigation bar -->
    <div id="main-nav">
      <!-- Site Navigation -->
      <b-navbar toggleable="lg" type="dark" variant="primary" role="navigation">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="CSD-main-navigation">
            <b-nav-item to="service-dogs">Service Dogs</b-nav-item>
            <b-nav-item to="training">Training Programs</b-nav-item>
            <b-nav-item to="about">About</b-nav-item>
            <b-nav-item to="contact">Contact</b-nav-item>
            <b-nav-item to="applications">Applications</b-nav-item>
            <b-nav-item to="testimonials">Testimonials</b-nav-item>
          </b-navbar-nav>

        <!-- Right aligned social links -->
          <b-navbar-nav class="ml-auto" >
            <b-nav-item id="facebook-link" href="https://www.facebook.com/Cascade-Service-Dogs-516485575189284/" target="_blank" right 
            :link-attrs="this.ariaFacebook">
              <font-awesome-icon :icon="['fab', 'facebook']" aria-hidden="true"/>
            </b-nav-item>
            <b-nav-item href="mailto:cprentice@seattleu.edu" right :link-attrs="this.ariaEmail">
              <font-awesome-icon :icon="['fas', 'envelope']" aria-hidden="true"/>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
    <hr/>
    
    <router-view/>
  <hr/>
  <!-- Footer -->
    <b-container class="footer text-center bg-primary text-white pt-3" fluid>
    
      <b-row>
        <b-col sm="6">
          <p>Hours M-F 9am - 5pm</p>
          <p><a href="mailto:cprentice@seattleu.edu">cprentice@seattleu.edu</a></p> 
          <p><a href="tel:1-206-555-5555"> (206)555-5555</a></p>
        </b-col>
        <b-col sm="6">
          <p><router-link to="privacy-policy">Privacy Policy</router-link></p>
          <p>	&copy; {{year}} Cascade Service Dogs </p>
        </b-col>
      </b-row>
    </b-container>
  <!-- Footer -->


  </div>
</template>


<script>
export default {
  name: "App",

  components: {
    
},

 data () {
    return {
     year: new Date().getFullYear(),
     ariaFacebook: {'aria-label': "Facebook"},
     ariaEmail: {'aria-label': "Email Cascade Service Dogs"}
    };
  }
}

</script>


<style lang="scss">
  // Import custom SASS variable overrides
  @import './styles/csd-styles.scss';

  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';



@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  // General style overrides and custom classes
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-top: 25px;
  color: #2c3e50;
  
}


// Fonts
h1,h2,h3,h4,h5 {
  font-family: 'Oranienbaum', 'Palatino', Georgia, serif;
}

.nav-item a {
   font-family: 'Oranienbaum', 'Palatino', Georgia, serif;
}

p {
 font-family: 'Quicksand', Helvetica, Arial, sans-serif;
}


//Colors

#CSD-main-navigation a{
  color: rgba(255,255,255,.8);
}

hr {
  border-top-color:#8cc633;
}

.footer a {
 color: #f8f9fa;
}

.btn, .btn a {
 color: #000;
}

a:hover, .nav-item:hover {
  text-decoration: underline;
  cursor: pointer;
}

.card {
  border: 0px;
  border-radius: 0;
  border-top: 1px solid #8cc633;
  border-bottom: 1px solid #8cc633;
  margin: 20px auto;
}



//Spacing
.page-content {
  max-width: 1024px;
}
.logo {
  padding: 20px;
}

.nav-item {
  margin: 0 10px;
}

.mission {
  margin: 50px;
  
}

.container {
  margin: 30px auto;
}



.content-block {
  padding: 20px;
}

.csd-button {
  margin:20px;
}

.csd-primary-color {
    color: 	#0A57A5;
}
.csd-secondary-color {
    color:#740027;
}
.csd-accent-color {
    color:#8cc633;
}



.full-back-img {
  position: relative;
  max-width: 1280px;
  height: 450px;
  margin: auto;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}


.background-text {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.6); /* Black w/opacity/see-through */
  color: white;
  border: 2px solid #f1f1f1;
  border-radius: 5px;

  position: absolute;
  top: 15%;
  right: 10%;

  width: 50%;
  padding: 20px;
  text-align: center;
}
</style>



<template>
  <div id="app">
    <div class="logo">
      <router-link to="/">
        <b-img alt="Cascade Service Dogs" height="125px" center src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/cropped-cascade-service-dogs-logo.jpg"> </b-img>
      </router-link>
    </div>
    
    <!--Navigation bar -->
    <div>
      <!-- Site Navigation -->
      <b-navbar toggleable="lg" type="light" variant="primary">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="service-dogs">Service Dogs</router-link></b-nav-item>
            <b-nav-item><router-link to="training">Training Programs</router-link></b-nav-item>
            <b-nav-item><router-link to="about">About</router-link></b-nav-item>
            <b-nav-item><router-link to="contact">Contact</router-link></b-nav-item>
            <b-nav-item><router-link to="applications">Applications</router-link></b-nav-item>
            <b-nav-item><router-link to="testimonials">Testimonials</router-link></b-nav-item>
          </b-navbar-nav>

        <!-- Right aligned social links -->
          <b-navbar-nav class="ml-auto" >
            <b-nav-item href="https://www.facebook.com/Cascade-Service-Dogs-516485575189284/" target="_blank" alt="Facebook" right><font-awesome-icon :icon="['fab', 'facebook']" /></b-nav-item>
            <b-nav-item href="mailto:cprentice@seattleu.edu" right alt="Email Cascade Service Dogs"><font-awesome-icon :icon="['fas', 'envelope']" /></b-nav-item>
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
     year: new Date().getFullYear()
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

p {
 font-family: 'Quicksand', Helvetica, Arial, sans-serif;
}

.nav-item a {
   font-family: 'Oranienbaum', 'Palatino', Georgia, serif;
}


//Colors
hr {
  border-top-color:#8cc633;
}

.footer a, .nav-item a {
 color: #f8f9fa;
}

.btn, .btn a {
 color: #000;
}


a:hover {
  color: #dee2e6;
  cursor: pointer;
}


.card {
  border: 0px;
  border-radius: 0;
  border-top: 1px solid #8cc633;
  border-bottom: 1px solid #8cc633;
  margin: 20px auto;
}

.card-header {
  background-color: #740027;
}

.card-header-pills > .nav-item {
  background: white;
  border-radius: 5px;
}
.card-header-pills > .nav-item a {
  color: #740027;
}

.csd-secondary-color {
  background-color: #740027;
}

//Spacing
.page-contet {
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



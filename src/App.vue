<template>
  <div id="app">
    <div class="logo">
      <b-img alt="Cascade Service Dogs logo" height="125px" center src="https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/cropped-cascade-service-dogs-logo.jpg"> </b-img>
    </div>
    <!--Navigation bar -->
    
      <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        
        <b-nav-item-dropdown text="Programs">
          <b-dropdown-item><router-link to="programs">Service Dogs</router-link> </b-dropdown-item>
          <b-dropdown-item href="#">Training</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Applications</b-nav-item>
       <b-nav-item-dropdown text="Contribute">
          <b-dropdown-item href="#">Volunteer</b-dropdown-item>
          <b-dropdown-item href="#">Donate</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
     
  <b-nav-item href="https://www.facebook.com/Cascade-Service-Dogs-516485575189284/" right><font-awesome-icon :icon="['fab', 'facebook']" /></b-nav-item>
   <b-nav-item href="" right> <font-awesome-icon :icon="['fab', 'twitter']" /></b-nav-item>
  <b-nav-item href="mailto:cprentice@seattleu.edu" right><font-awesome-icon :icon="['fas', 'envelope']" /></b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
      <hr />


    <router-view/>

      <!-- Footer -->
<b-container class="footer text-center" bg-variant="dark">
  <hr/>
  <b-row>
    <b-col>
      <h3>Contact Information</h3>
      <p><a href="mailto:cprentice@seattleu.edu">info@cascadeservicedogs.org</a></p> 
      <p>Seattle, WA</p> 
      <p>(206)555-5555</p>
    </b-col>
    <b-col><h3>Donate</h3>
    <p>follow these instructions to make a donation</p>
    </b-col>
  </b-row>
</b-container>
  <!-- Footer -->


  </div>
</template>


<script>
export default {
  name: "HomePage",

  components: {
    
}

}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-top: 25px;
  text-align: center;
  color: #2c3e50;
}

.logo {
  padding: 20px;
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
</style>


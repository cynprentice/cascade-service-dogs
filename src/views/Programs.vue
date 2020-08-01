<template>
    
<div class="programs">
   <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#" disabled>Contacts</b-nav-item>
         </b-navbar-nav>
         <!-- Right aligned nav items -->
         <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
               <b-dropdown-item href="#">EN</b-dropdown-item>
               <b-dropdown-item href="#">ES</b-dropdown-item>
               <b-dropdown-item href="#">RU</b-dropdown-item>
               <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
               <!-- Using 'button-content' slot -->
               <template v-slot:button-content>
                  <em>User</em>
               </template>
               <b-dropdown-item href="#">Profile</b-dropdown-item>
               <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
         </b-navbar-nav>
      </b-collapse>
   </b-navbar>
   <b-container>
      <b-row class="mt-4">
         <b-col cols="4">
            <b-card
               title="Card 1"
               img-src="https://via.placeholder.com/318x159"
                img-alt="Image"
               img-top
               tag="article"
               class="mb-2"
               >
               <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
               </b-card-text>
            </b-card>
         </b-col>
         <b-col cols="4">
            <b-card
               title="Card 2"
               img-src="https://via.placeholder.com/318x159"
               img-alt="Image"
               img-top
               tag="article"
               class="mb-2"
               >
               <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
               </b-card-text>
            </b-card>
         </b-col>
         <b-col cols="4">
            <b-card
               title="Card 3"
               img-src="https://via.placeholder.com/318x159"
               img-alt="Image"
               img-top
               tag="article"
               class="mb-2"
               >
               <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
               </b-card-text>
            </b-card>
         </b-col>
         <b-col cols="12">
            <b-card
               class="mt-4"
               >
               <h4>Customer details</h4>
               <b-table striped hover :items="items"></b-table>
            </b-card>
         </b-col>
      </b-row>
   </b-container>
</div>
</template>
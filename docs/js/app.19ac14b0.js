(function(t){function e(e){for(var a,i,n=e[0],l=e[1],c=e[2],u=0,g=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&g.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1c3d":function(t,e,s){"use strict";var a=s("9429"),o=s.n(a);o.a},"3f09":function(t,e,s){"use strict";var a=s("8981"),o=s.n(a);o.a},"4d99":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("4d99");var a=s("2b0e"),o=s("8c4f"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",[s("b-carousel",{staticClass:"mt-4",staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"home-carousel","no-animation":"",indicators:"",controls:"","img-width":"1024","img-height":"360"}},t._l(t.carouselPosts,(function(t){return s("div",{key:t.id},[s("b-carousel-slide",{attrs:{caption:t.acf.caption_title,"text-html":t.acf.caption_text,"img-src":t.acf.slide_image,"content-visible-up":"md"}})],1)})),0)],1),s("b-container",{staticClass:"page-content"},[s("div",{staticClass:"mission"},[s("h1",{staticClass:"text-center"},[t._v(t._s(this.missionTitle))]),s("span",{staticClass:"text-center",domProps:{innerHTML:t._s(this.missionDescription)}})]),t.questionsLoaded?s("div",[s("b-card-group",{attrs:{deck:""}},[this.questionPosts[0]?s("b-card",{staticClass:"mb-2 text-center",staticStyle:{"max-width":"35rem"},attrs:{title:this.questionPosts[0].title.rendered,"img-src":this.questionPosts[0].acf.image1,"img-alt":this.questionPosts[0].acf.image1_alt_text,"img-top":""}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.questionPosts[1].content.rendered)}})]),s("b-button",{attrs:{variant:"success"}},[s("router-link",{attrs:{to:"service-dogs"}},[t._v("Learn about service dogs")])],1)],1):t._e(),this.questionPosts[1]?s("b-card",{staticClass:"mb-2 text-center",staticStyle:{"max-width":"35rem"},attrs:{title:this.questionPosts[1].title.rendered,"img-src":this.questionPosts[1].acf.image1,"img-alt":this.questionPosts[1].acf.image1_alt_text,"img-top":""}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.questionPosts[1].content.rendered)}})]),s("b-button",{attrs:{variant:"success"}},[s("router-link",{attrs:{to:"training"}},[t._v("Learn about training programs")])],1)],1):t._e()],1)],1):s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{label:"Spinning"}})],1)])],1)},i=[],n=s("bc3a"),l=s.n(n),c={wordpressUrl:"https://cascadeservicedogs.cyprweb.com/",wordpressCategoryFilter:"/wp-json/wp/v2/posts?categories=",testimonialsId:"4",pageContentBlockId:"5",homeId:"6",aboutId:"8",serviceDogsId:"9",trainingId:"10",applicationsId:"11",homePageCarouselId:"12",questionsId:"13",privacyPolicyId:"14"},d={getPostBySlug:function(t,e){var s="";console.log("getPostBySlug called with "+t+" and slug: "+e);for(var a=0;a<t.length;a++)t[a].slug==e&&(s=t[a]);return s},getPostsByCategory:function(t,e){var s=[];for(var a in console.log("getPostByCategory called with "+t+" and category id: "+e),t){var o=t[a].categories;for(var r in o)console.log("getPostsByCategory, matching "+e+" against this category: "+o[r]),o[r]==e&&s.unshift(t[a])}return s}},u={name:"HomePage",data:function(){return{results:null,wordpressHomeUrl:c.wordpressUrl+c.wordpressCategoryFilter+c.homeId,posts:[],missionSlug:"our-mission",missionPost:[],missionTitle:"Home",missionDescription:"",questionCategory:13,questionPosts:[],questionsLoaded:!1,wordpressCarouselUrl:c.wordpressUrl+c.wordpressCategoryFilter+c.homePageCarouselId,carouselPosts:[]}},created:function(){var t=this;this.questionsLoaded=!1,l.a.get(this.wordpressHomeUrl,{}).then((function(e){for(var s in t.results=e.data,t.results)t.posts.push(t.results[s]);t.missionPost=d.getPostBySlug(t.results,t.missionSlug),t.missionTitle=t.missionPost.title.rendered,t.missionDescription=t.$sanitize(t.missionPost.content.rendered),t.questionPosts=d.getPostsByCategory(t.results,t.questionCategory),t.questionsLoaded=!0})).catch((function(t){console.log("error accessing WordPress data"+t)})),l.a.get(this.wordpressCarouselUrl,{}).then((function(e){for(var s in t.results=e.data,t.results)t.carouselPosts.push(t.results[s])})).catch((function(t){console.log("error accessing WordPress data"+t)}))}},g=u,p=s("2877"),m=Object(p["a"])(g,r,i,!1,null,"488fb272",null),b=m.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"programs"},[s("b-container",{staticClass:"page-content"},[s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{md:"12"}},[s("b-card-body",{attrs:{title:this.fullyTrainedTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.fullyTrainedDescription)}})])],1)],1)],1)],1),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.vetImgUrl,alt:"Image"}})],1),s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.vetTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.vetDescription)}})])],1)],1)],1)],1),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.autismImgUrl,alt:"Image"}})],1),s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.autismTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.autismDescription)}})])],1)],1)],1)],1),s("b-row",{staticClass:"mt-4"},[s("h2",[t._v("Owner Trained Service Dogs ")]),s("p",[s("ul",[s("li",[t._v(" We support a qualified disabled person in the training of their qualified personal dog.")]),s("li",[t._v(" Our trainers teach the owner and dog the skills necessary to be a service dog.")]),s("li",[t._v("This program is 9-12 months long, with a minimum attendance requirement of 1-2 training sessions per week.")]),s("li",[t._v(" The length of training is dependent upon the amount of training the owner/dog team do in addition to class sessions.")])])])]),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{md:"6"}},[s("b-card-body",{attrs:{title:"Horizontal Card"}},[s("b-card-text",[t._v(" This is a wider card with supporting text as a natural lead-in to additional content. This content is a little bit longer. ")])],1)],1),s("b-col",{attrs:{md:"6"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:"https://picsum.photos/400/400/?image=20",alt:"Image"}})],1)],1)],1)],1)],1)},h=[],f={name:"Progams",data:function(){return{results:null,wordpressUrl:"https://cascadeservicedogs.cyprweb.com/",posts:[],fullyTrainedSlug:"fully-trained-service-dogs",fullyTrainedPost:[],fullyTrainedTitle:"",fullyTrainedDescription:"",fullyTrainedImgUrl1:"",fullyTrainedImgUrl2:"",vetSlug:"veterans",vetPost:[],vetTitle:"Home",vetDescription:"",vetImgUrl:"",autismSlug:"autism",autismPost:[],autismTitle:"",autismDescription:"",autismImgUrl:""}},created:function(){var t=this;l.a.get(this.wordpressUrl,{params:{rest_route:"/wp/v2/posts"}}).then((function(e){for(var s in t.results=e.data,t.results)t.posts.push(t.results[s]);t.fullyTrainedPost=t.getPost(t.results,t.fullyTrainedSlug),t.fullyTrainedTitle=t.fullyTrainedPost.title.rendered,t.fullyTrainedDescription=t.fullyTrainedPost.content.rendered,t.fullyTrainedImgUrl1=t.fullyTrainedPost.acf.image1,t.fullyTrainedImgUrl2=t.fullyTrainedPost.acf.image2,t.vetPost=t.getPost(t.results,t.vetSlug),t.vetTitle=t.vetPost.title.rendered,t.vetDescription=t.vetPost.content.rendered,t.vetImgUrl=t.vetPost.acf.image1,t.autismPost=t.getPost(t.results,t.autismSlug),t.autismTitle=t.autismPost.title.rendered,t.autismDescription=t.autismPost.content.rendered,t.autismImgUrl=t.autismPost.acf.image1})).catch((function(t){console.log("error accessing WordPress data"+t)}))},methods:{getPost:function(t,e){var s="";console.log("getPost called with "+t+" and slug: "+e);for(var a=0;a<t.length;a++)console.log("getPosts, matching against this slug: "+t[a].slug),t[a].slug==e&&(s=t[a]);return s}}},y=f,P=Object(p["a"])(y,v,h,!1,null,null,null),w=P.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"programs"},[s("div",{staticClass:"mb-4 full-back-img",style:{backgroundImage:"url("+this.serviceDogImgUrl+")"}}),s("b-container",{staticClass:"page-content"},[s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{staticClass:"text-center",attrs:{md:"12"}},[s("b-card-body",{attrs:{title:this.serviceDogTitle}})],1),s("b-col",{attrs:{md:"12"}},[s("b-card-body",[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.serviceDogDescription)}})])],1)],1)],1)],1),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{id:"vets","no-body":""}},[s("b-row",[s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.vetImgUrl,alt:"this.vetImgAltTag"}})],1),s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.vetTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.vetDescription)}})])],1)],1)],1)],1),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":"",id:"autism"}},[s("b-row",[s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.autismImgUrl,alt:"this.autismImgAltTag"}})],1),s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.autismTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.autismDescription)}})])],1)],1)],1)],1),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{id:"apply-for-dog","no-body":""}},[s("b-row",[s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.applyForDogImgUrl,alt:"this.applyForDogImgAltTag"}})],1),s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.applyForDogTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.applyForDogDescription)}}),s("b-button",{attrs:{variant:"success"}},[s("router-link",{attrs:{to:"applications"}},[t._v("Apply here")])],1)],1)],1)],1)],1)],1)],1)],1)},_=[],C={name:"ServiceDogs",data:function(){return{results:null,wordpressServiceDogsUrl:c.wordpressUrl+c.wordpressCategoryFilter+c.serviceDogsId,posts:[],serviceDogSlug:"what-is-a-service-dog",serviceDogPost:[],serviceDogTitle:"",serviceDogDescription:"",serviceDogImgUrl:"",vetSlug:"veterans",vetPost:[],vetTitle:"",vetDescription:"",vetImgUrl:"",vetImgAltTag:"",autismSlug:"autism",autismPost:[],autismTitle:"",autismDescription:"",autismImgUrl:"",autismImgAltTag:"",applyForDogSlug:"apply-for-dog",applyForDogPost:[],applyForDogTitle:"",applyForDogDescription:"",applyForDogImgUrl:"",applyForDogImgAltTag:""}},created:function(){var t=this;l.a.get(this.wordpressServiceDogsUrl,{}).then((function(e){for(var s in t.results=e.data,t.results)t.posts.push(t.results[s]);t.serviceDogPost=d.getPostBySlug(t.results,t.serviceDogSlug),t.serviceDogTitle=t.serviceDogPost.title.rendered,t.serviceDogDescription=t.serviceDogPost.content.rendered,t.serviceDogImgUrl=t.serviceDogPost.acf.image1,t.vetPost=d.getPostBySlug(t.results,t.vetSlug),t.vetTitle=t.vetPost.title.rendered,t.vetDescription=t.vetPost.content.rendered,t.vetImgUrl=t.vetPost.acf.image1,t.vetImgAltTag=t.vetPost.acf.image1_alt_text,t.autismPost=d.getPostBySlug(t.results,t.autismSlug),t.autismTitle=t.autismPost.title.rendered,t.autismDescription=t.autismPost.content.rendered,t.autismImgUrl=t.autismPost.acf.image1,t.autismImgAltTag=t.autismPost.acf.image1_alt_text,t.applyForDogPost=d.getPostBySlug(t.results,t.applyForDogSlug),t.applyForDogTitle=t.applyForDogPost.title.rendered,t.applyForDogDescription=t.applyForDogPost.content.rendered,t.applyForDogImgUrl=t.applyForDogPost.acf.image1,t.applyForDogImgAltTag=t.applyForDogPost.acf.image1_alt_text})).catch((function(t){console.log("error accessing WordPress data"+t)}))}},D=C,S=Object(p["a"])(D,T,_,!1,null,null,null),x=S.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"programs"},[s("div",{staticClass:"mb-4 full-back-img",style:{backgroundImage:"url("+this.programsOverviewImgUrl+")"}}),s("b-container",{staticClass:"page-content"},[s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{staticClass:"text-center",attrs:{md:"12"}},[s("b-card-body",{attrs:{title:this.programsOverviewTitle}})],1),s("b-col",{attrs:{md:"12"}},[s("b-card-body",[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.programsOverviewDescription)}})])],1)],1)],1)],1),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.fullyTrainedTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.fullyTrainedDescription)}}),s("b-button",{attrs:{variant:"success"}},[s("router-link",{attrs:{to:"applications"}},[t._v("Apply here")])],1)],1)],1)],1),s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.fullyTrainedImgUrl1,alt:this.fullyTrainedImg1AltTag}})],1)],1)],1),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.ownerTrainedTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.ownerTrainedDescription)}}),s("b-button",{attrs:{variant:"success"}},[s("router-link",{attrs:{to:"applications"}},[t._v("Apply here")])],1)],1)],1)],1),s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.ownerTrainedImgUrl1,alt:this.ownerTrainedImg1AltTag}})],1)],1)],1)],1)],1)},U=[],A={name:"Training",data:function(){return{results:null,wordpressTrainingUrl:c.wordpressUrl+c.wordpressCategoryFilter+c.trainingId,posts:[],programsOverviewSlug:"programs-overview",programsOverviewPost:[],programsOverviewTitle:"",programsOverviewDescription:"",programsOverviewImgUrl:"",fullyTrainedSlug:"fully-trained-service-dogs",fullyTrainedPost:[],fullyTrainedTitle:"",fullyTrainedDescription:"",fullyTrainedImgUrl1:"",fullyTrainedImg1AltTag:"",ownerTrainedSlug:"owner-trained-service-dog-program",ownerTrainedPost:[],ownerTrainedTitle:"",ownerTrainedDescription:"",ownerTrainedImgUrl1:"",ownerTrainedImg1AltTag:""}},created:function(){var t=this;l.a.get(this.wordpressTrainingUrl,{}).then((function(e){for(var s in t.results=e.data,t.results)t.posts.push(t.results[s]);console.log("getting Programs Overview section Content: "),t.programsOverviewPost=d.getPostBySlug(t.results,t.programsOverviewSlug),t.programsOverviewTitle=t.programsOverviewPost.title.rendered,t.programsOverviewDescription=t.programsOverviewPost.content.rendered,t.programsOverviewImgUrl=t.programsOverviewPost.acf.image1,console.log("getting Fully Training section Content: "),t.fullyTrainedPost=d.getPostBySlug(t.results,t.fullyTrainedSlug),t.fullyTrainedTitle=t.fullyTrainedPost.title.rendered,t.fullyTrainedDescription=t.fullyTrainedPost.content.rendered,t.fullyTrainedImgUrl1=t.fullyTrainedPost.acf.image1,t.fullyTrainedImgAltTag=t.fullyTrainedPost.acf.image1_alt_text,t.ownerTrainedPost=d.getPostBySlug(t.results,t.ownerTrainedSlug),t.ownerTrainedTitle=t.ownerTrainedPost.title.rendered,t.ownerTrainedDescription=t.ownerTrainedPost.content.rendered,t.ownerTrainedImgUrl1=t.ownerTrainedPost.acf.image1,t.ownerTrainedImgAltTag=t.ownerTrainedPost.acf.image1_alt_text})).catch((function(t){console.log("error accessing WordPress data"+t)}))}},k=A,O=Object(p["a"])(k,I,U,!1,null,null,null),F=O.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"programs"},[s("div",{staticClass:"mb-4 full-back-img",style:{backgroundImage:"Url("+this.aboutImgUrl1+")"}}),s("b-container",{staticClass:"page-content"},[s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.aboutCSDImgUrl1,alt:"this.aboutCSDImg1AltText"}})],1),s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.aboutCSDTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.aboutCSDDescription)}})])],1)],1)],1)],1),s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:this.aboutSharonTitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.aboutSharonDescription)}})])],1)],1),s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:this.aboutSharonImgUrl1,alt:"this.aboutSharonImg1AltText"}})],1)],1)],1)],1)],1)},H=[],L={name:"About",data:function(){return{results:null,wordpressAboutUrl:"https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=7",posts:[],aboutSlug:"about",aboutPost:[],aboutImgUrl1:"",aboutImg1AltText:"",aboutCSDSlug:"about-csd",aboutCSDPost:[],aboutCSDTitle:"",aboutCSDDescription:"",aboutCSDImgUrl1:"",aboutCSDImg1AltText:"",aboutSharonSlug:"about-sharon",aboutSharonPost:[],aboutSharonTitle:"About Sharon",aboutSharonDescription:"",aboutSharonImgUrl1:"",aboutSharonImg1AltText:""}},created:function(){var t=this;l.a.get(this.wordpressAboutUrl,{}).then((function(e){for(var s in t.results=e.data,t.results)t.posts.push(t.results[s]);t.aboutPost=t.getPost(t.results,t.aboutSlug),t.aboutImgUrl1=t.aboutPost.acf.image1,t.aboutImg1AltText=t.aboutPost.acf.image1_alt_text,t.aboutCSDPost=t.getPost(t.results,t.aboutCSDSlug),t.aboutCSDTitle=t.aboutCSDPost.title.rendered,t.aboutCSDDescription=t.aboutCSDPost.content.rendered,t.aboutCSDImgUrl1=t.aboutCSDPost.acf.image1,t.aboutCSDImg1AltText=t.aboutCSDPost.acf.image1_alt_text,t.aboutSharonPost=t.getPost(t.results,t.aboutSharonSlug),t.aboutSharonTitle=t.aboutSharonPost.title.rendered,t.aboutSharonDescription=t.aboutSharonPost.content.rendered,t.aboutSharonImgUrl1=t.aboutSharonPost.acf.image1,t.aboutSharonImg1AltText=t.aboutSharonPost.acf.image1_alt_text})).catch((function(t){console.log("error accessing WordPress data"+t)}))},methods:{getPost:function(t,e){var s="";console.log("getPost called with "+t+" and slug: "+e);for(var a=0;a<t.length;a++)console.log("getPosts, matching against this slug: "+t[a].slug),t[a].slug==e&&(s=t[a]);return s}}},j=L,q=Object(p["a"])(j,M,H,!1,null,null,null),B=q.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"contact"}},[s("div",{staticClass:"mb-4 full-back-img",style:{backgroundImage:"Url("+this.contactImgUrl1+")"}}),s("hr"),s("b-container",{staticClass:"mb-4 mt-4"},[s("b-row",[s("b-col",{staticClass:"content-block text-center",attrs:{md:"12"}},[s("h2",{staticClass:"mb-4"},[t._v(t._s(this.contactTitle))]),s("p",{staticClass:"reading-width"},[s("span",{domProps:{innerHTML:t._s(this.contactDescription)}})])])],1),s("hr"),s("b-row",{staticClass:"mb-5"},[s("b-col",[s("h2",{staticClass:"text-center"},[t._v("Ways to reach us")])])],1),s("b-row",{staticClass:"mb-5"},[s("b-col",{staticClass:"text-center mb-5",attrs:{md:"6"}},[s("h3",[t._v("Phone Number")]),t._v(" "+t._s(this.contactPhone)+" ")]),s("b-col",{staticClass:"text-center mb-5",attrs:{md:"6"}},[s("h3",[t._v("Internet")]),s("p",[t._v(t._s(this.contactEmail))]),s("p",[s("a",{attrs:{href:this.contactFacebook,target:"_blank"}},[t._v("Facebook")])])]),s("b-col",{staticClass:"text-center mb-5",attrs:{md:"6"}},[s("h3",[t._v("Mailing Address")]),s("span",{domProps:{innerHTML:t._s(this.contactMail)}})]),s("b-col",{staticClass:"text-center mb-5",attrs:{md:"6"}},[s("h3",[t._v("In Person")]),s("span",{domProps:{innerHTML:t._s(this.contactTrainingCenter)}})])],1)],1)],1)},W=[],$={name:"Contact",data:function(){return{results:null,wordpressContactUrl:"https://cascadeservicedogs.cyprweb.com/wp-json/wp/v2/posts?categories=8",posts:[],contactSlug:"contact",contactPost:[],contactTitle:"Home",contactDescription:"",contactImgUrl1:"",contactImg1AltText:"",contactEmail:"",contactPhone:"",contactMail:"",contactTrainingCenter:"",contactFacebook:""}},created:function(){var t=this;l.a.get(this.wordpressContactUrl,{}).then((function(e){for(var s in t.results=e.data,t.results)t.posts.push(t.results[s]);t.contactPost=t.getPost(t.results,t.contactSlug),t.contactTitle=t.contactPost.title.rendered,t.contactDescription=t.contactPost.content.rendered,t.contactImgUrl1=t.contactPost.acf.image1,t.contactImg1AltText=t.contactPost.acf.image1_alt_text,t.contactPhone=t.contactPost.acf.phone,t.contactEmail=t.contactPost.acf.email,t.contactMail=t.contactPost.acf.mail,t.contactPhone=t.contactPost.acf.phone,t.contactFacebook=t.contactPost.acf.facebook,t.contactTrainingCenter=t.contactPost.acf.training_center})).catch((function(t){console.log("error accessing WordPress data"+t)}))},methods:{getPost:function(t,e){var s="";console.log("getPost called with "+t+" and slug: "+e);for(var a=0;a<t.length;a++)console.log("getPosts, matching against this slug: "+t[a].slug),t[a].slug==e&&(s=t[a]);return s}}},N=$,z=(s("1c3d"),Object(p["a"])(N,E,W,!1,null,"448fa91c",null)),J=z.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"testimonials"}},[s("b-container",{staticClass:"page-content"},[s("h2",{staticClass:"text-center"},[t._v("Testimonials")]),t.testimonialFlag?s("div",t._l(t.testimonials,(function(e){return s("div",{key:e.id},[s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:e.acfTestimonialImageUrl,alt:e.acfTestimonialImageAltTag}})],1),s("b-col",{attrs:{md:"8"}},[s("b-card-body",{attrs:{title:e.title,"sub-title":e.acfTestimonialName+" - "+e.acfTestimonialSubtitle}},[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(e.acfTestimonialExcerpt)}})]),s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.toggleID,expression:"testimonial.toggleID"}],attrs:{variant:"success","aria-expanded":t.visible?"true":"false","aria-controls":"testimonial.toggleID"}},[s("span",{staticClass:"when-open"},[t._v("Read Less")]),s("span",{staticClass:"when-closed"},[t._v("Read More")])]),s("b-collapse",{staticClass:"mt-2",attrs:{id:e.toggleID}},[s("b-card",{attrs:{"no-body":"","border-variant":"white"}},[s("span",{domProps:{innerHTML:t._s(e.htmlContent)}})])],1)],1)],1)],1)],1)],1)})),0):t._e()])],1)},Y=[],G=s("b85c"),K={name:"Testimonials",data:function(){return{results:null,wordpressTestimonialsUrl:c.wordpressUrl+"/wp-json/wp/v2/posts?categories="+c.testimonialsId,testimonials:[],testimonialFlag:!0,visible:!1}},created:function(){var t=this;l.a.get(this.wordpressTestimonialsUrl,{}).then((function(e){t.results=e.data;var s,a=Object(G["a"])(t.results);try{for(a.s();!(s=a.n()).done;){var o=s.value;console.log("processing testimonial # "+o.id+" with title "+o.title.rendered);var r={id:"",toggleID:"",title:"",htmlContent:"",acfTestimonialName:"",acfTestimonialSubtitle:"",acfTestimonialExcerpt:"",acfTestimonialImageUrl:""};r.id=o.id,r.toggleID="collapse-"+o.id,r.title=o.title.rendered,r.htmlContent=t.$sanitize(o.content.rendered),r.acfTestimonialName=o.acf.testimonial_name,r.acfTestimonialSubtitle=o.acf.testimonial_subtitle,r.acfTestimonialExcerpt=o.acf.testimonial_excerpt,r.acfTestimonialImageUrl=o.acf.testimonial_image,r.acfTestimonialImageAltTag=o.acf.testimonial_image_alt_tag,t.testimonials.push(r)}}catch(i){a.e(i)}finally{a.f()}t.hasTestimonials=!0})).catch((function(t){console.log("error accessing WordPress data"+t)}))}},Q=K,V=(s("3f09"),Object(p["a"])(Q,R,Y,!1,null,"d46869c2",null)),X=V.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"applications"},[s("div",{staticClass:"mb-4 full-back-img",style:{backgroundImage:"url("+this.dogApplicationImgUrl1+")"}}),s("b-container",{staticClass:"page-content"},[s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{staticClass:"content-block",attrs:{md:"12"}},[s("b-row",[s("b-col",[s("b-card-title",{staticClass:"text-center"},[t._v(t._s(this.dogApplicationTitle))]),s("b-card-body",[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.dogApplicationDescription)}})]),s("b-button",{staticClass:"csd-button",attrs:{href:this.dogApplicationDocUrl,download:"",variant:"success"}},[t._v("Download Service Dog Application (Word Document)")]),s("b-button",{staticClass:"csd-button",attrs:{href:this.dogApplicationPdfUrl,download:"",variant:"success"}},[t._v("Download Service Dog Application (PDF file)")])],1)],1)],1)],1)],1)],1)],1)],1)},tt=[],et={name:"Applications",data:function(){return{results:null,wordpressApplicationsUrl:c.wordpressUrl+c.wordpressCategoryFilter+c.applicationsId,posts:[],dogApplicationSlug:"dog-application",dogApplicationPost:[],dogApplicationTitle:"",dogApplicationDescription:"",dogApplicationImgUrl1:"",dogApplicationImg1AltText:"",dogApplicationPdfUrl:"",dogApplicationDocUrl:""}},created:function(){var t=this;l.a.get(this.wordpressApplicationsUrl,{}).then((function(e){for(var s in t.results=e.data,t.results)t.posts.push(t.results[s]);t.dogApplicationPost=d.getPostBySlug(t.results,t.dogApplicationSlug),t.dogApplicationTitle=t.dogApplicationPost.title.rendered,t.dogApplicationDescription=t.dogApplicationPost.content.rendered,t.dogApplicationImgUrl1=t.dogApplicationPost.acf.image1,t.dogApplicationImg1AltText=t.dogApplicationPost.acf.image1_alt_text,t.dogApplicationPdfUrl=t.dogApplicationPost.acf.pdf_service_dog_application,t.dogApplicationDocUrl=t.dogApplicationPost.acf.word_doc_service_dog_application})).catch((function(t){console.log("error accessing WordPress data"+t)}))}},st=et,at=Object(p["a"])(st,Z,tt,!1,null,null,null),ot=at.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"privacy-policy"},[s("b-container",{staticClass:"page-content"},[s("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"1024px"},attrs:{"no-body":""}},[s("b-row",[s("b-col",{staticClass:"content-block",attrs:{md:"12"}},[s("b-row",[s("b-col",[s("b-card-title",{staticClass:"text-center"},[t._v(t._s(this.privacyPolicyTitle))]),s("b-card-body",[s("b-card-text",[s("span",{domProps:{innerHTML:t._s(this.privacyPolicyDescription)}})])],1)],1)],1)],1)],1)],1)],1)],1)},it=[],nt={name:"PrivacyPolicy",data:function(){return{results:null,wordpressPrivacyPolicyUrl:c.wordpressUrl+c.wordpressCategoryFilter+c.privacyPolicyId,posts:[],privacyPolicySlug:"privacy-policy",privacyPolicyPost:[],privacyPolicyTitle:"",privacyPolicyDescription:""}},created:function(){var t=this;l.a.get(this.wordpressPrivacyPolicyUrl,{}).then((function(e){for(var s in t.results=e.data,t.results)t.posts.push(t.results[s]);t.privacyPolicyPost=d.getPostBySlug(t.results,t.privacyPolicySlug),t.privacyPolicyTitle=t.privacyPolicyPost.title.rendered,t.privacyPolicyDescription=t.privacyPolicyPost.content.rendered})).catch((function(t){console.log("error accessing WordPress data"+t)}))}},lt=nt,ct=Object(p["a"])(lt,rt,it,!1,null,null,null),dt=ct.exports;a["default"].use(o["a"]);var ut=new o["a"]({scrollBehavior:function(t,e,s){return s||(t.hash?{selector:t.hash}:void 0)},routes:[{path:"/",name:"home",component:b},{path:"/programs",name:"programs",component:w},{path:"/service-dogs",name:"service-dogs",component:x},{path:"/training",name:"training",component:F},{path:"/about",name:"about",component:B},{path:"/contact",name:"contact",component:J},{path:"/testimonials",name:"testimonials",component:X},{path:"/applications",name:"applications",component:ot},{path:"/privacy-policy",name:"privacy-policy",component:dt}]}),gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("b-img",{attrs:{alt:"Cascade Service Dogs",height:"125px",center:"",src:"https://cascadeservicedogs.cyprweb.com/wp-content/uploads/2020/07/cropped-cascade-service-dogs-logo.jpg"}})],1)],1),s("div",[s("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"primary"}},[s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",[s("router-link",{attrs:{to:"service-dogs"}},[t._v("Service Dogs")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"training"}},[t._v("Training Programs")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"about"}},[t._v("About")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"contact"}},[t._v("Contact")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"applications"}},[t._v("Applications")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"testimonials"}},[t._v("Testimonials")])],1)],1),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",{attrs:{href:"https://www.facebook.com/Cascade-Service-Dogs-516485575189284/",target:"_blank",right:""}},[s("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),s("b-nav-item",{attrs:{href:"mailto:cprentice@seattleu.edu",right:""}},[s("font-awesome-icon",{attrs:{icon:["fas","envelope"]}})],1)],1)],1)],1)],1),s("hr"),s("router-view"),s("hr"),s("b-container",{staticClass:"footer text-center bg-primary text-white pt-3",attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{sm:"6"}},[s("p",[t._v("Hours M-F 9am - 5pm")]),s("p",[s("a",{attrs:{href:"mailto:cprentice@seattleu.edu"}},[t._v("info@cascadeservicedogs.org")])]),s("p",[s("a",{attrs:{href:"tel:1-206-555-5555"}},[t._v(" (206)555-5555")])])]),s("b-col",{attrs:{sm:"6"}},[s("p",[s("router-link",{attrs:{to:"privacy-policy"}},[t._v("Privacy Policy")])],1),s("p",[t._v(" © "+t._s(t.year)+" Cascade Service Dogs ")])])],1)],1)],1)},pt=[],mt={name:"App",components:{},data:function(){return{year:(new Date).getFullYear()}}},bt=mt,vt=(s("5c0b"),Object(p["a"])(bt,gt,pt,!1,null,null,null)),ht=vt.exports,ft=s("5f5b"),yt=s("0ec9"),Pt=s.n(yt),wt=s("ecee"),Tt=s("ad3d"),_t=s("c074"),Ct=s("f2d1");a["default"].use(ft["a"]),a["default"].use(Pt.a),a["default"].component("font-awesome-icon",Tt["a"]),wt["c"].add(Ct["a"],Ct["b"],_t["a"]),a["default"].config.productionTip=!1,new a["default"]({router:ut,render:function(t){return t(ht)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),o=s.n(a);o.a},8981:function(t,e,s){},9429:function(t,e,s){},"9c0c":function(t,e,s){}});
//# sourceMappingURL=app.19ac14b0.js.map
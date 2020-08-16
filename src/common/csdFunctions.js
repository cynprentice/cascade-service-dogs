
export default {
  /* 
  //sanitize HTML
  cleanHTML: function (text) {
    return $sanitize(text)
  },
*/

  //given an array of Wordpress posts and page slug string, return the post that matches that string
  getPostBySlug: function (postArray, slug) {
      let matchingPost = "";
      console.log("getPostBySlug called with " + postArray + " and slug: " + slug )
      for(let i=0; i<postArray.length; i++) {
        console.log("getPostsBySlug, matching against this slug: " + postArray[i].slug);
        if (postArray[i].slug == slug){
          matchingPost = postArray[i];
        }
      }
      return matchingPost;
    },


    //given an array of Wordpress posts a category id, return an array of posts with that category
  getPostsByCategory: function (postArray, category){
    let matchingPosts = [];
    console.log("getPostByCategory called with " + postArray + " and category id: " + category )
    for(let post in postArray) {
      console.log("getPostsByCategory, matching against these categories: " + postArray[post].categories);
      let categories = postArray[post].categories;
      for(let cat in categories) {
        console.log("getPostsByCategory, matching " + category + " against this category: " + categories[cat]);
        if (categories[cat] == category) {
          matchingPosts.unshift(postArray[post])
        }
      }
    }
    return matchingPosts;
  }

}
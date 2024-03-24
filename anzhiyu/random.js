var posts=["2024/03/09/第1个博客/","2024/03/17/关于评论/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2024/07/09/hello-world/","2024/07/09/蓝颜测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
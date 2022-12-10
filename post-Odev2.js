const posts = [{
  id:1,  content:"Ex et ut excepteur in qui sit. " , author:"Yazar 1 "
},{
    id:2, content:"Laboris occaecat ad esse pariatur excepteur." , author:"Yazar 2 "
},{
    id:3, content:"Dolor nulla voluptate sit sunt nostrud incididunt nulla anim duis." , author:"Yazar 3 "
},{
    id:4,content:"Proident deserunt cupidatat velit proident consectetur laboris ullamco enim." , author:"Yazar 4"
}]


const listPosts =()=>{
    posts.map(post=>{
        console.log(post.content);
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
      resolve(posts);

    });
  
    return promise1;
  };


async function showPosts() {
    try {
      await addPost({id:5, content: "Voluptate officia do minim labore deserunt.", author: "Yazar 5" });
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }

showPosts()

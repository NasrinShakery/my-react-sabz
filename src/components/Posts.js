import React, { useState, useEffect } from "react";

const Posts = () => {
   const [posts, setPosts] = useState([]);
   const [err, setErr] = useState(null);
   const [isPending, setIsPending] = useState(true);

   const fetchPosts = async (url) => {
      await fetch(url)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
            console.log(posts);
            isPending(false);
            err(null);
         })
         .catch((err) => setErr(err.message));
   };

   useEffect(() => {
      fetchPosts("https://jsonplaceholder.typicode.com/posts");
      console.log(posts);
   }, []);

   return (
      <div>
         {console.log(posts)}
         {err && <div>Error {err}</div>}
         {isPending && <div>isloading...</div>}

         {posts &&
            posts.map((post) => (
               <div key={post.id}>
                  {console.log(post.id)}
                  <h2>{post.id}</h2>
                  <span>{post.title}</span>
                  <hr />
               </div>
            ))}
      </div>
   );
};

export default Posts;


//   ChatGPT : 

// import React, { useState, useEffect } from "react";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const [err, setErr] = useState(null);
//   const [isPending, setIsPending] = useState(true);

//   const fetchPosts = async (url) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Failed to fetch posts");
//       }
//       const data = await response.json();
//       setPosts(data);
//       setIsPending(false);
//       setErr(null);
//     } catch (error) {
//       setErr(error.message);
//       setIsPending(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts("https://jsonplaceholder.typicode.com/posts");
//   }, []);

//   return (
//     <div>
//       {err && <div>Error: {err}</div>}
//       {isPending && <div>Loading...</div>}

//       {posts &&
//         posts.map((post) => (
//           <div key={post.id}>
//             <h2>{post.id}</h2>
//             <span>{post.title}</span>
//             <hr />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Posts;
import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
   const [posts, setPosts] = useState([]);
   const [isPending, setIsPending] = useState(true);
   const [err, setErr] = useState(null);

   const fetchPosts =  (url) => {
       fetch(url)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
            console.log(posts); // []
            setIsPending(false);
            setErr(null);
         })
         .catch((err) => setErr(err.message));
   };

   useEffect(() => {
      fetchPosts(url)
      console.log(posts); //[]
   }, []);
  return (
    {posts, isPending, err}
  )
}

export default useFetch
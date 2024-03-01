import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through and display them
const Blog = (props) => {
  const[count,setCount]=useState(2)
  const [blogs, setBlogs] = useState(props.allBlogs)
  const fetchData = async() => {
    let d=await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
    setCount(count+2)
    let data=await d.json()
    setBlogs(data)
  };
  return <div className={styles.container}>
    <main className={styles.main}>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCont!==blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map(blogItem => {
          return (
            <div key={blogItem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
              <p className={styles.blogItemp}>{blogItem.metadesc.substr(0, 140)}...</p>
              <Link href={`/blogpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button></Link>
            </div>
          )
        })
        }
      </InfiniteScroll>


    </main>
  </div>
};

/*export async function getServerSideProps() {
  // Fetch data from external API
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json()

  // Pass data to the page via props
  return { props: { allBlogs } }
}*/

export async function getStaticProps() {
  // Fetch data from external API
  let data = await fs.promises.readdir("blogdata")
  let allCont=data.length
  let myFile;
  let allBlogs = []
  for (let i = 0; i < 2; i++) {
    const item = data
    console.log(item)
    myFile = await fs.promises.readFile("blogdata/" + data[i], "utf-8")
    allBlogs.push(JSON.parse(myFile))
  }

  // Pass data to the page via props
  return { props: { allBlogs,allCont } }
}



export default Blog;

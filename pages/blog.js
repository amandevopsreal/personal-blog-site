import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through and display them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)

  return <div className={styles.container}>
    <main className={styles.main}>
      {
        blogs.map(blogItem => {
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
  let myFile;
  let allBlogs = []
  for (let i = 0; i < data.length; i++) {
    const item = data
    console.log(item)
    myFile = await fs.promises.readFile("blogdata/" + data[i], "utf-8")
    allBlogs.push(JSON.parse(myFile))
  }

  // Pass data to the page via props
  return { props: { allBlogs } }
}



export default Blog;

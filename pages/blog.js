import React from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through and display them
const Blog = () => {
  return <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.blogItem}>
        <Link href={"/blogpost/learn-javascript"}>
          <h3>How to learn JavaScript in 2022?</h3></Link>
        <p>JavaScript is the language used to design logic for the web</p>
      </div>
      <div className="blogItem">
        <h3>How to learn JavaScript in 2022?</h3>
        <p>JavaScript is the language used to design logic for the web</p>
      </div>
      <div className="blogItem">
        <h3>How to learn JavaScript in 2022?</h3>
        <p>JavaScript is the language used to design logic for the web</p>
      </div>
    </main>
  </div>
};

export default Blog;

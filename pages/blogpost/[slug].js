import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';
// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
    const [blog, setBlog] = useState(props.blog)
    function createMarkup(c) {
        return { __html: c };
    }

    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}

        </main>
    </div>;
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-javascript' } }
        ],
        fallback: true // false or 'blocking'
    };
}

/*export async function getServerSideProps(context) {
    // Fetch data from external API
    const { slug } = context.query
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let blog = await data.json()

    // Pass data to the page via props
    return { props: { blog } }
}*/
export async function getStaticProps(context) {
    // Fetch data from external API
    const { slug } = context.params
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    // Pass data to the page via props
    return { props: { blog: JSON.parse(myBlog) } }
}

export default Slug;

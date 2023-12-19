import React from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css' 
const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div className={styles.container}>
        <main className={styles.main}>
        <h1>Tite of the page {slug}</h1>
        <hr/>
        <div>
            Lorem Need a frontend developer to help with various projects as an intern initially. These projects are in react and there's a good chance this position will turn into a full time position if the internship goes well. You'll need to have at least 5 hours per day (25 hour per week) available during the 3 months of the internship. Projects vary and will provide a lot of experience working on real production applications. Internship will pay Rs 12 000 per month for the first 3 months. Need someone to start immediately if possible.
        </div>
        </main>
    </div>;
};

export default slug;

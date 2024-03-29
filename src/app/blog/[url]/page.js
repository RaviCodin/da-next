'use client'
import { useDispatch, useSelector } from "react-redux";
import styles from "../../page.module.css";
import React, { useEffect } from "react";
import { clearError, getBlog } from "../../redux/actions/blogAction";
import { getDate } from "../../utils/date";
import Link from "next/link";
// import { useRouter } from 'next/router';

export default function Home({params}) {
  const dispatch = useDispatch()
//   const router = useRouter();
//   const { url } = router.query;


  useEffect(() => {
    dispatch(getBlog(params?.url))
}, [dispatch])

const { loading, blog, error } = useSelector((state) => state.blog)

useEffect(() => {
    if (error) {
        toast.error(error);
        dispatch(clearError());
    }
}, [error, dispatch])
  
  console.log(params?.url,blog)

  return (
    <div  className={styles.HomeContainer}>
        <div className={styles.space}></div>
        <div className={styles.headingBox}>
          <h2>{blog?.heading} </h2>
        </div>

        <div className={styles.blogBox}>
              <div className={styles.myblogItem}>
                {/* <h3>{blog?.heading}</h3> */}
                <h5>{blog?.subHeading}</h5>
                <div dangerouslySetInnerHTML={{ __html: blog?.html }} />
                {/* <p className={styles.date}>{getDate(blog?.createAt)}</p> */}
            </div>

          

        </div>
    </div >
  );
}


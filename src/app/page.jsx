'use client'
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import React, { useEffect } from "react";
import { clearError, getAllBlog } from "./redux/actions/blogAction";
import { getDate } from "./utils/date";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllBlog())
}, [dispatch])

const { loading, blogs, error } = useSelector((state) => state.getBlog)

useEffect(() => {
    if (error) {
        toast.error(error);
        dispatch(clearError());
    }
}, [error, dispatch])
  
  console.log(blogs)

  return (
    <div  className={styles.HomeContainer}>
        <div className={styles.space}></div>
        <div className={styles.headingBox}>
          <h2>Tech Blog </h2>
        </div>

        <div className={styles.blogBox}>
          {
            blogs && blogs.map(item=>(
              <Link href={`/blog/${item.urlName}`} className={styles.blogItem}>
                <h3>{item.heading}</h3>
                <p>{item.subHeading}</p>
                <p className={styles.date}>{getDate(item.createAt)}</p>
              </Link>
            ))
          }

        </div>
    </div >
  );
}


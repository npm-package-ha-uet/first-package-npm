import * as React from 'react'
import { Props } from './interface'
import styles from './styles.module.css'

export const CardComponent = ({ text, source }: Props) => {
  const htmlSlide = source.map(
    (img, index) => <li
      key={index}>
        <img src={img.src} alt={img.title} />
        <p>{img.title}</p>
    </li>
  )
  return <div
    className={styles.test}>
    Example Component: {text}
    <div className={styles.img}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/gai.jpg?alt=media&token=fd4ac42d-6d0f-4e4b-b76c-e1bffe5b1ec1"
        alt="" />
    </div>
    <hr />
      <ul className={styles.slide}>
        {htmlSlide}
      </ul>
  </div>
}

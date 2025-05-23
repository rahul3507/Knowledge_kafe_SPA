import React from 'react'
import PropTypes from 'prop-types';
export const Blog = ({blog}) => {
    const {author, cover, author_img, posted_date,hashtags} = blog;
    console.log(blog);
  return (
    <div>
        <img className='h-80' src={cover} alt={`Cover picture of the title ${author}`} />

        <div className='flex justify-between'>
            <div  className='flex items-center gap-4'>
                <img className='w-14 h-14 rounded-full ' src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
               <span>{posted_date} min read</span>
            </div>
        </div>
        <h2 className='text-4xl'>{author}</h2>
        {
            hashtags.map((hash) => <span><a href="">{hash}</a></span>)
        }
    </div>
  )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

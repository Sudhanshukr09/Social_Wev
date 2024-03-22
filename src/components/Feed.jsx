import React from 'react'
import Topfeed from './Topfeed';
import Post from './Post';
import {Posts} from './dummydata'

const Feed = () => {
  return (
    <div className='w-[50%] px-6 overflow-y-scroll select-none h-[89vh]'>
      <Topfeed/>
      {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
    </div>
  )
}

export default Feed

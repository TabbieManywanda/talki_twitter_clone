import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Input from '../components/Input';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Post from './Post';
import { useSession } from 'next-auth/react';
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore';

function Feed() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
       onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
       ),
    [db]
  );

  return (
    <div className='text-black flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]' >
        <div className='text-black flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-700' >
            <h2 className='text-lg sm:text-xl font-bold'>Home</h2>
            <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'>
                <AutoAwesomeOutlinedIcon className='h-5 text-black' />
            </div>
        </div>

        <Input />

        <div className='pb-72'>
          {posts.map(post => (
            <Post key={post.id} id={post.id} post={post.data()} />
          ))}
        </div>

    </div>
  );
}

export default Feed;
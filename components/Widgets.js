import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5'>
        <div className='sticky top-0 py-1.5 bg-white z-50 w-11/12 xl:w-9/12'>
            <div className='flex items-center bg-slate-200 p-3 rounded-full relative'>
                <SearchOutlinedIcon className='text-gray-500 h-5' />
                <input
                  type='text'
                  className='bg-transparent placeholder-gray-500 outline-none text-black absolute inset-0 pl-11 border border-transparent w-full focus:border-orange-700 rounded-full focus:bg-orange-200 focus:shadow-lg'
                  placeholder='Search Talki'
                />
            </div>   
        </div>

        <div className='space-y-3 pt-2'>
            <h4 className='font-bold text-xl px-4'>What's happening</h4>
            <TwitterTweetEmbed tweetId={'1670142133792129026'}  />
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='WWE'
              options={{ height: 400 }}
            />
        </div>

    </div>
  );
}

export default Widgets;
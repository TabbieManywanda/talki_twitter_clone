import Moment from "react-moment";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

function Comment({ id, comment }) {
  return (
    <div className='p-3 flex cursor-pointer border-b border-gray-700'> 
      <img 
        src={comment?.userImg} 
        alt=''
        className='h-11 w-11 rounded-full mr-4'
      />
      <div className='flex flex-col space-y-2 w-full'>
        <div className='flex justify-between'>
          <div className='text-black'>
            <div className='inline-block group'>
              <h4 className='font-bold text-black text-[15px] sm:text-base inline-block group-hover:underline'>
                {comment?.username}
              </h4>
              <span className='ml-1.5 text-sm sm:text-[15px]'>
                @{comment?.tag}{' '}
              </span>
            </div>{' '}
            ·{' '}
            <span className='hover:underline text-sm sm:text-[15px]'>
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className='text-black mt-05 max-w-lg text-[15px] sm:text-base'>
              {comment?.comment}
            </p>
          </div>
          <div className='icon group flex-shrink-0'>
            <MoreHorizIcon className='h-5 text-[#6e767d] group-hover:text-[#1d9bf0]' />
          </div>
        </div> 

        <div className='text-black flex justify-between w-10/12'>
          <div className='icon group'>
            <ChatBubbleOutlineIcon className='h-5 group-hover:text-[#1d9bf0]' />
          </div>
          <div className='flex items-center space-x-1 group'>
            <div className='icon group-hover:bg-pink-600/10'>
              <FavoriteBorderIcon className='h-5 group-hover:text-pink-600' />
            </div>
            <span className='group-hover:text-pink-600 text-sm'></span>
          </div>

          <div className='icon group'>
            <ShareIcon className='h-5 group-hover:text-[#1d9bf0]' />
          </div>
          <div className='icon group'>
            <SignalCellularAltOutlinedIcon className='h-5 group-hover:text-[#1d9bf0]' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
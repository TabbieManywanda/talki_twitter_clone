import SidebarLink from './SidebarLink';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { signOut, useSession } from 'next-auth/react';

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
            <TwitterIcon className='w-[30px] h-[30px]' />
        </div>
        <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
           <SidebarLink text='Home' Icon={HomeIcon} active />
           <SidebarLink text='Explore' Icon={TagIcon} />
           <SidebarLink text='Notifications' Icon={NotificationsNoneIcon} />
           <SidebarLink text='Messages' Icon={MailOutlineIcon} />
           <SidebarLink text='Bookmarks' Icon={BookmarkBorderIcon} />
           <SidebarLink text='Lists' Icon={ListIcon} />
           <SidebarLink text='Profile' Icon={PermIdentityIcon} />
           <SidebarLink text='More' Icon={MoreHorizIcon} /> 
        </div>
        <button className='hidden xl:inline ml-auto bg-[#ee9a2b] text-black rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#e94b0d]'>
            Talk
        </button>
        <div
          className='text-black flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto'
          onClick={signOut}
        >
            <img
            src={session.user.image}
            alt=''
            className='h-10 w-10 rounded-full xl:mr-2.5'
            />
            <div className='hidden xl:inline leading-5'>
                <h4 className='font-bold'>{session.user.name}</h4>
                <p className='text-[#6e575760]'>@{session.user.tag}</p>
            </div>
            <MoreHorizIcon className='h-5 hidden xl:inline ml-10' />
        </div>
    </div>
  );
}

export default Sidebar;
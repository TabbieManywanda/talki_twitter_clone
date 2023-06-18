function SidebarLink({Icon, text, active}) {
  return (
    <div className={`text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
        <Icon className='h-7 text-black' />
        <span className='hidden xl:inline'>{text}</span> 
    </div>
  );
}

export default SidebarLink;

import './style.css';
import { useRef, useState } from 'react';
import { MdPlayArrow } from "react-icons/md";
import { SideBar, MenuIcon, LeftNav, VideoPoPup } from "../../../allExportDefault";

/*===================================*/
/*===================================*/
/*===================================*/

const Main = () => {

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isPlayClicked, setIsPlayClicked] = useState(false);

  const refVideo = useRef();

  const handleOpenMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  }

  const handleOpenVideo = () => {
    setIsPlayClicked(true);
  }

  const handleCloseVideo = () => {
    setIsPlayClicked(false);
    refVideo.current.pause();
  }

  return (
    <header id='home'>
      <VideoPoPup play={isPlayClicked} rff={refVideo} close={handleCloseVideo} />
      <MenuIcon menuClick={handleOpenMenu} />
      <LeftNav openLeftMenu={isMenuClicked} clickMenu={handleOpenMenu} />
      <SideBar click={isMenuClicked} />
      <span className="playBtn" onClick={handleOpenVideo}>
        <MdPlayArrow />
      </span>
    </header>
  )
}

export default Main;
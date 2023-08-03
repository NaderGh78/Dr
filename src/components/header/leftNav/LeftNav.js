import { LiaTimesSolid } from "react-icons/lia";
import { MyMenu, SpanClose, MyLink } from "./style.js";

/*===================================*/
/*===================================*/
/*===================================*/

const LeftNav = ({ openLeftMenu, clickMenu }) => {
  // array of page names
  const PagesArr = ["home", "Services", "About Us", "Gallery", "Videos", "Testimonials", "Contact Us"];
  return (
    <MyMenu $openLeftMenu={openLeftMenu}>
      <SpanClose onClick={clickMenu}>
        <LiaTimesSolid />
      </SpanClose>
      {PagesArr?.map((a, index) => (
        <MyLink
          $openLeftMenu={openLeftMenu}
          key={index}
          href={`#${a.replace(" ", "-")}`}
        >
          {a}
        </MyLink>)
      )
      }
    </MyMenu>
  )
}

export default LeftNav;
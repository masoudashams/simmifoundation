import Item from "./Item";
import SizedBox from "../SizedBox"
import TwitterIcon from "../icons/twitter";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram"

import { ABOUTUS, INITIATIVES, COMPANY, HAVEQUESTIONS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-9 px-5 py-16">
      <div className="">
        <Item Links={ABOUTUS} title="ABOUTUS" />
        <div className='flex mt-2'>
          
            <SizedBox width={10} />
            <a href='#twitter'>
              <TwitterIcon />
            </a>
            <SizedBox width={10} />
            <a href='#facebook'>
              <FacebookIcon />
            </a>
            <SizedBox width={10} />
            <a href='#instagram'>
              <InstagramIcon />
            </a>
          </div>
      </div>

      <Item Links={INITIATIVES} title="INITIATIVES" />
      <Item Links={COMPANY} />
      <Item Links={HAVEQUESTIONS} title="HAVEQUESTIONS" />
    </div>
  );
};

export default ItemsContainer;

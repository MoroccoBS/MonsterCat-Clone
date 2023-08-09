import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { animate } from "framer-motion/dom";

interface SideBarProps {
  children: React.ReactNode;
  childrenItems: string[];
  id: number;
}

function DropDown({ children, childrenItems, id }: SideBarProps) {
  const [DropDown, setDropDown] = useState(false);
  const toggleDropdown = () => {
    setDropDown((prevDropDown) => !prevDropDown);
    if (!DropDown) {
      animate(`.arrow${id}`, { rotate: -90 });
    }
    if (DropDown) {
      animate(`.arrow${id}`, { rotate: 0 });
    }
  };
  return (
    <>
      <div className="dropdown-cont">
        <button
          className="btn-white"
          onClick={() => {
            toggleDropdown();
          }}
        >
          <div>{children}</div>
          <IoIosArrowForward className={`arrow${id}`} />
        </button>
        <motion.div
          layout
          initial={{ x: 0 }}
          className={DropDown ? "dropdown" : "dropdown dropdown-close"}
        >
          {childrenItems.map((item) => (
            <a key={item} href="">
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default DropDown;

import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";

const SideNav = ({ selectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 1,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="border shadow-sm h-screen">
      {menuList.map((menu, index) => (
        <h2
          onClick={() => {
            setActiveIndex(index);
            selectedIndex(index);
          }}
          className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white
          ${activeIndex === index && "bg-primary text-white"}`}
          key={index}
        >
          <menu.icon size={20} />
          {menu.name}
        </h2>
      ))}
    </div>
  );
};

export default SideNav;

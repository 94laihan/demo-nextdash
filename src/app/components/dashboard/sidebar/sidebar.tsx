import MenuLink from "./menuLinks/menuLinks";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const session: any = await auth();
  const user = session.user;
  return (
    <div className="fixed h-full">
      <nav className="h-full flex flex-col bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm">
        <div className="p-3 pb-2 flex justify-between items-center">
            <img src="/logo4.png" alt="" className={`overflow-hidden transition-all
                ${
                    "w-36"
                }
            `}/>
        </div>
        <div className="flex-1 px-2 my-2">
          <ul className={styles.list}>
            {menuItems.map((cat) => (
              <li key={cat.title}>
                <span className={styles.cat}>{cat.title}</span>
                {cat.list.map((item) => (
                  <MenuLink item={item} key={item.title} />
                ))}
              </li>
            ))}
          </ul>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className={styles.logout}>
              <MdLogout />
              Logout
            </button>
          </form>
        </div>
        <div className="border-t flex p-3">
          <img src={user.img || "/noavatar.png"} alt="" className="w-16 h-16 rounded-xl"/>
          <div className={`flex justify-between items-center overflow-hidden transition-all ${'w-30 ml-3'}`}>
              <div className="leading-4 flex flex-1 flex-col gap-1">
                  <p className="text-white">{user.username}</p>
                  <p className="text-white mt-1">Administrator</p>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
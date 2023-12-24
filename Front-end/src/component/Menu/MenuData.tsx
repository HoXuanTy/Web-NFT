import { SidebarModel } from '../../models/SidebarModel';
import { RxDashboard } from "react-icons/rx";
import { RiExchangeLine, RiWalletLine, } from "react-icons/ri";
import { FaStore } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoSettingsOutline, IoNewspaperOutline } from "react-icons/io5";


export const MenuData: SidebarModel[] = [
    {
        title:"Dashboard",
        icons:<RxDashboard size={24} />
    },
    {
        title:"Exchange",
        icons:<RiExchangeLine  size={24} color='white'/>
    },
    {
        title:"Live prices",
        icons:<FaChartLine  size={24} color='white'/>
    },
    {
        title:"Wallet",
        icons:<RiWalletLine size={24} />
    },
    {
        title:"NFT Market",
        icons:<FaStore size={24} />
    },
    {
        title:"Transaction",
        icons:<AiOutlineTransaction  size={24} />
    },
    {
        title:"Settings",
        icons:<IoSettingsOutline size={24} />
    },
    {
        title:"News",
        icons:<IoNewspaperOutline size={24} />
    },
]
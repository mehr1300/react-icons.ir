import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import * as CiIcons from "react-icons/ci";
import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as Hi2Icons from "react-icons/hi2";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as RxIcons from "react-icons/rx";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TfiIcons from "react-icons/tfi";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";

export const iconCategories = [
    { id: "ai", name: "Ant Design", icons: AiIcons },
    { id: "bs", name: "Bootstrap", icons: BsIcons },
    { id: "bi", name: "BoxIcons", icons: BiIcons },
    { id: "cg", name: "css.gg", icons: CgIcons },
    { id: "ci", name: "Circum", icons: CiIcons },
    { id: "di", name: "Devicons", icons: DiIcons },
    { id: "fa", name: "Font Awesome 5", icons: FaIcons },
    { id: "fa6", name: "Font Awesome 6", icons: Fa6Icons },
    { id: "fc", name: "Flat Color", icons: FcIcons },
    { id: "fi", name: "Feather", icons: FiIcons },
    { id: "go", name: "Github Octicons", icons: GoIcons },
    { id: "gr", name: "Grommet", icons: GrIcons },
    { id: "hi", name: "Heroicons", icons: HiIcons },
    { id: "hi2", name: "Heroicons 2", icons: Hi2Icons },
    { id: "im", name: "IcoMoon", icons: ImIcons },
    { id: "io", name: "Ionicons 4", icons: IoIcons },
    { id: "io5", name: "Ionicons 5", icons: Io5Icons },
    { id: "lu", name: "Lucide", icons: LuIcons },
    { id: "md", name: "Material Design", icons: MdIcons },
    { id: "pi", name: "Phosphor", icons: PiIcons },
    { id: "rx", name: "Radix", icons: RxIcons },
    { id: "ri", name: "Remix", icons: RiIcons },
    { id: "si", name: "Simple", icons: SiIcons },
    { id: "sl", name: "Simple Line", icons: SlIcons },
    { id: "tb", name: "Tabler", icons: TbIcons },
    { id: "tfi", name: "Themify", icons: TfiIcons },
    { id: "ti", name: "Typicons", icons: TiIcons },
    { id: "vsc", name: "VS Code", icons: VscIcons },
    { id: "wi", name: "Weather", icons: WiIcons }
];

// ایجاد یک لیست کلی برای جستجوی سراسری
export const allIconsFlat = iconCategories.flatMap(category =>
    Object.entries(category.icons).map(([name, Icon]) => ({
        name,
        Icon,
        categoryId: category.id
    }))
);

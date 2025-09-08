import type { SvgProps } from "react-native-svg";
import { theme } from "../../constants/theme";
import ArrowLeft from "./ArrowLeft";
import Call from "./Call";
import Camera from "./Camera";
import Comment from "./Comment";
import Delete from "./Delete";
import Edit from "./Edit";
import Heart from "./Heart";
import Home from "./Home";
import Image from "./Image";
import Location from "./Location";
import Lock from "./Lock";
import Mail from "./Mail";
import Plus from "./Plus";
import Search from "./Search";
import Send from "./Send";
import Share from "./Share";
import ThreeDotsCircle from "./ThreeDotsCircle";
import ThreeDotsHorizontal from "./ThreeDotsHorizontal";
import User from "./User";
import Video from "./Video";

const icons = {
  home: Home,
  mail: Mail,
  lock: Lock,
  user: User,
  heart: Heart,
  plus: Plus,
  search: Search,
  location: Location,
  call: Call,
  camera: Camera,
  edit: Edit,
  arrowLeft: ArrowLeft,
  threeDotsCircle: ThreeDotsCircle,
  threeDotsHorizontal: ThreeDotsHorizontal,
  comment: Comment,
  share: Share,
  send: Send,
  delete: Delete,
  image: Image,
  video: Video,
};

interface IconProps extends SvgProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const Icon = ({ name, size, color, strokeWidth, ...props }: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      height={size ?? 24}
      width={size ?? 24}
      strokeWidth={strokeWidth ?? 1.9}
      color={color ?? theme.colors.textLight}
      {...props}
    />
  );
};

export default Icon;

import avatar from "../../assets/avatar.jpg";

export default function MediaManager(iconName) {
  const icons = {
    avatar: avatar,
  };
  if (iconName in icons) {
    return icons[iconName];
  } else {
    throw new Error(`${iconName} не существует`);
  }
}

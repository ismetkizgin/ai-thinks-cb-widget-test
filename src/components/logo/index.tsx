import aiThinksLogo from '/ai-thinks-logo.png';
import style from "./style.module.css";

export const Logo = () => {
  return <img src={aiThinksLogo} className={style.logo} alt="Ai Thinks logo" />;
};

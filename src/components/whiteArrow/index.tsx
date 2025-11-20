import whiteArrow from '/white-arrow.png';
import type { IWhiteArrow } from './_type';
import style from './style.module.css';

export const WhiteArrow = ({ botName }: IWhiteArrow) => {
  return (
    <>
      <img src={whiteArrow} className={style.whiteArrow} />
      <div className={style.whiteArrowText}>Bu {botName}</div>
    </>
  );
};

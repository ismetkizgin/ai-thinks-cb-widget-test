import { Icon } from '../icon';
import type { IInfos } from './_type';
import style from './style.module.css';

export const Infos = ({ appId, botName, name }: IInfos) => {
  return (
    <div className={style.infos}>
      <p>
        <Icon name="Id" color="#252525" />
        <strong>App ID:</strong> {appId}
      </p>
      <p>
        <Icon name="Robot" color="#252525" />
        <strong>Bot Adı:</strong> {botName}
      </p>

      <p>
        <Icon name="App" color="#252525" />
        <strong>Widget Adı:</strong> {name}
      </p>
    </div>
  );
};

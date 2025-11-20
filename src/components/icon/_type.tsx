import * as icons from '../../icons';

export type IconName = keyof typeof icons;

export interface IIcon {
  name: IconName;
  size?: number;
  color?: string;
}

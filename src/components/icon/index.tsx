import * as icons from '../../icons';

import type { IIcon, IconName } from './_type';

export type { IconName };

export function Icon({ name, ...props }: IIcon) {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
}

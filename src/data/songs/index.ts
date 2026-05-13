import type { Song } from './types';
export type { Song };

import { songs as sodagreen } from './sodagreen';
import { songs as littleUniverse } from './little-universe';
import { songs as beautiful } from './beautiful';
import { songs as spring } from './spring';
import { songs as summer } from './summer';
import { songs as whatTroublesYou } from './what-troubles-you';
import { songs as autumn } from './autumn';
import { songs as winter } from './winter';

export const allSongs: Song[] = [
  ...sodagreen,
  ...littleUniverse,
  ...beautiful,
  ...spring,
  ...summer,
  ...whatTroublesYou,
  ...autumn,
  ...winter,
];

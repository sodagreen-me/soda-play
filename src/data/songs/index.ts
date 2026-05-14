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
  ...sodagreen,  // 同名
  ...littleUniverse,  // 小宇宙
  ...beautiful,  // 无美丽
  ...spring,  // 春专
  ...summer,  // 夏专
  ...whatTroublesYou,  // 无烦恼
  ...autumn,  // 秋专
  ...winter,  // 冬专
];

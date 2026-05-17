export interface VoteOption {
  id: 'a' | 'b';
  title: string;
  album: string;
}

export interface VoteTopic {
  id: string;
  topic: string;
  description: string;
  options: [VoteOption, VoteOption];
}

export const voteTopics: VoteTopic[] = [
  {
    id: 'world-famous',
    topic: '世界名曲 PK',
    description: '谁是你最喜欢的「世界名曲」？',
    options: [
      { id: 'a', title: '小情歌', album: '小宇宙' },
      { id: 'b', title: '我好想你', album: '秋：故事' },
    ],
  },
  {
    id: 'plagiarism-hot-search',
    topic: '吴青峰抄袭苏打绿',
    description: '这谁整的热搜标题？？？',
    options: [
      { id: 'a', title: '小情歌', album: '小宇宙' },
      { id: 'b', title: '歌颂者', album: '歌颂者' },
    ],
  },
  {
    id: 'physical-love',
    topic: '用物理感受表达在你身边的爱',
    description: '小威太会写歌了！',
    options: [
      { id: 'a', title: '漂浮', album: '苏打绿同名专辑' },
      { id: 'b', title: '频率', album: '苏打绿同名专辑' },
    ],
  },
  {
    id: 'nature-ode',
    topic: '歌颂大自然',
    description: '我们都是大自然的宝藏',
    options: [
      { id: 'a', title: '交响梦', album: '春·日光' },
      { id: 'b', title: '拾穗', album: '秋：故事' },
    ],
  },
  {
    id: 'qf-favorite',
    topic: '青峰最喜欢的歌',
    description: '青峰到底最喜欢哪首歌？',
    options: [
      { id: 'a', title: '未了', album: '冬　未了' },
      { id: 'b', title: '太空人', album: '太空人' },
    ],
  },
];

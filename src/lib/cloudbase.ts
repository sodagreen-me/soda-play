export interface VoteStats {
  countA: number;
  countB: number;
  total: number;
  playerChoice: string | null;
}

const STORAGE_VOTES = 'soda-ab-votes';
const STORAGE_STATS = 'soda-ab-stats';
const STORAGE_PLAYER = 'soda-ab-player';

const SEED_STATS: Record<string, { countA: number; countB: number }> = {
  'world-famous': { countA: 127, countB: 98 },
  'plagiarism-hot-search': { countA: 156, countB: 134 },
  'physical-love': { countA: 89, countB: 102 },
  'nature-ode': { countA: 73, countB: 81 },
  'qf-favorite': { countA: 112, countB: 95 },
};

function getPlayerId(): string {
  let id = localStorage.getItem(STORAGE_PLAYER);
  if (!id) {
    id = 'player-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
    localStorage.setItem(STORAGE_PLAYER, id);
  }
  return id;
}

function getLocalVotes(): Record<string, string> {
  return JSON.parse(localStorage.getItem(STORAGE_VOTES) || '{}');
}

function setLocalVotes(votes: Record<string, string>): void {
  localStorage.setItem(STORAGE_VOTES, JSON.stringify(votes));
}

function getStatsData(): Record<string, { countA: number; countB: number }> {
  const stored = localStorage.getItem(STORAGE_STATS);
  if (!stored) {
    localStorage.setItem(STORAGE_STATS, JSON.stringify(SEED_STATS));
    return { ...SEED_STATS };
  }
  return JSON.parse(stored);
}

function setStatsData(stats: Record<string, { countA: number; countB: number }>): void {
  localStorage.setItem(STORAGE_STATS, JSON.stringify(stats));
}

export function initSeedStats(): void {
  if (!localStorage.getItem(STORAGE_STATS)) {
    localStorage.setItem(STORAGE_STATS, JSON.stringify(SEED_STATS));
  }
}

export async function submitVote(
  topicId: string,
  optionId: string
): Promise<VoteStats> {
  const votes = getLocalVotes();
  const stats = getStatsData();
  const oldChoice = votes[topicId];

  if (!stats[topicId]) {
    stats[topicId] = { countA: 0, countB: 0 };
  }

  if (oldChoice === optionId) {
    return {
      countA: stats[topicId].countA,
      countB: stats[topicId].countB,
      total: stats[topicId].countA + stats[topicId].countB,
      playerChoice: optionId,
    };
  }

  if (oldChoice) {
    stats[topicId][oldChoice === 'a' ? 'countA' : 'countB'] -= 1;
  }

  stats[topicId][optionId === 'a' ? 'countA' : 'countB'] += 1;
  votes[topicId] = optionId;

  setLocalVotes(votes);
  setStatsData(stats);

  return {
    countA: stats[topicId].countA,
    countB: stats[topicId].countB,
    total: stats[topicId].countA + stats[topicId].countB,
    playerChoice: optionId,
  };
}

export async function getPlayerStatus(topicId: string): Promise<VoteStats> {
  const votes = getLocalVotes();
  const stats = getStatsData();

  const topicStats = stats[topicId] || { countA: 0, countB: 0 };

  return {
    countA: topicStats.countA,
    countB: topicStats.countB,
    total: topicStats.countA + topicStats.countB,
    playerChoice: votes[topicId] || null,
  };
}

export async function getAllStatus(topicIds: string[]): Promise<Record<string, VoteStats>> {
  const result: Record<string, VoteStats> = {};
  for (const id of topicIds) {
    result[id] = await getPlayerStatus(id);
  }
  return result;
}

export { getPlayerId };

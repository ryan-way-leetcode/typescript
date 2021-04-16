export function wordBreak(s: string, wordDict: string[]): boolean {
  var dp:boolean[] = new Array(s.length).fill(0);

  var lookup: Set<string> = new Set(wordDict);

  for(let i = 0; i < dp.length; i++)
  {
    dp[i] = lookup.has(s.substr(0, i+1));

    for(let j = 0; j < i; j++)
    {
      dp[i] ||= dp[j] && lookup.has(s.substring(j+1, i+1));
    }
  }

  return dp.pop() == true;
};

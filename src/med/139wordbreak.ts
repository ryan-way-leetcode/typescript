/** Given string s, and dictionary of words wordDict, return true if s can be 
 * segmented into a space-separate sequence of one or more dictionary words
 *
 * Same word can be used multiple times
 *
 * approach:
 * 1) convert wordDict to set for constant lookup
 * 2) create an array dp of length s.length+1
 * 3) dp[0] = true
 * 4) dp[i] is true, if there exists an element dp[j] where j < i, dp[j] is true
 * and s.substring(j, i) exists in lookup
 *
 * return dp[i-1]
 *
 * runtime complexity: O(n^2)
 * space complexity: O(n)
 *
**/
export function wordBreak(s: string, wordDict: string[]): boolean {
  var dp:boolean[] = new Array(s.length+1).fill(0);
  dp[0] = true;

  var lookup: Set<string> = new Set(wordDict);

  for(let i = 1; i < dp.length; i++)
  {
    for(let j = 0; j < i; j++)
    {
      dp[i] ||= dp[j] && lookup.has(s.substring(j, i));
    }
  }

  return dp.pop() == true;
};

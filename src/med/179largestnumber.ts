//https://leetcode.com/problems/largest-number/
/* Given a list of non-negative intergers nums, arrage them such that they form
 * the larget number.
 *
 * Returning a string due to maximum value of result for integer
 *
 * Approach:
 *
 * Sort numbers by  concatentated string value, reverse, then join
 *
 * 1) convert nums to strings
 * 2) sort by string comparator
 * 3) reverse, and return joined list
 *
 */
export function largestNumber(nums: number[]): string {
  var sNums: string[] = nums.map((x) => x.toString());
  sNums.sort((x, y) => (x+y).localeCompare(y+x));
  sNums.reverse();
  var s: string = sNums.join("");
  var pos: number = s.search("[1-9]");
  if(pos == -1) return "0";
  else return s.substr(pos);
};

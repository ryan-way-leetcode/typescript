export function largestNumber(nums: number[]): string {
  var sNums: string[] = nums.map((x) => x.toString());
  sNums.sort((x, y) => (x+y).localeCompare(y+x));
  sNums.reverse();
  var s: string = sNums.join("");
  var pos: number = s.search("[1-9]");
  if(pos == -1) return "0";
  else return s.substr(pos);
};

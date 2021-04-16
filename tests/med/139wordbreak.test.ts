import { wordBreak } from '../../src/med/139wordbreak';

describe('word break', function() {
  var wordDict: string[];
  var s: string;
  var result: boolean;
  it('example 1', function() {
    wordDict = ["leet", "code"];
    s = "leetcode";

    result = wordBreak(s, wordDict);

    expect(result).toBe(true);
  });

  it('example 2', function() {
    wordDict = ["apple", "pen"];
    s = "applepenapple";

    result = wordBreak(s, wordDict);


    expect(result).toBe(true);
  });

  it('example 3', function() {
    wordDict = ["cats", "dog", "sand", "and", "cat"];
    s = "catsandog";

    result = wordBreak(s, wordDict);


    expect(result).toBe(false);
  });
});

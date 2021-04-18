import { largestNumber } from '../../src/med/179largestnumber';

describe('word break', function() {
  var nums: number[];
  var result: string;

  it('example 1', function() {
    nums = [10, 2];
    let result = largestNumber(nums);
    expect(result).toBe("210");
  });

  it('example 2', function(){
    nums = [3, 30, 34, 5, 9];

    let result = largestNumber(nums);

    expect(result).toBe("9534330");
  });

  it('example 3', function(){
    nums = [1];

    let result = largestNumber(nums);

    expect(result).toBe("1");
  });

  it('example 4', function(){
    nums = [10];

    let result = largestNumber(nums);

    expect(result).toBe("10");
  });

  it('multiple zeroes', function(){
    nums = [0, 0];

    let result = largestNumber(nums);

    expect(result).toBe("0");
  });

});

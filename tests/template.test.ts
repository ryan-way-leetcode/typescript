import MyTemplate from '../src/template';

describe('MyClass', function() {
  it('Value', function() {
    let result = MyTemplate.Value();
    expect(result).toBe(32);
  });

  it('AnotherValue', function() {
    let result = MyTemplate.AnotherValue();
    expect(result).toBe(40);
  });
});

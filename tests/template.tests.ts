import MyClass from '../src/template';

describe('MyClass', function() {
  it('Value', function() {
    let result = MyClass.Value();
    expect(result).toBe(32);
  });

  it('AnotherValue', function() {
    let result = MyClass.AnotherValue();
    expect(result).toBe(40);
  });
});

// We write the tests for the Modash library in
// this file in the Unit Testing chapter

import Modash from './Modash';

function assertEqual(description, actual, expected) {
  if (actual === expected) {
    console.log(`[PASS] ${description}`);
  } else {
    console.log(`[FAIL] ${description}`);
    console.log(`\tactual: '${actual}'`);
    console.log(`\texpected: '${expected}'`);
    } 
}


let actual; 
let expected; 
let string;

string = 'there was one catch, and that was CATCH-22';
actual = Modash.truncate(string, 19);
expected = 'there was one catch...';

assertEqual('`truncate()`: truncates a string', actual, expected);

actual = Modash.truncate(string, string.length);
expected = string;

assertEqual('`truncate()`: no-ops if <= length', actual, expected);

actual = Modash.capitalize(string);
expected = 'There was one catch, and that was catch-22';

assertEqual('`capitalize()`: capitalizes the string', actual, expected);

string = 'customer responded at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';

assertEqual('`camelCase()`: string with spaces', actual, expected);

string = 'customer_responded_at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';

assertEqual('`camelCase()`: string with underscores', actual, expected);

describe('Testing jest', () => {
  it('expects true to be true', () => {
    expect(true).toBe(true);
  })
})

describe('Modash', () => {
  describe('truncate', () => {
    const string = 'there was one catch, and that was CATCH-22'; 
    
    it('`truncate()`: truncates a string', () => {
      expect(
        Modash.truncate(string, 19)
      ).toEqual('there was one catch...');
    }); 

    it('no-ops if <= length', () => {
        expect(
          Modash.truncate(string, string.length)
        ).toEqual(string);
    });

  });

  describe('capitalize()', () => {
    it('capitalizes first letter, lowercases rest', () => {
      const string = 'there was one catch, and that was CATCH-22'; 
      expect(
      Modash.capitalize(string)
      ).toEqual(
      'There was one catch, and that was catch-22'
      ); 
    });
  });

  describe('camelCase()', () => {
    it('camelizes string with spaces', () => {
      const string = 'customer responded at'; 
      expect(
        Modash.camelCase(string)
        ).toEqual('customerRespondedAt');
    });

    it('camelizes string with underscores', () => { 
      const string = 'customer_responded_at'; expect(
      Modash.camelCase(string)
      ).toEqual('customerRespondedAt');
    }); 
  });
});

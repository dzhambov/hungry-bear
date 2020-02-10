import { HungryBear1 } from '../src/hungrybear-level1.js';
import { HungryBear2 } from '../src/hungrybear-level2.js';
// import { JestEnvironment } from '@jest/environment';
// import { exportAllDeclaration } from '@babel/types';

describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear1("Fuzzy");
    fuzzy.setHunger();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  test('should get very hungry if the food level drops below zero', () => {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', () => {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', ()=> {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });
}); 

describe('Wuzzy', () => {
  jest.useFakeTimers();
  let wuzzy;

  beforeEach(function() {
    wuzzy = new HungryBear2("Wuzzy");
    wuzzy.setHunger();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 7 when it is created', () => {
    expect(wuzzy.name).toEqual("Wuzzy");
    expect(wuzzy.foodLevel).toEqual(7);
  });

  test('should have a food level of 4 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(wuzzy.foodLevel).toEqual(4);
  });

  test('should get very hungry if the food level drops below zero', () => {
    wuzzy.foodLevel = 0;
    expect(wuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 7 seconds pass without feeding', () => {
    jest.advanceTimersByTime(10001);
    expect(wuzzy.didYouGetEaten()).toEqual(true);
  });
}); 
/**
 * Please, write a Person class width an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter.
 * - The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative.
 * - If the initialAge is negative, set age to 0 and print 'Age is not valid', setting age to 0.
 * - The Person class will have the following instance methods;
 *  1. yearPasses(): increases the age instance variable by 1.
 *  2. amIOld(): prints the sentence depending on age variable;
 *    # age < 13: 'You are young.'
 *    # age >= 13 and age < 18: 'You are a teenager.'
 *    # age >= 18: 'You are old.'
 */

class Person {
  age = undefined;

  // Complete the constructor
  constructor(initialAge) {

  }

  // Complete the function below
  yearPasses = function() {

  }

  // Complete the function below
  amIOld = function () {

  }
}

const person1 = new Person(-1); // Age is not valid, setting age to 0.
person1.amIOld();               // You are young
person1.yearPasses();
person1.yearPasses();
person1.amIOld();               // You are young

const person2 = new Person(10);
person2.amIOld();               // You are young
person2.yearPasses();
person2.yearPasses();
person2.yearPasses();
person2.amIOld();               // You are teenager

const person3 = new Person(16);
person3.amIOld();               // You are teenager
person3.yearPasses();
person3.yearPasses();
person3.amIOld();               // You are old

const person4 = new Person(18);
person4.amIOld();               // You are old
person4.yearPasses();
person4.yearPasses();
person4.amIOld();               // You are old
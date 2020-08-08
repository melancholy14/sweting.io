/**
 * Please, write a Phone Book class with a map variable that have a name and a phone number with key-value format.
 * 1. addPhoneNumber(): add a new phone number with a new name.
 * 2. findPhoneNumber(): find a existing phone number using a name and print `name=phoneNumber`. If an entry for the name is not found, print `Not found`
 */

class PhoneBook {
  contentMap = {};

  // Complete this function below
  addPhoneNumber = function (name, phoneNumber) {
    this.contentMap[name] = phoneNumber;
  }

  // Complete this function below
  findPhoneNumber = function (name) {
    const phoneNumber = this.contentMap[name];

    if (!phoneNumber) {
      console.log('Not found');
    } else {
      console.log(`${name}=${phoneNumber}`);
    }
  }
}

const phoneBook = new PhoneBook();
phoneBook.addPhoneNumber('sam', '010-1234-5678');
phoneBook.addPhoneNumber('tom', '070-9876-5432');
phoneBook.addPhoneNumber('harry', '019-4567-1289');

phoneBook.findPhoneNumber('sam'); // sam=010-1234-5678
phoneBook.findPhoneNumber('edward');  // Not found
phoneBook.findPhoneNumber('harry'); // harry=019-4567-1289
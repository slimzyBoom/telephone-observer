class Telephone {
  constructor() {
    this.phoneNumbers = new Map();
    this.observers = new Set();
  }

  addPhoneNumber(name, number) {
    this.phoneNumbers.set(name, number);
    console.log(`${name} added`);
  }
  removePhoneNumber(name) {
    if (this.phoneNumbers.has(name)) {
      this.phoneNumbers.delete(name);
      console.log(`${name} deleted`);
    } else {
      console.log(`Error: name ${name} does not exists`);
    }
  }
  dailPhoneNumber(name) {
    if (!this.phoneNumbers.has(name)) {
      console.log(`Error: ${name} does not exist`);
      return;
    }
    const number = this.phoneNumbers.get(name);
    console.log(`Dailing ${name} - ${number}...`);
    this.notifyObservers(name, number);
  }

  addObserver(observer) {
    this.observers.add(observer);
    console.log("Observer added");
  }
  removeObserver(observer) {
    this.observers.delete(observer);
    console.log("Observer deleted");
  }

  notifyObservers(name, number) {
    this.observers.forEach((observer) => observer.update(name, number));
  }
}

class PhoneNumberObserver {
  update(name, number) {
    console.log(`Observer 1: ${name} - ${number}`);
  }
}

class DailingObserver {
  update(name, number) {
    console.log(`Observer 2: Now dailing ${name} - ${number}`);
  }
}

const telephone = new Telephone();
const observer1 = new PhoneNumberObserver();
const observer2 = new DailingObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("Okenwa", "09022094356");
telephone.addPhoneNumber("Uchechukwu", "08122087133");

telephone.dailPhoneNumber("Okenwa");
telephone.dailPhoneNumber("Uchechukwu");
telephone.dailPhoneNumber("Valentine");

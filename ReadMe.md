# Telephone Observer Pattern

## Overview

This project implements a simple **Telephone** system using the **Observer Pattern** in JavaScript. The system allows adding, removing, and dialing phone numbers while notifying observers whenever a number is dialed.

## Features

- Add a new phone number with the owner's name.
- Remove a phone number by the owner's name.
- Dial a phone number by the owner's name (only if it exists).
- Attach multiple observers who get notified when a number is dialed.
- Two observer types:
  - `PhoneNumberObserver` logs the name and number being dialed.
  - `DailingObserver` logs a formatted dialing message.

## Code Structure

### **Classes**

#### `Telephone`

- **`addPhoneNumber(name, number)`**: Adds a phone number with an owner's name.
- **`removePhoneNumber(name)`**: Removes a phone number by name.
- **`dailPhoneNumber(name)`**: Dials a number and notifies observers.
- **`addObserver(observer)`**: Adds an observer.
- **`removeObserver(observer)`**: Removes an observer.
- **`notifyObservers(name, number)`**: Notifies all observers when a number is dialed.

#### `PhoneNumberObserver`

- **`update(name, number)`**: Logs the dialed name and number.

#### `DailingObserver`

- **`update(name, number)`**: Logs a formatted dialing message.

## Example Usage

```javascript
const telephone = new Telephone();
const observer1 = new PhoneNumberObserver();
const observer2 = new DailingObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("Okenwa", "09022094356");
telephone.addPhoneNumber("Uchechukwu", "08122087133");

telephone.dailPhoneNumber("Okenwa");
telephone.dailPhoneNumber("Uchechukwu");
telephone.dailPhoneNumber("Valentine"); // Error: name does not exist
```

## Expected Output

```
Observer added
Observer added
Okenwa added
Uchechukwu added
Dailing Okenwa - 09022094356...
Observer 1: Okenwa - 09022094356
Observer 2: Now dailing Okenwa - 09022094356
Dailing Uchechukwu - 08122087133...
Observer 1: Uchechukwu - 08122087133
Observer 2: Now dailing Uchechukwu - 08122087133
Error: Valentine does not exist
```

## How to Run

1. Copy the JavaScript code into a file (e.g., `telephone.js`).
2. Run the script using Node.js:
   ```sh
   node telephone.js
   ```

## Author

- **Uche** 🚀

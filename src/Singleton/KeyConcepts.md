# Instance Property

An instance property belongs to each object (instance) of a class.

Every object gets its own copy
Changing one object does NOT affect others
Example (TypeScript / JavaScript)
```
class User {
  name: string;   // instance property

  constructor(name: string) {
    this.name = name;
  }
}

const user1 = new User("Farhad");
const user2 = new User("John");

user1.name = "Rahim";

console.log(user1.name); // Rahim
console.log(user2.name); // John (not affected)
```

✅ Each object has its own name

# Class Property (Static Property)

A class property belongs to the class itself, not the objects.

Shared among all instances
Use static keyword
Example
```
class User {
  static company = "Nifty IT";  // class property
}

console.log(User.company); // Nifty IT

You access it using class name, not object.

const user = new User();

// ❌ wrong
console.log(user.company);

// ✅ correct
console.log(User.company);
```

🔥 Real World Example

```
class Employee {
  static company = "Google";  // class property
  name: string;               // instance property

  constructor(name: string) {
    this.name = name;
  }
}

const e1 = new Employee("Farhad");
const e2 = new Employee("John");

console.log(e1.name);        // Farhad
console.log(e2.name);        // John

console.log(Employee.company); // Google
```

# Quick Comparison

| Feature | Instance Property | Class Property |
|---------|------------------|---------------|
| Belongs to | Object | Class |
| Shared? | ❌ No | ✅ Yes |
| Keyword | none | static |
| Access | object.property | Class.property |

# When to Use Which?

Use Instance Property when:

Data is different per object (name, email, id)

Use Class Property when:

Data is shared (company name, config, counter)
//-----------map()-----------
// Problem: You are given an array of user objects. Each user object contains an id, firstName, lastName, and dateOfBirth. Write a function that returns a new array where each user has a fullName property (concatenation of firstName and lastName) and an age property based on dateOfBirth.
const users = [
  { id: 1, firstName: "John", lastName: "Doe", dateOfBirth: "1990-01-15" },
  { id: 2, firstName: "Jane", lastName: "Smith", dateOfBirth: "1985-10-30" },
];
const mappedUsers = users.map((user, key) => {
  const fullName =
    user.firstName.toUpperCase() + " " + user.lastName.toUpperCase();

  const [dobYear, dobMonth, dobDay] = user.dateOfBirth.split("-").map(Number);
  const dob = new Date(dobYear + 1900, dobMonth - 1, dobDay); // Add 1900 if the year is in 'yy' format
  const today = new Date();
  let age = today.getFullYear() - dobYear;
  const monthDifference = today.getMonth() - dob.getMonth();
  const dayDifference = today.getDate() - dob.getDate();
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  const transformedUser = {
    fullName: fullName,
    age: age,
  };
  return transformedUser;
});
console.log("1. Map: ", mappedUsers);

// Problem: Given an array of sales records, each containing a product, quantity, and price, create a summary report that calculates the total sales amount for each product and returns an array of objects in the format { product: 'Product A', totalSales: 1000 }.
const sales = [
  { product: "Product A", quantity: 5, price: 200 },
  { product: "Product B", quantity: 2, price: 300 },
  { product: "Product A", quantity: 3, price: 200 },
  { product: "Product C", quantity: 1, price: 400 },
];
const salesReport = sales.map((sale, key) => {
  let report = [];
  let obj = {};
  sales.map((childSale, chileKey) => {
    if (sale.product === childSale.product) {
      const obj = {
        product: sale.product,
        quantity: sale.quantity + childSale.quantity,
        price:
          sale.price * sale.quantity + childSale.price * childSale.quantity,
      };
      report.push(obj);
    }
  });
  obj = {
    product: sale.product,
    quantity: sale.quantity,
    price: sale.price * sale.quantity,
  };
  report.push(obj);
  return report;
});
console.log("2. Map: ", salesReport);
//-----------filter()-----------
// Problem: You have an array of products. Each product has a name, price, and category. Write a function that returns a filtered array of products that belong to a specific category and have a price greater than or equal to 600.
const products = [
  { name: "Laptop", price: 1500, category: "electronics" },
  { name: "Phone", price: 800, category: "electronics" },
  { name: "Ipad", price: 500, category: "electronics" },
  { name: "Shoes", price: 80, category: "fashion" },
  { name: "Watch", price: 200, category: "fashion" },
];
const filteredProducts = products.filter((product) => {
  const filteredProduct =
    product.category === "electronics" && product.price > 600;
  return filteredProduct;
});
console.log("2. Filter: ", filteredProducts);
//-----------find()-----------
// Problem: You are given an array of students, where each student has a name and scores (array of test scores). Find the first student who has a test score below 40.
const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [65, 70, 35] },
  { name: "Charlie", scores: [88, 92, 100] },
];
const failedStudent = students.find((student) => {
  const failedStudent = student.scores.find((score) => score < 40);
  return failedStudent;
});
console.log("3. Find: ", failedStudent);
//-----------reduce()-----------
// Problem: Given an array of employee objects where each object contains an id, name, and salary, write a function that returns the total salary of all employees who earn more than $50,000.
const employees = [
  { id: 1, name: "Alice", salary: 60000 },
  { id: 2, name: "Bob", salary: 45000 },
  { id: 3, name: "Charlie", salary: 70000 },
];

const desiredSalariedEmployees = employees.reduce((accumulator, current) => {
  if (current.salary > 50000) {
    return accumulator + current.salary;
  }
  return accumulator;
}, 0);

console.log("4. Reduce: ", desiredSalariedEmployees);
//-----------slice()-----------
// Problem: You are given an array of dates as strings. Write a function that extracts and returns the last 5 dates in the array.
const dates = [
  "2023-01-01",
  "2023-02-14",
  "2023-03-30",
  "2023-04-15",
  "2023-05-10",
  "2023-06-25",
  "2023-07-18",
  "2023-08-22",
];
// Result:
// ['2023-04-15', '2023-05-10', '2023-06-25', '2023-07-18', '2023-08-22']
const splicedDates = dates.slice(-5);
console.log("5. Slice: ", splicedDates);

/**
 * Datatype
 * Varaibles
 * Array
 * Object
 * Functions
 * Classes
 * Inhertance
 * interface
 *
 */
/**
 * string
 * Number
 * boolean
 * undefined
 * null
 * any
 */
// let fname: string = "ali";

// fname = "ahmed";

// let num: boolean = true;

// num = false;
// console.log(num);

// let fname: string = "mona";

// fname = 10;

// fname = boolean;
// let fname: any = "mona"; // string

// fname = 10; // number

// fname = true;
// fname = 0;

// union bet datatype
// let fname: string | number | boolean = 10;

// fname = "alaa";

// fname = true;
// fname = [];

// fname = "ali"; // boolean

// type x = string | any;

// let fname: x = 10;

// fname = "mona";
// fname = true;
/**==============Object============ */
// type x = string | boolean;
// let person: { fname: x; age: number } = {
// 	fname: "ali",
// 	age: 10,
// };

// person.fname = true;

// person.age = "13";
// // person = 10; // error
// person = { fname: "alaa", age: 10 }; //

/**================== */

// let arr: any[] = [];

// arr.push("ali");
// arr.push(true);
// arr.push(12);
// console.log(arr);

// let products: { id: number; productName: string }[] = [];

// products.push({ id: 1, productName: "laptop" });
// products.push({ id: 2, productName: "sumsung" });

// console.log(products);

// let fname;

// console.log(fname);

/**============ Functions ===========
 * -----------------------------------
 *      == function statement
 *      == function expression
 *
 *  =========== */

// function display(a: number, b: number, ...w: string[]) {
// 	console.log(w);
// }

// display(3, 6, "mona", "ali"); // error
// display(3, "5");
// display(1, "ali"); // error
/**==== Tuble ==== */

// let arr: [string, number] = ["mona", 10];

// function show(fname: string, age: number) {
// 	console.log(`${fname} : ${age}`);
// }

// // tuble
// let result: [string, number] = ["mona", 12];
// show(...result); // error
/**================================= */

// class Product {
// 	constructor(
// 		public id: number,
// 		public productName: string,
// 		private price: number
// 	) {}

// 	// getter , setter

// 	get getPrice() {
// 		return this.price;
// 	}

// 	set setPrice(value) {
// 		this.price = value;
// 	}
// }

// let p1 = new Product(1, "laptop", 200);
// let p2 = new Product(2, "susumg", 400);

// p1.setPrice = 4666;
// console.log(p1.getPrice);
// p1.productName = "new Product"; // set
// console.log(p1.productName); // get
// p1.setPrice(400000);
// console.log(p1.getPrice());
// interface Iproduct {
// 	id: number;
// 	productName: string;
// 	price?: number;
// 	quantity: number;
// 	discount: (discount: number) => number; // signature
// }

// // let product: Iproduct = { id: 1, productName: "p1", price: 10, quantity: 10 };

// class Product implements Iproduct {
// 	constructor(
// 		public id: number,
// 		public productName: string,
// 		public price: number,
// 		public quantity: number
// 	) {}
// 	discount(discount: number): number {
// 		return 2;
// 	}
// }

// let p1 = new Product(1, "laptop", 300, 10);
// let p2 = new Product(2, "Sumsung", 100, 5);
// let p3 = new Product(3, "Iphone", 400, 6);

// console.log(p1.discount(3));

// super class
// class Person {
// 	constructor(public fname: string, public lname: string) {}
// 	display(): void {
// 		console.log(`${this.fname} : ${this.lname}`);
// 	}
// }

// // subClass
// class User extends Person {
// 	constructor(fname: string, lname: string, public pass: number) {
// 		super(fname, lname);
// 	}
// 	display(): void {
// 		console.log(`${this.fname} : ${this.lname} ${this.pass}`);
// 	}
// }

// let myUser = new User("ali", "ahmed", 1234);

// console.log(myUser.pass);
// myUser.display();

// // let str = "Hello World!";

// // console.log(str);

// class Employee {
//   // Field
//   // protected name: string;
//   // public position: string;
//   // public age?: number;

//   // Constructor
//   constructor(
//     protected name: string,
//     public position: string,
//     public age?: number
//   ) {}

//   // Method
//   work() {
//     console.log(`Hello! ${this.name} 입니다!`);
//   }
// }

// // const employee1 = new Employee();
// // console.log(employee1);
// // employee1.work();

// // const employee2 = new Employee("Henry", 20, "Striker");
// // console.log(employee2);

// // employee2.work();

// const employee3 = new Employee("Rooney", "Striker", 30);
// // employee3.name = "Son";

// console.log(employee3);
// employee3.work();

// // const employee4: Employee = {
// //   name: "",
// //   position: "",
// //   age: 20,
// //   work: () => {},
// // };

// class ExecutiveOfficer extends Employee {
//   officeNumber: number;

//   constructor(
//     name: string,
//     position: string,
//     officeNumer: number,
//     age: number
//   ) {
//     super(name, position, age);
//     this.officeNumber = officeNumer;
//   }

//   work2() {
//     console.log(`반가워요! ${this.name} 입니다!`);
//   }
// }

// // const employee5 = new ExecutiveOfficer("Messi", "FW", 1, 20);
// // console.log(employee5);

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동가능!`);
  }
}

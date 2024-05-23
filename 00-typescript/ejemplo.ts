let a: number = 1;
let b = "string";

b = 6;

let c: number | string = 1;
c = "texto";

interface A {
  param1: number;
  param2: string;
  param3: number | string;

  method1(): void;
}

type B = {
  param1: number;
  param2: string;
  param3: number | string;

  method1(): void;
};

class Aimpl implements A {
  param1: number = 1;
  param2: string = "2";
  param3: number | string = 3;

  method1(): void {
    console.log("Aimpl method1");
  }
}

class Aextends extends Aimpl {
  param4: any;

  method2(): void {
    console.log("Aextends method2");
  }
}

interface C<T> {
  a: A;
  b: T[];
}

type D<T> = {
  a: A;
  b: T[];
};

type functionType = (param1: number, param2: string) => A;
const fun: functionType = (p1: number, p2: string) => {
  return new Aimpl();
};

function fun2(param1: number, param2: number): A {
  return new Aimpl();
}

/*Type '(param1: number, param2: number) => A' is not assignable to type 'functionType'.
  Types of parameters 'param2' and 'param2' are incompatible.
  Type 'string' is not assignable to type 'number'.*/
const fun3: functionType = fun2;

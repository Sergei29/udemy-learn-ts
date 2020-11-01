let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Serge";

if (typeof userInput === "string") {
  userName = userInput;
}

let errorHandling: (msg: string, code: number) => never;

const errorMessage = (message: string, code: number) => {
  throw new Error(`${message}, error code: ${code}`);
};

errorHandling = errorMessage;

errorHandling("not found.", 404);

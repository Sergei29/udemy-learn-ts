var userInput;
var userName;
userInput = 5;
userInput = "Serge";
if (typeof userInput === "string") {
    userName = userInput;
}
var errorHandling;
var errorMessage = function (message, code) {
    throw new Error(message + ", error code: " + code);
};
errorHandling = errorMessage;
errorHandling("not found.", 404);

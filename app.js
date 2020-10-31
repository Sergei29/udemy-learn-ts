// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Serge",
//   age: 45,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Serge",
    age: 45,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
var favouriteActivities;
favouriteActivities = ["Sports"];
console.log("person: ", person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERROR - good !
}

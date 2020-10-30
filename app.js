var person = {
    name: "Serge",
    age: 45,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
var favouriteActivities;
favouriteActivities = ["Sports"];
console.log("person: ", person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERROR - good !
}
person.role.push("consultant");
console.log("person", person);

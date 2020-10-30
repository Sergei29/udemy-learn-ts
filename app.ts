const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Serge",
  age: 45,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favouriteActivities: string[];

favouriteActivities = ["Sports"];

console.log("person: ", person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); !!! ERROR - good !
}

person.role.push("consultant");
console.log("person", person);

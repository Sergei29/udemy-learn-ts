// VALIDATION WITH DECORATORS
interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[]; // ['required', 'positive', ...]
  };
}

const registeredValidators: ValidatorConfig = {};

function RequiredField(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["required"],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["positive"],
  };
}

function validate(obj: Record<string, any>) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) return true;
  let isValid = true;
  for (const key in objValidatorConfig) {
    for (const validator of objValidatorConfig[key]) {
      switch (validator) {
        case "required":
          isValid = isValid && obj[key].trim().length > 0;
          break;
        case "positive":
          isValid = isValid && obj[key] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course {
  @RequiredField
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = document.getElementById("title") as HTMLInputElement;
  const priceInput = document.getElementById("price") as HTMLInputElement;

  const title = titleInput.value;
  const price = +priceInput.value;

  const createdCoure = new Course(title, price);

  if (!validate(createdCoure)) {
    alert("Form data is invalid. try again.");
    return;
  }

  console.log("createdCoure :>> ", createdCoure);
});

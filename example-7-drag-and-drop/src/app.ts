function autoBind(
  _target: any,
  _propertyName: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalDescriptor = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalDescriptor.bind(this);
    },
  };

  return adjustedDescriptor;
}

class ProjectInput {
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  templateElement: HTMLTemplateElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    // document.importNode() is a method in JavaScript used to import a
    // node from another document into the current document.
    // This method is commonly used when you want to copy nodes
    // (such as elements or attributes) from one document to another.
    // The imported node is not automatically added to the document;
    // you need to explicitly append it to the desired location within the current document.
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild! as HTMLFormElement;
    this.element.id = "user-input";
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.configure();
    this.attach();
  }

  @autoBind
  submitHandler(event: Event) {
    event.preventDefault();
    // console.log(this.titleInputElement.value);
    const userInput = this.gatherUserInput();
    this.clearInputs();
    console.log(userInput);
  }

  private gatherUserInput(): [string, string, number] | void {
    const title = this.titleInputElement.value;
    const description = this.descriptionInputElement.value;
    const people = this.peopleInputElement.value;
    if (title.length === 0 || description.length === 0 || people.length === 0) {
      alert("please fill all inputs!");
      return;
    } else {
      return [title, description, +people];
    }
  }

  clearInputs(){
    this.titleInputElement.value='';
    this.descriptionInputElement.value='';
    this.peopleInputElement.value='';
  }

  private configure = () => {
    this.element.addEventListener("submit", this.submitHandler);
  };

  private attach = () => {
    this.hostElement.appendChild(this.element);
  };
}

const projectInput = new ProjectInput();

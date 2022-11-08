// Classes

// Template for Objects 
// User class

class User{
    name: string = "";
    age: number = 0; 
    occupation: string = '';
    height: string ='';
    
    // A method is a function defined in a class
    eat(){
      console.log("I am eating.")
    }
  
    logMyName(){
      // logging the user's name
      console.log("My name is " + this.name)
    }
  
    logMyDetails(){
      // Log my name to the console.
      this.logMyName();    
      // Log my age to the console
      console.log("My age is " + this.age)
      // Log my occupation to the console
      console.log("My occupation is " + this.occupation)
    }
  }
  let person = new User();
person.name = "Amy";
person.age = 25;
person.height = "5'6";
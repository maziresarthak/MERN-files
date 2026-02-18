const person = {
  name: "Sarthak",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

// Now usually we are expecting that no matter what happens but this will always have context of sarthak which is correct at some extent
person.greet();

// Now at some places we can be wrong :
const greetFunction = person.greet; // We are just transfereing the reference onto another variable
greetFunction(); // Now so far we have been just executing this whole person directly on line 9 in that case it has the context what does it mean by this but as soo as we transfer it to another var turns out the context is actually lost in that case, as soon as it is transfered from one var to another var the context is lost for ex : I told you I got fan and when you said to someone else that he got a fan the context is missing, you understand you do have fans on yt but the other person does'nt understand he might be thinking of ceiling fans or table fans so the context is missing(ex given by the course guy hitesh)

// If you really want to grab the context in this case you have to literally go and bind the context, you have to tell the backstory of it
const boundGreet = person.greet.bind({ name: "Atharv" });
boundGreet();
// Now this time he knows what's the context of it

// wrap the whole program in an immediately-invoked function expression
// (prevents namespace pollution)
// (note we still need to manually move the `use strict` emitted by
// the TS compiler inside the function)
(function () {
    "use strict";
    // typescript works with conventional class-based OO which gets compiled
    // into JS's prototype-based OO
    class Student {
        // NOTE: Do the constructor's args need to be declared public?
        // if not, what is the consequence of omitting the public declaration?
        constructor(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    const user = { firstName: "Jane", lastName: "Userson" };
    const user2 = [0, 1, 2];
    document.body.innerHTML = greeter(user);
    // document.body.innerHTML = greeter(user2) // this should cause a compiler error
})();

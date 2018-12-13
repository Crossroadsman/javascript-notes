// wrap the whole program in an immediately-invoked function expression
// (prevents namespace pollution)
// (note we still need to manually move the `use strict` emitted by
// the TS compiler inside the function)
(function () {
    // typescript works with conventional class-based OO which gets compiled
    // into JS's prototype-based OO
    class Student {
        fullName: string;
        // NOTE: Do the constructor's args need to be declared public?
        // if not, what is the consequence of omitting the public declaration?
        constructor(public firstName: string, public middleInitial: string,
                    public lastName: string) {
            this.fullName = firstName + " " + middleInitial + " " + lastName
        }
    }

    // interface seems approximately equivalent to a Swift protocol
    interface Person {
        firstName: string
        lastName: string
    }

    function greeter(person: Person) {
        return "Hello, " + person.firstName + " " + person.lastName
    }

    const user = { firstName: "Jane", lastName: "Userson" }
    const user2 = [0, 1, 2]

    document.body.innerHTML = greeter(user)
    // document.body.innerHTML = greeter(user2) // this should cause a compiler error
})()

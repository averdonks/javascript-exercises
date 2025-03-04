const findTheOldest = function(arr) {
    let age = 0;
    let greatestAge = 0;
    let oldest = {};

    arr.map((person) => {
        if (!person.hasOwnProperty("yearOfDeath")) {
            person.yearOfDeath = new Date().getFullYear();
        }
        age = person.yearOfDeath - person.yearOfBirth;
        if (age > greatestAge) {
            greatestAge = age;
            oldest = person;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

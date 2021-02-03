//Child er parent ke niye aste ja korte hobe//
class parent {
    constructor(fatherName) {
        this.fatherName = 'Shilpani'
    }
}
class child extends parent {
    constructor(name) {
        super();
        this.name = name;
    }
}
const bassa = new child('Dusman');
const bassa2 = new child('Kris');
console.log(bassa);
console.log(bassa2)


// Fullname akare ante sudumatro function diye call korte hobe babbagi sob same//
class parent {
    constructor(fatherName) {
        this.fatherName = 'Shilpani'
    }
}
class child extends parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const bassa = new child('Dusman');
const bassa2 = new child('Kris');
console.log(bassa.getFullName());
console.log(bassa2.getFullName());
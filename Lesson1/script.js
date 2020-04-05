let soldier = {
    health: 400,
    armor: 100
};

let john = {
    lol: true
};

john.__proto__ = soldier;
console.log(john);

soldier.dickLength = 11;
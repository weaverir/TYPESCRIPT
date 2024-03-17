"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('hello roocket');
let fullname = 'ehsan';
let ehsan = 'sadegian';
//  vagti bekhaym voroodi ha har type i bashe az any estefade mikonim :
let list = [1, '2', true];
//  tak tak member haye array ro mishe be soorat zir type dad . esm ravesh tuple : 
let tuple = [1, '2', false];
let name2 = 'ehsan';
// estefadeye sharti az type ha vagti mikhaym type .... ya .... bashe : 
let name3 = 'ehsan';
name3 = null;
//  enum ha baraye tarif type custom khodemoon . vagti bekhaym be tabe megdar sabeto ro pas bedim estefade mishe 
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
    direction[direction["right"] = 3] = "right";
    direction[direction["left"] = 4] = "left";
})(direction || (direction = {}));
let dir = direction.up;
console.log(dir);
//  tarif anvae tabe be soorat zir 
function sum(x, y) {
    return x + y;
}
let sum2 = function (x, y) {
    return x + y;
};
console.log(sum2(1, 2));
let sum3 = (x, y) => {
    return x + y;
};
console.log(sum3(1, 2));
//  moshakhas kardan hame type haye function be soorat zir :
let sum4;
sum4 = function (x, y) {
    return x + y;
};
//  estefade sharti az ye moteghayer be soorat zir :
let sum5 = (x, y) => {
    if (y) {
        return x + y;
    }
    return x;
};
//  az rest operator ha ham mishe estefade kard be soorat zir :
let sum6 = (x, y, ...numbers) => {
    return x + y;
};
// baraye type dehi be object az halat zir estefade mishe : 
let person = {
    fullname: 'ehsan sadeghian ',
    age: (num) => {
        return ` age : ${num}`;
    }
};
let person2 = {
    fullname: 'esmail mohamadi ',
    age: (num) => {
        return ` age : ${num}`;
    }
};
// model tarif kardan class be in soorate 
class car {
    // protected zamani ke estefade beshe fgt to class haye farzand mored estefade garar migire o to object haye estefade shode mored estefade nist 
    constructor(model, year, horsepower) {
        this.year = year;
        this.model = model;
        this.horsepower = horsepower;
    }
    //  ba inke model private bood vali ba method set toonestim model ro dar biroon az class va dar object farzand dastrasi dashte bashim :)
    set setModel(theModel) {
        this.model = theModel;
    }
    // baraye dastrasi be property private ya protected az method get estefade mikonim . 
    get getModel() {
        return this.model;
    }
}
// obj jadidi az class misazim ke broperty haye private dare 
let carNew = new car('207', 2017, 100);
// ba method set kardan toonestim be model ke private hast dastrasi dashte bashim o taghiresh bedim 
carNew.setModel = '405';
console.log(carNew);
// dar set nemitonin be soorat mostagim be property dastrasi dashte bashin vali dar get mitoonin mostagiman be method dast rasi dashte bashin pass set baraye tagir megdar va get baraye dastrasi mostagim estefade mishe 
console.log(carNew.getModel);
class car2 {
    constructor(model, year) {
        this.model = model;
        this.year = year;
        // age gabl az property haye constructor public benevisim niaz nist tarif konim o besoorat automatic oona ro property talagi mikone 
        this.model = model;
        this.year = year;
    }
}
// abstract class ha noi class hastan ke az oona nemishe obj sakht fgt mitoonin azash baraye ers bari estefade konin .
class carAB {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    foo() {
        console.log(this.bar());
    }
}
// az abstract class ye class dg misazim va az oon class ye object misazim . estefade mostagim nadarim 
class irankhodro extends carAB {
    // age bar tarif nemishod inja error migereftim . abstract karbord aslish ine :)
    bar() {
        return 'this is bar :)';
    }
}
let pegoo = new irankhodro('405');
console.log(pegoo.foo());
class Static {
    constructor(model, year) {
        Static.model = model;
        this.year = year;
    }
    //estefade az method static be in soorate ke mibinin :) ba in method dg niaz nadarid object az class be vojood biarid bad behesh dast rasi dashe bashid .
    static getmodel() {
        return Static.model;
    }
}
console.log(Static.getmodel());
// design pattern haro az roocket yad begir . 
// age bekhaym ke ye class dorost konim ke az oon nashe ye object sakht be soorat zir amal mikonim 
class singletone {
    // chon az private estefade kardim nemishe ba new azash object sakht chon kharej az class constructor gabele dastrasi nist :)
    constructor() { }
    static getinstance() {
        // inja ye shart mizarim ke age objecti az singletone vojood nadasht ye object azash besaze age vojood dasht gabli ro return kone intori chand ta object dg sakhte nemishe 
        if (!singletone.instance) {
            singletone.instance = new singletone;
        }
        return singletone.instance;
    }
}
// fgt be insoorat mishe azash object sakht 
let obj1 = singletone.getinstance();
let obj2 = singletone.getinstance();
// ba mogayese in 2 ta object sakhte shode mibinin ke true bar migardoone dar gheyr in soorat har bar ye object jadid misakht va false mishod :)
console.log(obj1 === obj2);
function printlabel(obj) {
    console.log(obj.label);
}
let obj21 = { size: 20, label: 'size is 20' };
let obj22 = { size: 30, label: 'size is 30' };
printlabel(obj21);
let mySearch = (source, subString) => {
    let result = source.search(subString);
    return result > -1;
};
let mySearchtype = (source, subString) => {
    let result = source.search(subString);
    return result > -1;
};
// alan class hayi ke tarif mikonim bayad be form interface person bashe va ba code zir estefade mishe 
class ali {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.name = name;
        this.family = family;
        this.age = age;
    }
    fullname() {
        return `this person is ${this.name} ${this.family} and he is ${this.age} years old `;
    }
}
class hesam {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.name = name;
        this.family = family;
        this.age = age;
    }
    fullname() {
        return `this person is ${this.name} ${this.family} and he is ${this.age} years old `;
    }
}
class mehdi {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.name = name;
        this.family = family;
        this.age = age;
    }
    fullname() {
        return `this person is ${this.name} ${this.family} and he is ${this.age} years old `;
    }
}
let user = new hesam('hesam', ' mousavi', 25);
console.log(user);
// generic ha 
// age type moshakhasi ro moshakhas konim dg nemitoonim az type haye dg estefade konim baraye on parametr
// age ham type ro any garar bedim ke voroodi haye motefavet dashte bashim nemitoonim az method haye marboot be oon type khas estefade konim 
// baraye hal in moshkel az <> estefade mikonim va ye harf random bozorg mesle <T> estefade mikonim va az oon be onvan type estefade mikonim 
function logData(data) {
    return data;
}
//va dar akhar vagti darim megdar dehi mikonim type khodemoon ro dakhel <> be soorat <number> garar midim intori az method haye marbood be oon type mitoonim estefade konim 
logData('hello roocket ');
let lIst = [1, 2, 3, 4, 5];
let listgeneric = [1, 2, 3, 4];
function logDataarray(data) {
    return data;
}
console.log(logDataarray(['2', '3']));
// to tabe ha be in soorat estefade mishe 
let mylogfunc = function (data) {
    return data;
};
let mylogfuncinterface = function (data) {
    return data;
};
// inja dg niaze ke type ro be soorat <number> tarif konin ya har chizi ke lazeme 
//bayad degat konin ke moge tarif function niaz darin type ha moshakhas beshe to ye torayi mahdood konin voroodi hasho ya na mikhayn bad tarif tabe o estefade azash type haro moshakhas konin 
let mylogfuncinterface2 = function (data) {
    return data;
};
let mylogfunctype = function (data) {
    return data;
};
let name_er = '22';
//generic ha dar class ha 
// baz az <T> estefade mikonim baraye type dehi be class va moge sakht object behesh type midim
// extend noe type maro mahdood mikone be number va string . yani moge sakht object nemitoonin chizi joz number ya string behesh pass bedin 
// ba gozashtan , va estefade az ye harf dg mesle U mitoonin type have dg ham dashte bashin vali moge sakht object bayad be in soorat megdar bedin be type ha <number,string>  
class myarray {
    // migim data ro ke typesh ro badan moshakhas mikonam ro be onvan voroodi begir ke typesh ro moshakhas mikonim badan 
    constructor(data) {
        this.data = data;
    }
    additem(item) {
        this.data.push(item);
    }
    getitem(index) {
        return this.data[index];
    }
}
let listarray = new myarray([1, 2, 3, 4]);
listarray.additem(444);
console.log(listarray.data);
function GetMyInfo(name, age) {
    return `my name is ${name} and im ${age} years old `;
}
// estefade ham zaman 2 ta generic kenar ham ro mibinin 
let Ehsan = GetMyInfo('ehsan sadeghian', 27);
console.log(Ehsan);
// decorator ha 
function auth(constractor) {
    return class extends constractor {
        constructor() {
            super(...arguments);
            this.auth = false;
        }
    };
}
// baraye estefade az decorator to file tsconfig.json experimentaldecorators ro true konin o save konin 
let user_decorator = class user_decorator {
    constructor(message) {
        this.message = message;
        this.name = 'hesam';
    }
};
user_decorator = __decorate([
    auth
], user_decorator);
let user_dec = new user_decorator('hello hesam');

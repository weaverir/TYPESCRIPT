var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('hello roocket');
var fullname = 'ehsan';
var ehsan = 'sadegian';
//  vagti bekhaym voroodi ha har type i bashe az any estefade mikonim :
var list = [1, '2', true];
//  tak tak member haye array ro mishe be soorat zir type dad . esm ravesh tuple : 
var tuple = [1, '2', false];
var name2 = 'ehsan';
// estefadeye sharti az type ha vagti mikhaym type .... ya .... bashe : 
var name3 = 'ehsan';
name3 = null;
//  enum ha baraye tarif type custom khodemoon . vagti bekhaym be tabe megdar sabeto ro pas bedim estefade mishe 
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
    direction[direction["right"] = 3] = "right";
    direction[direction["left"] = 4] = "left";
})(direction || (direction = {}));
var dir = direction.up;
console.log(dir);
//  tarif anvae tabe be soorat zir 
function sum(x, y) {
    return x + y;
}
var sum2 = function (x, y) {
    return x + y;
};
console.log(sum2(1, 2));
var sum3 = function (x, y) {
    return x + y;
};
console.log(sum3(1, 2));
//  moshakhas kardan hame type haye function be soorat zir :
var sum4;
sum4 = function (x, y) {
    return x + y;
};
//  estefade sharti az ye moteghayer be soorat zir :
var sum5 = function (x, y) {
    if (y) {
        return x + y;
    }
    return x;
};
//  az rest operator ha ham mishe estefade kard be soorat zir :
var sum6 = function (x, y) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    return x + y;
};
// baraye type dehi be object az halat zir estefade mishe : 
var person = {
    fullname: 'ehsan sadeghian ',
    age: function (num) {
        return " age : " + num;
    }
};
var person2 = {
    fullname: 'esmail mohamadi ',
    age: function (num) {
        return " age : " + num;
    }
};
// model tarif kardan class be in soorate 
var car = /** @class */ (function () {
    // protected zamani ke estefade beshe fgt to class haye farzand mored estefade garar migire o to object haye estefade shode mored estefade nist 
    function car(model, year, horsepower) {
        this.year = year;
        this.model = model;
        this.horsepower = horsepower;
    }
    Object.defineProperty(car.prototype, "setModel", {
        //  ba inke model private bood vali ba method set toonestim model ro dar biroon az class va dar object farzand dastrasi dashte bashim :)
        set: function (theModel) {
            this.model = theModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "getModel", {
        // baraye dastrasi be property private ya protected az method get estefade mikonim . 
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    return car;
}());
// obj jadidi az class misazim ke broperty haye private dare 
var carNew = new car('207', 2017, 100);
// ba method set kardan toonestim be model ke private hast dastrasi dashte bashim o taghiresh bedim 
carNew.setModel = '405';
console.log(carNew);
// dar set nemitonin be soorat mostagim be property dastrasi dashte bashin vali dar get mitoonin mostagiman be method dast rasi dashte bashin pass set baraye tagir megdar va get baraye dastrasi mostagim estefade mishe 
console.log(carNew.getModel);
var car2 = /** @class */ (function () {
    function car2(model, year) {
        this.model = model;
        this.year = year;
        // age gabl az property haye constructor public benevisim niaz nist tarif konim o besoorat automatic oona ro property talagi mikone 
        this.model = model;
        this.year = year;
    }
    return car2;
}());
// abstract class ha noi class hastan ke az oona nemishe obj sakht fgt mitoonin azash baraye ers bari estefade konin .
var carAB = /** @class */ (function () {
    function carAB(model) {
        this.model = model;
        this.model = model;
    }
    carAB.prototype.foo = function () {
        console.log(this.bar());
    };
    return carAB;
}());
// az abstract class ye class dg misazim va az oon class ye object misazim . estefade mostagim nadarim 
var irankhodro = /** @class */ (function (_super) {
    __extends(irankhodro, _super);
    function irankhodro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // age bar tarif nemishod inja error migereftim . abstract karbord aslish ine :)
    irankhodro.prototype.bar = function () {
        return 'this is bar :)';
    };
    return irankhodro;
}(carAB));
var pegoo = new irankhodro('405');
console.log(pegoo.foo());
var Static = /** @class */ (function () {
    function Static(model, year) {
        Static.model = model;
        this.year = year;
    }
    //estefade az method static be in soorate ke mibinin :) ba in method dg niaz nadarid object az class be vojood biarid bad behesh dast rasi dashe bashid .
    Static.getmodel = function () {
        return Static.model;
    };
    return Static;
}());
console.log(Static.getmodel());
// design pattern haro az roocket yad begir . 
// age bekhaym ke ye class dorost konim ke az oon nashe ye object sakht be soorat zir amal mikonim 
var singletone = /** @class */ (function () {
    // chon az private estefade kardim nemishe ba new azash object sakht chon kharej az class constructor gabele dastrasi nist :)
    function singletone() {
    }
    singletone.getinstance = function () {
        // inja ye shart mizarim ke age objecti az singletone vojood nadasht ye object azash besaze age vojood dasht gabli ro return kone intori chand ta object dg sakhte nemishe 
        if (!singletone.instance) {
            singletone.instance = new singletone;
        }
        return singletone.instance;
    };
    return singletone;
}());
// fgt be insoorat mishe azash object sakht 
var obj1 = singletone.getinstance();
var obj2 = singletone.getinstance();
// ba mogayese in 2 ta object sakhte shode mibinin ke true bar migardoone dar gheyr in soorat har bar ye object jadid misakht va false mishod :)
console.log(obj1 === obj2);
function printlabel(obj) {
    console.log(obj.label);
}
var obj21 = { size: 20, label: 'size is 20' };
var obj22 = { size: 30, label: 'size is 30' };
printlabel(obj21);
var mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var mySearchtype = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// alan class hayi ke tarif mikonim bayad be form interface person bashe va ba code zir estefade mishe 
var ali = /** @class */ (function () {
    function ali(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.name = name;
        this.family = family;
        this.age = age;
    }
    ali.prototype.fullname = function () {
        return "this person is " + this.name + " " + this.family + " and he is " + this.age + " years old ";
    };
    return ali;
}());
var hesam = /** @class */ (function () {
    function hesam(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.name = name;
        this.family = family;
        this.age = age;
    }
    hesam.prototype.fullname = function () {
        return "this person is " + this.name + " " + this.family + " and he is " + this.age + " years old ";
    };
    return hesam;
}());
var mehdi = /** @class */ (function () {
    function mehdi(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.name = name;
        this.family = family;
        this.age = age;
    }
    mehdi.prototype.fullname = function () {
        return "this person is " + this.name + " " + this.family + " and he is " + this.age + " years old ";
    };
    return mehdi;
}());
var user = new hesam('hesam', ' mousavi', 25);
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
var lIst = [1, 2, 3, 4, 5];
var listgeneric = [1, 2, 3, 4];
function logDataarray(data) {
    return data;
}
console.log(logDataarray(['2', '3']));
// to tabe ha be in soorat estefade mishe 
var mylogfunc = function (data) {
    return data;
};
var mylogfuncinterface = function (data) {
    return data;
};
// inja dg niaze ke type ro be soorat <number> tarif konin ya har chizi ke lazeme 
//bayad degat konin ke moge tarif function niaz darin type ha moshakhas beshe to ye torayi mahdood konin voroodi hasho ya na mikhayn bad tarif tabe o estefade azash type haro moshakhas konin 
var mylogfuncinterface2 = function (data) {
    return data;
};
var mylogfunctype = function (data) {
    return data;
};
var name_er = '22';
//generic ha dar class ha 
// baz az <T> estefade mikonim baraye type dehi be class va moge sakht object behesh type midim
// extend noe type maro mahdood mikone be number va string . yani moge sakht object nemitoonin chizi joz number ya string behesh pass bedin 
// ba gozashtan , va estefade az ye harf dg mesle U mitoonin type have dg ham dashte bashin vali moge sakht object bayad be in soorat megdar bedin be type ha <number,string>  
var myarray = /** @class */ (function () {
    // migim data ro ke typesh ro badan moshakhas mikonam ro be onvan voroodi begir ke typesh ro moshakhas mikonim badan 
    function myarray(data) {
        this.data = data;
    }
    myarray.prototype.additem = function (item) {
        this.data.push(item);
    };
    myarray.prototype.getitem = function (index) {
        return this.data[index];
    };
    return myarray;
}());
var listarray = new myarray([1, 2, 3, 4]);
listarray.additem(444);
console.log(listarray.data);
function GetMyInfo(name, age) {
    return "my name is " + name + " and im " + age + " years old ";
}
// estefade ham zaman 2 ta generic kenar ham ro mibinin 
var Ehsan = GetMyInfo('ehsan sadeghian', 27);
console.log(Ehsan);
// decorator ha 
function auth(constractor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.auth = false;
            return _this;
        }
        return class_1;
    }(constractor));
}
// baraye estefade az decorator to file tsconfig.json experimentaldecorators ro true konin o save konin 
var user_decorator = /** @class */ (function () {
    function user_decorator(message) {
        this.message = message;
        this.name = 'hesam';
    }
    user_decorator = __decorate([
        auth
    ], user_decorator);
    return user_decorator;
}());
var user_dec = new user_decorator('hello hesam');

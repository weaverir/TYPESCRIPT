"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('hello roocket');
var fullname = 'ehsan';
var ehsan = 'sadegian'; //  vagti bekhaym voroodi ha har type i bashe az any estefade mikonim :

var list = [1, '2', true]; //  tak tak member haye array ro mishe be soorat zir type dad . esm ravesh tuple : 

var tuple = [1, '2', false];
var name2 = 'ehsan'; // estefadeye sharti az type ha vagti mikhaym type .... ya .... bashe : 

var name3 = 'ehsan';
name3 = null; //  enum ha baraye tarif type custom khodemoon . vagti bekhaym be tabe megdar sabeto ro pas bedim estefade mishe 

var direction;

(function (direction) {
  direction[direction["up"] = 1] = "up";
  direction[direction["down"] = 2] = "down";
  direction[direction["right"] = 3] = "right";
  direction[direction["left"] = 4] = "left";
})(direction || (direction = {}));

var dir = direction.up;
console.log(dir); //  tarif anvae tabe be soorat zir 

function sum(x, y) {
  return x + y;
}

var sum2 = function sum2(x, y) {
  return x + y;
};

console.log(sum2(1, 2));

var sum3 = function sum3(x, y) {
  return x + y;
};

console.log(sum3(1, 2)); //  moshakhas kardan hame type haye function be soorat zir :

var sum4;

sum4 = function sum4(x, y) {
  return x + y;
}; //  estefade sharti az ye moteghayer be soorat zir :


var sum5 = function sum5(x, y) {
  if (y) {
    return x + y;
  }

  return x;
}; //  az rest operator ha ham mishe estefade kard be soorat zir :


var sum6 = function sum6(x, y) {
  return x + y;
}; // baraye type dehi be object az halat zir estefade mishe : 


var person = {
  fullname: 'ehsan sadeghian ',
  age: function age(num) {
    return " age : ".concat(num);
  }
};
var person2 = {
  fullname: 'esmail mohamadi ',
  age: function age(num) {
    return " age : ".concat(num);
  }
}; // model tarif kardan class be in soorate 

var car =
/*#__PURE__*/
function () {
  // protected zamani ke estefade beshe fgt to class haye farzand mored estefade garar migire o to object haye estefade shode mored estefade nist 
  function car(model, year, horsepower) {
    _classCallCheck(this, car);

    this.year = year;
    this.model = model;
    this.horsepower = horsepower;
  } //  ba inke model private bood vali ba method set toonestim model ro dar biroon az class va dar object farzand dastrasi dashte bashim :)


  _createClass(car, [{
    key: "setModel",
    set: function set(theModel) {
      this.model = theModel;
    } // baraye dastrasi be property private ya protected az method get estefade mikonim . 

  }, {
    key: "getModel",
    get: function get() {
      return this.model;
    }
  }]);

  return car;
}(); // obj jadidi az class misazim ke broperty haye private dare 


var carNew = new car('207', 2017, 100); // ba method set kardan toonestim be model ke private hast dastrasi dashte bashim o taghiresh bedim 

carNew.setModel = '405';
console.log(carNew); // dar set nemitonin be soorat mostagim be property dastrasi dashte bashin vali dar get mitoonin mostagiman be method dast rasi dashte bashin pass set baraye tagir megdar va get baraye dastrasi mostagim estefade mishe 

console.log(carNew.getModel);

var car2 = function car2(model, year) {
  _classCallCheck(this, car2);

  this.model = model;
  this.year = year; // age gabl az property haye constructor public benevisim niaz nist tarif konim o besoorat automatic oona ro property talagi mikone 

  this.model = model;
  this.year = year;
}; // abstract class ha noi class hastan ke az oona nemishe obj sakht fgt mitoonin azash baraye ers bari estefade konin .


var carAB =
/*#__PURE__*/
function () {
  function carAB(model) {
    _classCallCheck(this, carAB);

    this.model = model;
    this.model = model;
  }

  _createClass(carAB, [{
    key: "foo",
    value: function foo() {
      console.log(this.bar());
    }
  }]);

  return carAB;
}(); // az abstract class ye class dg misazim va az oon class ye object misazim . estefade mostagim nadarim 


var irankhodro =
/*#__PURE__*/
function (_carAB) {
  _inherits(irankhodro, _carAB);

  function irankhodro() {
    _classCallCheck(this, irankhodro);

    return _possibleConstructorReturn(this, _getPrototypeOf(irankhodro).apply(this, arguments));
  }

  _createClass(irankhodro, [{
    key: "bar",
    // age bar tarif nemishod inja error migereftim . abstract karbord aslish ine :)
    value: function bar() {
      return 'this is bar :)';
    }
  }]);

  return irankhodro;
}(carAB);

var pegoo = new irankhodro('405');
console.log(pegoo.foo());

var Static =
/*#__PURE__*/
function () {
  function Static(model, year) {
    _classCallCheck(this, Static);

    Static.model = model;
    this.year = year;
  } //estefade az method static be in soorate ke mibinin :) ba in method dg niaz nadarid object az class be vojood biarid bad behesh dast rasi dashe bashid .


  _createClass(Static, null, [{
    key: "getmodel",
    value: function getmodel() {
      return Static.model;
    }
  }]);

  return Static;
}();

console.log(Static.getmodel()); // design pattern haro az roocket yad begir . 
// age bekhaym ke ye class dorost konim ke az oon nashe ye object sakht be soorat zir amal mikonim 

var singletone =
/*#__PURE__*/
function () {
  // chon az private estefade kardim nemishe ba new azash object sakht chon kharej az class constructor gabele dastrasi nist :)
  function singletone() {
    _classCallCheck(this, singletone);
  }

  _createClass(singletone, null, [{
    key: "getinstance",
    value: function getinstance() {
      // inja ye shart mizarim ke age objecti az singletone vojood nadasht ye object azash besaze age vojood dasht gabli ro return kone intori chand ta object dg sakhte nemishe 
      if (!singletone.instance) {
        singletone.instance = new singletone();
      }

      return singletone.instance;
    }
  }]);

  return singletone;
}(); // fgt be insoorat mishe azash object sakht 


var obj1 = singletone.getinstance();
var obj2 = singletone.getinstance(); // ba mogayese in 2 ta object sakhte shode mibinin ke true bar migardoone dar gheyr in soorat har bar ye object jadid misakht va false mishod :)

console.log(obj1 === obj2);

function printlabel(obj) {
  console.log(obj.label);
}

var obj21 = {
  size: 20,
  label: 'size is 20'
};
var obj22 = {
  size: 30,
  label: 'size is 30'
};
printlabel(obj21);

var mySearch = function mySearch(source, subString) {
  var result = source.search(subString);
  return result > -1;
};

var mySearchtype = function mySearchtype(source, subString) {
  var result = source.search(subString);
  return result > -1;
}; // alan class hayi ke tarif mikonim bayad be form interface person bashe va ba code zir estefade mishe 


var ali =
/*#__PURE__*/
function () {
  function ali(name, family, age) {
    _classCallCheck(this, ali);

    this.name = name;
    this.family = family;
    this.age = age;
    this.name = name;
    this.family = family;
    this.age = age;
  }

  _createClass(ali, [{
    key: "fullname",
    value: function fullname() {
      return "this person is ".concat(this.name, " ").concat(this.family, " and he is ").concat(this.age, " years old ");
    }
  }]);

  return ali;
}();

var hesam =
/*#__PURE__*/
function () {
  function hesam(name, family, age) {
    _classCallCheck(this, hesam);

    this.name = name;
    this.family = family;
    this.age = age;
    this.name = name;
    this.family = family;
    this.age = age;
  }

  _createClass(hesam, [{
    key: "fullname",
    value: function fullname() {
      return "this person is ".concat(this.name, " ").concat(this.family, " and he is ").concat(this.age, " years old ");
    }
  }]);

  return hesam;
}();

var mehdi =
/*#__PURE__*/
function () {
  function mehdi(name, family, age) {
    _classCallCheck(this, mehdi);

    this.name = name;
    this.family = family;
    this.age = age;
    this.name = name;
    this.family = family;
    this.age = age;
  }

  _createClass(mehdi, [{
    key: "fullname",
    value: function fullname() {
      return "this person is ".concat(this.name, " ").concat(this.family, " and he is ").concat(this.age, " years old ");
    }
  }]);

  return mehdi;
}();

var user = new hesam('hesam', ' mousavi', 25);
console.log(user); // generic ha 
// age type moshakhasi ro moshakhas konim dg nemitoonim az type haye dg estefade konim baraye on parametr
// age ham type ro any garar bedim ke voroodi haye motefavet dashte bashim nemitoonim az method haye marboot be oon type khas estefade konim 
// baraye hal in moshkel az <> estefade mikonim va ye harf random bozorg mesle <T> estefade mikonim va az oon be onvan type estefade mikonim 

function logData(data) {
  return data;
} //va dar akhar vagti darim megdar dehi mikonim type khodemoon ro dakhel <> be soorat <number> garar midim intori az method haye marbood be oon type mitoonim estefade konim 


logData('hello roocket ');
var lIst = [1, 2, 3, 4, 5];
var listgeneric = [1, 2, 3, 4];

function logDataarray(data) {
  return data;
}

console.log(logDataarray(['2', '3'])); // to tabe ha be in soorat estefade mishe 

var mylogfunc = function mylogfunc(data) {
  return data;
};

var mylogfuncinterface = function mylogfuncinterface(data) {
  return data;
}; // inja dg niaze ke type ro be soorat <number> tarif konin ya har chizi ke lazeme 
//bayad degat konin ke moge tarif function niaz darin type ha moshakhas beshe to ye torayi mahdood konin voroodi hasho ya na mikhayn bad tarif tabe o estefade azash type haro moshakhas konin 


var mylogfuncinterface2 = function mylogfuncinterface2(data) {
  return data;
};

var mylogfunctype = function mylogfunctype(data) {
  return data;
};

var name_er = 'erfan';
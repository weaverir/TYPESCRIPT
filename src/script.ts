console.log('hello roocket');
let fullname : any = 'ehsan' ;
let ehsan = 'sadegian' ;

//  vagti bekhaym voroodi ha har type i bashe az any estefade mikonim :

let list : any = [1,'2',true];

//  tak tak member haye array ro mishe be soorat zir type dad . esm ravesh tuple : 

let tuple : [number , string , boolean] = [1,'2', false] ;
let name2  = 'ehsan' 

// estefadeye sharti az type ha vagti mikhaym type .... ya .... bashe : 

let name3 : null | string = 'ehsan'
name3 = null 

//  enum ha baraye tarif type custom khodemoon . vagti bekhaym be tabe megdar sabeto ro pas bedim estefade mishe 

enum direction {

up =1 ,
down ,
right ,
left 
}


let dir : direction = direction.up 
console.log(dir);

//  tarif anvae tabe be soorat zir 

function sum (x : number  , y : number) : number {
return x+y ;
}



 let sum2 = function (x : number , y : number) : number {
    return x + y ;
 }
 console.log(sum2(1,2));

 let sum3 = (x : number , y : number) : number => {
    return x + y ;
 }
 console.log(sum3(1,2));

//  moshakhas kardan hame type haye function be soorat zir :

 let sum4 : (x : number , y : number ) => number ;
 sum4 = function(x : number , y : number ) {
    return x+y ;

 }

//  estefade sharti az ye moteghayer be soorat zir :

 let sum5 = (x : number  , y ?: number) => {
    if(y) {
        return x+y 
    }
        return x
 } 


//  az rest operator ha ham mishe estefade kard be soorat zir :

let sum6 = (x :number , y : number ,  ...numbers : number []) => {
    return x + y 

}

// baraye type dehi be object az halat zir estefade mishe : 


let person : {
    fullname : string ,
    age : (num : number) => string 
} = {
    fullname : 'ehsan sadeghian ' ,
    age : (num : number ) => { return ` age : ${num}`
}
}

//  type khodeto khodet intori misazi : intori dg lazem nist hey type haye tekrari ro type koni 
type myobj = {
    fullname : string ,
    age : (num : number) => string 
} 

let person2 : myobj = {
    fullname : 'esmail mohamadi ' ,
    age : (num : number ) => { return ` age : ${num}`
}
}

// model tarif kardan class be in soorate 

class car {

    // age type property ro dar bala moshakhas nakonim in error ro mide ke property tarif nashode 
    public model : string ;
    // public be khatere ine ke betooni to class ha va object haye ezafe shode be property dast rasi dashte bashi 
    private year : number ;
    // private fagat baraye ine ke betooni to khod class be property dast rasi dashte bashi . yani to class haye farzand o object haye ijad shode na 
    protected horsepower : number ;
    // protected zamani ke estefade beshe fgt to class haye farzand mored estefade garar migire o to object haye estefade shode mored estefade nist 
    constructor(model : string , year : number , horsepower : number) // type voroodi ro ham hatman bayad vared konim 
     {
        this.year = year ;
        this.model = model ;
        this.horsepower = horsepower
    }


    //  ba inke model private bood vali ba method set toonestim model ro dar biroon az class va dar object farzand dastrasi dashte bashim :)
    set setModel(theModel : string) {
        this.model = theModel

    }
// baraye dastrasi be property private ya protected az method get estefade mikonim . 
    get getModel() {
        return this.model
    }
}
// obj jadidi az class misazim ke broperty haye private dare 
let carNew = new car ('207', 2017 , 100)
// ba method set kardan toonestim be model ke private hast dastrasi dashte bashim o taghiresh bedim 
carNew.setModel = '405'

console.log(carNew);
// dar set nemitonin be soorat mostagim be property dastrasi dashte bashin vali dar get mitoonin mostagiman be method dast rasi dashte bashin pass set baraye tagir megdar va get baraye dastrasi mostagim estefade mishe 
console.log(carNew.getModel)


class car2 {

    constructor(public model : string ,public  year : number){
        // age gabl az property haye constructor public benevisim niaz nist tarif konim o besoorat automatic oona ro property talagi mikone 
        this.model  = model ;
        this.year = year ;
    }
}
 
// abstract class ha noi class hastan ke az oona nemishe obj sakht fgt mitoonin azash baraye ers bari estefade konin .

abstract class carAB {
    constructor(public model : string ) {
        this.model = model ;
    }
//obstract inja ham be dard mikhore . msln ye property tarif mikonim va farzandi ke az abstract estefade mikone o az in class ers bari mikone bayad oon property ro dar khodesh dashte bashe 
    abstract bar() : string
    foo() : void {
        console.log(this.bar());
        
    }
}
// az abstract class ye class dg misazim va az oon class ye object misazim . estefade mostagim nadarim 
  class irankhodro extends carAB {

    // age bar tarif nemishod inja error migereftim . abstract karbord aslish ine :)
    bar() {
        return 'this is bar :)'
    }
 }

 let pegoo = new irankhodro('405')

 console.log(pegoo.foo());

 class Static {
    private static model : string 
    // readonly ham mesle static dg lazem nist azash object besazid ta behesh dast rasi dashe bashid .bad az sakhtan object va megdar dehi be oon dg nemitonin in megdar ro avaz konin 
    public readonly year : number 
    constructor(model : string , year : number  ) {
        Static.model = model
        this.year = year 
    }
//estefade az method static be in soorate ke mibinin :) ba in method dg niaz nadarid object az class be vojood biarid bad behesh dast rasi dashe bashid .
    static getmodel(){
        return Static.model ;
    }
// mibinin ke dg be rahati az oon log gereftam 
 }
 console.log(Static.getmodel());
 

 // design pattern haro az roocket yad begir . 
// age bekhaym ke ye class dorost konim ke az oon nashe ye object sakht be soorat zir amal mikonim 

class singletone {
    private static instance : singletone ;

    // chon az private estefade kardim nemishe ba new azash object sakht chon kharej az class constructor gabele dastrasi nist :)
    private constructor(){}

    public static getinstance () : singletone {
        // inja ye shart mizarim ke age objecti az singletone vojood nadasht ye object azash besaze age vojood dasht gabli ro return kone intori chand ta object dg sakhte nemishe 
        if (! singletone.instance){
          singletone.instance = new singletone ;}
          return singletone.instance ;
    }
    // bad az in marhale mitoonin n tedad property barash tarif konin . dg nabayad az constructor property bekhayn 
    }
// fgt be insoorat mishe azash object sakht 
    let obj1 = singletone.getinstance() ;
    let obj2 = singletone.getinstance() ;

    // ba mogayese in 2 ta object sakhte shode mibinin ke true bar migardoone dar gheyr in soorat har bar ye object jadid misakht va false mishod :)
    console.log(obj1 === obj2);

// interface ha be in soorat estefade mishan .mikhaym ye tabe besazim o ye object behesh pass bedim ke property haye moshakhasi dashte bashe baraye in kar bayad hey function printlabel(obj : {size : number , label : string}) intori tarifesh konim
// vali ba inter face ha ye bar tarif mikonim o behesh pass midim be soorat zir 

interface objstats {
// age az readonly estefade konin dg nemishe property size ro ba functioni ke tarif kardim va objecti ke behesh pass dadim taghir bedin .
    // darvage readonly baraye property ha ba const baraye variable ha yekie 

readonly size : number 
    label : string
}
    function printlabel(obj : objstats){
        console.log(obj.label);
    }

    let obj21 = {size : 20 , label : 'size is 20' }
    let obj22 = {size : 30 , label : 'size is 30'}

    printlabel(obj21)
    
 

 interface onlystring {
    // dar in soorat fgt mitoonim baraye property ha name be soorat string va megdar be soorat string daryaft konim 
    [propname : string] : string 
 }

 // interface dar function ha

 interface searchfunc {
    (source : string , subString : string ) : boolean
 }
// hamino ba type ha ham mishe tarif kard be soorat zir 
 type searchfunctype = (source : string , subString : string ) => boolean

 let mySearch : searchfunc = (source : string , subString : string) => {
    let result = source.search(subString) 
    return result > -1 ;
 }

 let mySearchtype : searchfunctype = (source : string , subString : string) => {
    let result = source.search(subString) 
    return result > -1 ;
 }

 //interface dar class ha 
interface person {
    name : string
    family : string 
    age : number 
    fullname () : string

}
// alan class hayi ke tarif mikonim bayad be form interface person bashe va ba code zir estefade mishe 
 class ali implements person {
    constructor (public name : string , public family : string , public age : number){
        this.name = name 
        this.family = family
        this.age = age
    }
    fullname(): string {
        return `this person is ${this.name} ${this.family} and he is ${this.age} years old `
    }

 }

 class hesam implements person {
    constructor (public name : string , public family : string , public age : number){
        this.name = name 
        this.family = family
        this.age = age
    }
    fullname(): string {
        return `this person is ${this.name} ${this.family} and he is ${this.age} years old `
    }
}

 class mehdi implements person {
    constructor (public name : string , public family : string , public age : number){
        this.name = name 
        this.family = family
        this.age = age
    }
    fullname(): string {
        return `this person is ${this.name} ${this.family} and he is ${this.age} years old `
    }
}

let user : person = new hesam ('hesam' , ' mousavi' , 25 )
console.log(user)

// generic ha 
// age type moshakhasi ro moshakhas konim dg nemitoonim az type haye dg estefade konim baraye on parametr
// age ham type ro any garar bedim ke voroodi haye motefavet dashte bashim nemitoonim az method haye marboot be oon type khas estefade konim 
// baraye hal in moshkel az <> estefade mikonim va ye harf random bozorg mesle <T> estefade mikonim va az oon be onvan type estefade mikonim 
function logData <T> (data : T) : T {
    return data ;
}
//va dar akhar vagti darim megdar dehi mikonim type khodemoon ro dakhel <> be soorat <number> garar midim intori az method haye marbood be oon type mitoonim estefade konim 
logData <string>('hello roocket ')

let lIst : number [] = [1,2,3,4,5]
let listgeneric : Array  <number> = [1,2,3,4]

function logDataarray <T> (data : T[]) : T[] {
    return data ;
}
console.log(logDataarray<string>(['2','3']));
// to tabe ha be in soorat estefade mishe 
let mylogfunc : <T>(data : T) => T = function <T>(data : T) : T {
    return data ;

}

// mitonin hamo be soorat type ya inter face ham tarif konin 

interface mylogdatainterface {
    <T>(data : T) : T
}

let mylogfuncinterface : mylogdatainterface = function <T>(data : T) : T {
    return data ;

}
// mitonin to interface ha be soorat zir ham amal konin vali to tarif tabe bayad type ro moshakhas konin :

interface mylogdatainterface2 <T> {
    (data : T) : T
}
// inja dg niaze ke type ro be soorat <number> tarif konin ya har chizi ke lazeme 
//bayad degat konin ke moge tarif function niaz darin type ha moshakhas beshe to ye torayi mahdood konin voroodi hasho ya na mikhayn bad tarif tabe o estefade azash type haro moshakhas konin 
let mylogfuncinterface2 : mylogdatainterface2 <number>  = function (data : number) : number {
    return data ;

}

type mylogdatatype = <T>(data : T) => T

let mylogfunctype : mylogdatatype = function <T>(data : T) : T {
    return data ;

}

let name_er : string = '22'


//generic ha dar class ha 
// baz az <T> estefade mikonim baraye type dehi be class va moge sakht object behesh type midim
// extend noe type maro mahdood mikone be number va string . yani moge sakht object nemitoonin chizi joz number ya string behesh pass bedin 
// ba gozashtan , va estefade az ye harf dg mesle U mitoonin type have dg ham dashte bashin vali moge sakht object bayad be in soorat megdar bedin be type ha <number,string>  
class myarray <T extends number | string ,U extends number> {

    // migim data ro ke typesh ro badan moshakhas mikonam ro be onvan voroodi begir ke typesh ro moshakhas mikonim badan 
    constructor(public data : T[]){}

    additem(item : T){
        this.data.push(item)
    }
    getitem(index : U ){
        return this.data[index]
    }
}
let listarray = new myarray<number,number>([1,2,3,4])
listarray.additem(444);
console.log(listarray.data);


function GetMyInfo <T,U> (name : T , age : U) : string  {

    return `my name is ${name} and im ${age} years old `

}
// estefade ham zaman 2 ta generic kenar ham ro mibinin 
let Ehsan = GetMyInfo<string , number> ('ehsan sadeghian' , 27)
console.log(Ehsan);


// decorator ha 

function auth <T extends { new(...args : any[])}> (constractor : T)  {
    return class extends constractor { 
        auth = false 
    }
    
}

// baraye estefade az decorator to file tsconfig.json experimentaldecorators ro true konin o save konin 
@auth
class user_decorator {
    constructor(public message : string) {}
    name = 'hesam'
}

let user_dec = new user_decorator ('hello hesam')








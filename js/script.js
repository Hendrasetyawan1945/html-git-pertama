//console.log("Helo Hendra setyawan")
document.getElementById('heading').innerHTML = "Hello,Hendra"


//Variabel

//var name = "tenten";
//console.log(name);
//
//var a = "Ndandan";
//console.log(a);
//
//var age = 20;
//console.log(age);
//
//var fullname = name + ' ' + a ;
//console.log(fullname);
//
//var fullname = true;
//console.log(fullname);
//
//var job ="Dosen";
//console.log(job);
//
//var bio = "Nama saya " +  name + " " + a + " " + " Umur saya " + age + " " + " Pekerjaan saya" + job;
//console.log(bio);

//Operator

//var x = 5;
//var y = 7;
//var z = x + y;
//console.log(z);
//
//var x = 10;
//var y = 7;
//var z = x * y;
//console.log(z);
//
//var x =10;
//x +=5;
//console.log(x);
//
//t1 = "Tenten";
//t2 = "Ndandan";
//t3= t1 + " & " + t2;
//console.log(t3)


//if else statement

//var name = "Tenten";
//var age = " 19";
//var isyoung = "yes";
//
//if (isyoung == ('no')){
//    console.log(name + " is young man")
//    } 
//else {
//    console.log("I hope he mature soon")    
//    }
//
//var hour = 20;
//if(hour < 17){
//    console.log('say yes!')
//}
//else{
//    console.log('say no!!')
//}
//
//var time = 9;
//if(time < 10){
//    console.log("say no way!!")
//}
//else if (time <= 20){
//    console.log('say maybe yes!!')
//}
//else{
//    console.log('Good on You!')
//}
//    

//Boolean
//console.log(Boolean(12 < 17));
//console.log(Boolean(10 < 1));

//var nama = prompt("What is you name?");
//console.log(nama);

//Switch Condition
//var job = 'dosenn';
//switch(job){
//    case 'dosen':
//        console.log('Tenten adalah seorang dosen');
//        break;
//    case 'tni':
//        console.log('TNI adalah garda pertahanan NKRI');
//        break;
//    case 'polisi':
//        console.log('polisi itu tugasnya cari ');
//        break;
//    default:
//        console.log('tenten bukan siapa siapa');
//}        


//*function adalah aspek penting dalam javascript dan bahasa programing yang lain
//*Block of code,untuk menjalankan task khusus dalam programing
//*function akan tereksekusi apabila dipanggil (call)
//*function dibuat untuk mengurangi penulisan yang berulang ulang,mengembalikan retrun


//function yo(){
//    console.log('Tenten!!!');
//}
//yo();
//
//function re(nama){
//    console.log(nama);
//}
//re("Tenten & Ndandan");

//
//var nama = "Tenten"
//function re(){
//    console.log(nama);
//}
//re(nama);

//function re(nama, age){
//    console.log(nama + age);
//}
//re("tenten ", 20);
//re("Ndandan ", 18);
//
//function t(satu, dua){
//    return satu + dua;
//}
//console.log(t(7 , 12));

////funcition dengan condition if
//function re(name,age){
//    if(age > 35){
//        return name + ", not that old!";
//    }
//    else{
//        return name + ", is still young"
//    }
//}
//var nama = re("Tenten ",20)
//console.log(nama);

//function t(a, b){
//    return a + b;
//    
//}
//var n =t("Tenten ", "& Ndandan");
//console.log(n);
//document.getElementById("elemen1").innerHTML=n;
//var s=t("selamat datang di ","halaman pertama tenten dan ndandan");
//alert(s);

//*Statement dan Expression di dalam javascript

//*array
//var nama = 'Tenten';
//var lastname = 'Ndandan';
//var namaa =['Tenten', 'Ndandan',1999, 'dosen'];
//console.log(namaa);
//console.log(namaa[0]);
//
////*Mengubah
//namaa[1]='Mandan';
//console.log(namaa);
//
////*Menambahkan/push
//namaa.push('putih');
//console.log(namaa[4]);
//
////*menambah didepan/unshift
//namaa.unshift('apa');
//console.log(namaa);
//
////*pop//menghapus elemen terahir
//namaa.pop();
//console.log(namaa);
//
////*shift/
//namaa.shift();
//console.log(namaa);

//*Objek
//var car ={
//    color : 'white',
//    year : 2019,
//    drive : function(){return 'drive'}
//};


//var fruit = [    'BANANA',
//    'ORANGE',
//  'GRAPE',
//]


//*menyisipkan array dan objek

var car = {
    made :"Indonesia",
    speed : 160,
    engine:{
    size :2.7,
    made : 'Tenten',
    fuel :'Pertamax',
    piston :[
   '2019',
   {make : 'Indonesia'},
   {make : 'Japan'}
   ], 
},
drive: function(){ return 'drive';}
};

var array = [
    'string',
        2020,
        [true, 'Tenten'],
        {nama : 'Ndandan'},
        function(){return 'drive';}
];

//console.log(car);
//console.log(car.made)
console.log(car.engine);



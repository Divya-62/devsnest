//task 1
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(student);
    console.log(Object.keys(student));
//task 2
function objdelete() {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(student);
    delete student.rollno;
    console.log(student);
}
//task 3
//func to calc length of object
function objlength() {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(Object.keys(student).length);
}
//task 4
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];
    for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Read before " + book);
    } else
    {
     console.log("Not Read" + book);
    }
   }
   //task 5
   function Cylinder(h, d) {
    this.h = h;
    this.d = d;
  }
  
  Cylinder.prototype.Volume = function () {
    var r = this.d / 2;
    return this.h * Math.PI * r * r;
  };
  
  var vol = new Cylinder(7, 4);
  console.log('volume =', vol.Volume().toFixed(4));
//task 6
var library1 = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
 function sortLib(x,y) 
  {
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
  }
 
 console.log(library1.sort(sortLib));






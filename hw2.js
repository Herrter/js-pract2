//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль //

let testarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(testarr[0]);
console.log(testarr[1]);
console.log(testarr[2]);
console.log(testarr[3]);
console.log(testarr[4]);
console.log(testarr[5]);
console.log(testarr[6]);
console.log(testarr[7]);
console.log(testarr[8]);
console.log(testarr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title: `twerna`,
    pageCount: 120,
    genre: `fantasy`
 }
 console.log(book)
 console.log(book.title)
 console.log(book.pageCount)
 console.log(book.genre)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book2 = {
    title: `twerna`,
    pageCount: 120,
    genre: `fantasy`,
    authors: {
            name1: `Victor`,
            age1: 20,
            name2: `Eugene`,
            age2: 21,
            name3: `Vladislave`,
            age3: 22
    }
};

 console.log(book2);
 console.log(book2.title);
 console.log(book2.pageCount);
 console.log(book2.genre);
 console.log(book2.authors);
 console.log(book2.authors.name1);
 console.log(book2.authors.age1);
 

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user1= {nаme: `Vasya`, username: `Yolorevk`, password: 43143214321};
let user2= {nаme: `Genr`, username: `gtretre`, password: 23413242};
let user3= {nаme: `Key`, username: `retretr`, password: 11312321321};
let user4= {nаme: `Roma`, username: `ertrete`, password: 97376521};
let user5= {nаme: `Kirill`, username: `dfgdfg`, password: 76474565465461};
let user6= {nаme: `Vladislave`, username: `Ysdfsdfg`, password: 0079789714321};
let user7= {nаme: `Mykytra`, username: `xcvbcb`, password: 69876867876876};
let user8= {nаme: `Korreec`, username: `dgsdfgdf`, password: 7079898797821};
let user9= {nаme: `Shuka`, username: `weert`, password: 34543543521};
let user10= {nаme:` Genr`, username: `dsfgsdfg`, password: 5675675674321};

let users= [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10
];

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
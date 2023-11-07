
const prompt = require('prompt-sync')()
console.log('Вводити латиницею');
const userName = prompt('Введіть імя   ');
const userEmail = prompt('Введіть емайл   ');
const userPhone = prompt('Введіть номер телефону   ');

const person = {
    name: userName,
    email: userEmail,
    phone: userPhone,
}

console.log(person)

console.log('Виберіть бажане (вибрати клавішею латиницею!)');
console.log('\nФутболка -> F\nКуртка -> K\nСорочка -> S\n');
const menuUser1 = prompt('> ')


if(menuUser1 == 'F' || menuUser1 == 'f'){
const fytbolka = {
    title: 'Футболка',
    price: 11000/100,
    size: 'XS I UA 44-46',
    category: 'Одяг',
    sex: 'male'
}
console.log(fytbolka)
} else if(menuUser1 == 'K' || menuUser1 == 'k'){
const kyrtka = {
    title: 'Куртка зимова',
    price: 250000/100,
    size: 'L - 175 см',
    category: 'Одяг',
    sex: 'male'
}
console.log(kyrtka)
} else if(menuUser1 == 'S' || menuUser1 == 's'){
const sorochka = {
    title: 'Сорочка',
    price: 12000/100,
    size: 'XS I UA 44-46',
    category: 'Одяг',
    sex: 'male'
} 
console.log(sorochka)
} 

else {
    console.log("Помилка: Невірний вибір.")
    return
}

console.log("Веддіть адресу доставки товару (вводити латиницею)")
const userDelivery1 = prompt()

const userDelivery = {
    status: 'pending',
    setStatus: function (newStatus) {
        this.status = newStatus;
    }
};

userDelivery.setStatus('process');
console.log(userDelivery.status);


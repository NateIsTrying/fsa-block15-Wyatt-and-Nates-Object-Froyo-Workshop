// 2 
// mmake object w keys/values
const survey = {
    firstName: 'jake',
    lastName: 'smith',
    email: 'jakesmith!aol.com',
    phone: undefined,
    zipCode: 631,
    favoriteFlavors: 32,
    cupSize: 'medium',
    favoriteStore: 'Target',
    firstVisit: false,
}

// 3
// update keys/values
survey['email'] = 'jak3Smith1992@gmail.com';
survey['phone'] = 3195551234;
survey['zipCode'] = '63132';
survey['favoriteFlavors'] = ["coffee", "strawberry", "matcha"];

// 4
// delete 2 keys
delete survey.zipCode;
delete survey.favoriteStore;

// add new keys w values
survey.toppings = [`chocolate sprinkles`, `wafer straws`, `gummy bears`];
survey.futureFlavors = `mango`;
survey.todaysPurchaseCost = 5.32;

// push keys to array
const survArray = [];

for (let key in survey) {
    survArray.push(key);
}
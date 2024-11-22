const phoneBook = {
    '1488': '+380421441',
    'NN': '+380241',
    'Clanast': '+380112421'
};

const findPhoneByName = (name) => {
    return phoneBook[name] || 'Phone number not found';
};

console.log(findPhoneByName('1488'))
console.log(findPhoneByName('NN'));
console.log(findPhoneByName('Ed'));

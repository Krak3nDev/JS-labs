const phoneBook = [
    { name: '1488', phone: '+380421441' },
    { name: 'NN', phone: '+380241' },
    { name: 'Clanast', phone: '+380112421' }
];

const findPhoneByName = (name) => {
    for (const entry of phoneBook) {
        if (entry.name === name) {
            return entry.phone;
        }
    }
    return 'Phone number not found';
};

console.log(findPhoneByName('1488'))
console.log(findPhoneByName('NN'));
console.log(findPhoneByName('Ed'));

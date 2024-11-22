const fn = () => {
    const constObject = { name: 'Constant Name' };

    let variableObject = { name: 'Variable Name' };

    constObject.name = 'New Constant Name';
    variableObject.name = 'New Variable Name';

    // constObject = { name: 'Another Name' }; // Помилка: не можна змінити посилання для константи
    variableObject = { name: 'Another Variable Name' };

    console.log('constObject:', constObject);
    console.log('variableObject:', variableObject);
};


const createUser = (name, city) => {
    return { name, city };
};

fn();

const user = createUser('Marcus Aurelius', 'Roma');
console.log(user);

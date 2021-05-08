function getVariables() {
    const savedName = 'Renzo';
    const lastName = 'Barrios';

    function sayHi() {
        if (savedName !== 'Renzo') {
            console.log(`How are you ${savedName} ?`);
        }
        console.log(`Hi 🙋‍ ${savedName}`);
    }

    return sayHi;
}

const vars = getVariables();

function sayHiTo() {
    vars();

    console.log();
    console.log(`Hi 🙋‍ ${savedName}`);
}

sayHiTo()
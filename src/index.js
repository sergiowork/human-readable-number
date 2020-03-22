module.exports = function toReadable(number) {
    
    const arrTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    
    const arrTens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ];

    
    if (number < 20) {
        return arrTwenty[number];
    } 
    
    
    if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            return arrTens[number / 10];
        } else {
            return `${arrTens[Math.floor(number / 10)]} ${arrTwenty[number % 10]}`;
        }
    } 
    

    if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return `${arrTwenty[number / 100]} hundred`;
        } else if (number % 10 === 0) {
            return `${arrTwenty[Math.floor(number / 100)]} hundred ${arrTens[(Math.floor(number / 10)) % 10]}`;
        } else if (number % 100 < 20) {
            return `${arrTwenty[Math.floor(number / 100)]} hundred ${arrTwenty[number % 100]}`;
        } else {
            return `${arrTwenty[Math.floor(number / 100)]} hundred ${arrTens[(Math.floor(number / 10)) % 10]} ${arrTwenty[number % 10]}`;
        }
    }

}


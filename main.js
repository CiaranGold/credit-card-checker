// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

// Validate one credit card
validateCred = (array) => {
    let sum = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        let currValue = array[i]


        if ((array.length - 1 - i) % 2 === 1) {
            currValue *= 2;
            if (currValue > 9) {
                currValue -= 9;
            }
        }
        // 
        sum += currValue;

    }
    return sum % 10 === 0;
}
// Test functions:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false



//findInvalidCardsfunction
findInvalidCards = (nestedArray) => {
    const badCards = [];

    for (let i = 0; i < nestedArray.length; i++) {
        let currentCard = nestedArray[i];
        if (!validateCred(currentCard)) {
            badCards.push(currentCard)
            
        }
    }
    //console.log(`Here's all the fake news cards: ${badCards}`)
    return badCards;
}
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]))

// Test function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

const invalidCardsList = findInvalidCards(batch);
console.log(invalidCardsList)


//idInvalidCardCompanies()

idInvalidCardCompanies = (badBatch) => {
    const companyCard = []; // An array to collect detected card companies
    
    for (let i = 0; i < badBatch.length; i++) {
        console.log(badBatch[i])
        
        let currentCardCheck = badBatch[i];
        switch (currentCardCheck[0]){
        case 3:
            if (!companyCard.includes('Amex')){ 
            companyCard.push('Amex')};
            break;
        case 4:
            if (!companyCard.includes('Visa')){
            companyCard.push('Visa')    
            };
            break;
        case 5:
            if (!companyCard.includes('Mastercard')){
            companyCard.push('Mastercard');
            };
            break;
        case 6:
            if (!companyCard.includes('Discover')){
            companyCard.push('Discover')
            };
            break;
            default:
            console.log("Company not found")
            break;    

    
        }
    
    console.log(`I've added ${companyCard} to companyCard`)
};
    return companyCard;

}
console.log(idInvalidCardCompanies(findInvalidCards(batch)))


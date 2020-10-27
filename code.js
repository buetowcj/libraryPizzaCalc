function calculateFees()
{
    // Get amount of books turned in
    var numBooks = prompt("How many books are being turned in?");

    // convert to number
    numBooks = parseInt(numBooks);

    // Get how many days past due
    var lateDayBooks = prompt("How many days late are the books?");

    // convert to number
    lateDayBooks = parseInt(lateDayBooks);

    // Get amount of DVDs turned in
    var numDVDs = prompt("How many DVDs are being turned in?");

    // convert to number
    numDVDs = parseInt(numDVDs);

    // Get how many days past due
    var lateDayDVDs = prompt("How many days late are the DVDs?");

    // convert to number
    lateDayDVDs = parseInt(lateDayDVDs);

    // Declare variable for lateFeeBooks
    var lateFeeBooks = 0.25;

    // Declare variable for lateFeeDVDs
    var lateFeeDVDs = 0.5;

    // Calculate lateDayBooks * numBooks * lateFeeBooks = bookFeeTotal
    var bookFeeTotal = lateDayBooks * numBooks * lateFeeBooks;

    // Calculate lateDayDVDs * numDVDs * lateFeeDVDs = dvdFeeTotal
    var dvdFeeTotal = lateDayDVDs * numDVDs * lateFeeDVDs;

    // Add bookFeeTotal + dvdFeeTotal to get grandFeeTotal
    var grandFeeTotal = bookFeeTotal + dvdFeeTotal;

    // Output grand total
    alert(`The late fees total $${grandFeeTotal.toFixed(2)}.`);

}

function calculatePizza()
{
    // Get number of toppings
    var toppings = prompt("How many toppings would you like?");

    // Convert to number
    toppings = parseInt(toppings);

    // Get how many people are splitting the bill
    var billSplit = prompt("How many people are splitting the bill?");

    // Convert to number
    billSplit = parseInt(billSplit);

    // Create variable basePizza = $15
    var basePizza = 15;

    // Declare variable for price of topping
    var top = toppings * 1.25;

    // Add $1.25 per topping
    var pizzaWithTopping = basePizza + top;

    // Divide pizzaWithToppings / billSplit to get splitPrice
    var splitPrice = pizzaWithTopping / billSplit;

    // `The price for each person to pay is ${splitPrice}.`
    alert(`The price for each person to pay is $${splitPrice.toFixed(2)}.`);

}
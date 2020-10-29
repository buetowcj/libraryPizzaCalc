$(document).ready(
    function () {
        // add event listener (clicks, etc.)
        $("#LibraryButton").click(calculateFees);
        $("#PizzaButton").click(calculatePizza);
function calculateFees()
{
    // Get amount of books turned in
    var numBooks = $("#numBooks").val();
    numBooks = parseInt(numBooks);

    // Get how many days past due
    var lateDayBooks = $("#lateDayBooks").val();
    lateDayBooks = parseInt(lateDayBooks);

    // Get amount of DVDs turned in
    var numDVDs = $("#numDVDs").val();
    numDVDs = parseInt(numDVDs);

    var lateDayDVDs = $("#lateDayDVDs").val();
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

    $("#costLibOutput").text(grandFeeTotal.toFixed(2));

    $(".output").show();
}

function calculatePizza()
{
    // Get number of toppings
    var toppings = $("#toppings").val();
    toppings = parseInt(toppings);

    // Get how many people are splitting the bill
    var billSplit = $("#billSplit").val();
    toppings = parseInt(billSplit);
    // Create variable basePizza = $15
    var basePizza = 15;

    // Declare variable for price of topping
    var top = toppings * 1.25;

    // Add $1.25 per topping
    var pizzaWithTopping = basePizza + top;

    // Divide pizzaWithToppings / billSplit to get splitPrice
    var splitPrice = pizzaWithTopping / billSplit;

    // `The price for each person to pay is ${splitPrice}.`

    $("#costPizzaOutput").text(splitPrice.toFixed(2));

    $(".output").show();
}
    }
);
//function to convert kilometer to meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        return 'Distance can not be negative';
    }
    return meter;
}


//function for calculating budget
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalCost = watchPrice + mobilePrice + laptopPrice;
    return totalCost;
}


//function for total hotel cost
function hotelCost(stayedFor) {
    
    var firstPackage = 0;
    var secondPackage = 0;
    var thirdPackage = 0;
    var totalCost = 0;
    if (stayedFor <= 0) {
        return 'Staying days can not be zero or negative.Enter Valid input.';
    }
    else{
        for (var i = 1; i <= stayedFor; i++) {
            if (i >= 1 && i <= 10) {
                firstPackage = 100 * i;
            }
            else if (i >= 11 && i <= 20) {
                secondPackage = 80 * (i - 10);
            }
            else{
                thirdPackage = 50 * (i - 20);
            }
        }
    }
    totalCost = firstPackage + secondPackage + thirdPackage;
    return totalCost;
}

//

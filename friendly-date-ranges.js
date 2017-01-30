//The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).
//
//Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.
//
//Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.
//
//If the range ends in the same month that it begins, do not display the ending year or month.
//
//Examples:
//
//makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]
//
//makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].


function makeFriendlyDates(arr) {
    var objDateArr = [];
    //convert strings in array to objects
    objDateArr = arr.map(function(el){
        var splitDate = el.split('-');
        var foo = new myDate(splitDate[0], splitDate[1], splitDate[2]);
        foo.realDate = new Date(el);
        return foo;
    });
    
    //convert months and days
    objDateArr.map(function(el){
        return el.convertMonthAndDay();
    });
    
    //format the dates for display
    var convertedArray = convertDatesToString(objDateArr[0], objDateArr[1]);
    console.log(convertedArray);
    return(convertedArray);
}

function myDate(year, month, day){
    this.year = year;
    this.month = month;
    this.day = day;
}

myDate.prototype.convertMonthAndDay = function(){
    var months = {
        "01":"January",
        "02":"February",
        "03":"March",
        "04":"April",
        "05":"May",
        "06":"June",
        "07":"July",
        "08":"August",
        "09":"September",
        "10":"October",
        "11":"November",
        "12":"December"
    };
    
    for(var key in months){
        if(months.hasOwnProperty(key)){
            if(this.month === key){
                this.month = months[key];
            }
        }
    }
    this.day = parseInt(this.day, 10);
    this.day = getGetOrdinal(this.day);
    function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
 }
};

function convertDatesToString(startDate, endDate){
    var startStr = startDate.month + " " + startDate.day;
    
    //same monnth, same year
    if(startDate.month == endDate.month && startDate.year == endDate.year){
        //same day
        if(startDate.day == endDate.day){
            return[startStr + ", " + startDate.year];
            //different day
        }else{
            return [startStr, endDate.day];
        }
    }
    if((endDate.realDate.getTime() - startDate.realDate.getTime())/(1000*60*60*24) < 365){
        //starting in current year
        if(startDate.year == "2016"){
            return [startStr, endDate.month + " " + endDate.day];
            
            //not in current year
        }else{
            return [startStr + ", " + startDate.year, endDate.month + " " + endDate.day];
        }
    }
    
        return [startStr + ", " + startDate.year, endDate.month + " " + endDate.day + ", " + endDate.year];

}



makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);
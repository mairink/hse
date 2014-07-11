var Converter = (function() {

    // Private stuff up here
    var converterValue = 2.2;


    // Public methods here
    return {
        convertFromPoundsToKIlo: function(weight) {
            var num = parseInt(weight);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = num / converterValue;
            return Math.round(num);
        },

        convertFromMetricToImperial: function(weight) {
           return weight * converterValue;
        }

    }
}())

var BackEndServiceCaller = (function () {

    // Public methods here
    return {
        doCallout: function () {

            $.get("http://echo.jsontest.com/key/value/one/two", function (data) {

                console.log(data);
            });

        }
    }

}())
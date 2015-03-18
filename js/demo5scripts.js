function GetOrders() {
    
    var objRequest = new XMLHttpRequest(); //create AJAX request object
    
    //create URL and JQuery string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebService/service1.svc/GetOrdersForCustomer/";
    url += document.getElementById("custid").value;
    
    //checks that the object has returned data
    objRequest.onreadystatechange = function() {
         
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var output=JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
    }
    
    //initiate the server request
    objRequest.open("GET", url, true);
    objRequest.send();
    
}

function GenerateOutput(result) {
    var count = 0;
    var displaytext = "";
    //loop to extract data from the response object
    for (count=0; count < result.GetOrdersForCustomerResult.length; count++) {
        
        displaytext += result.GetOrdersForCustomerResult[count].OrderDate + "," + result.GetOrdersForCustomerResult[count].OrderID + "<br>";
    }
    
    document.getElementById("orderdisplay").innerHTML = displaytext;
}
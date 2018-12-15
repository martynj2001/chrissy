
$(document).ready(function(){
    var type = getURLParams(window.location.href);
    loadtreatment(type);
});

function loadtreatment(treatment_type){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
            var txtobj = JSON.parse(this.responseText);
            document.getElementById("t-name").innerHTML = txtobj.name;
            document.getElementById("t-shortdesc").innerHTML = txtobj.short_desc;
            document.getElementById("t-longdesc").innerHTML = txtobj.long_desc;
            
            // Clear any list items.
            var ul = document.getElementById("t-benefits");
            //var s_ul = document.getElementById("s-costs");
            while (ul.hasChildNodes()){
                ul.removeChild(ul.firstChild);
            }
            /*while (s_ul.hasChildNodes()){
                s_ul.removeChild(s_ul.firstChild);
            }*/
            //document.getElementById("title-ultimate").innerHTML = "";
            //document.getElementById("desc-ultimate").innerHTML = "";
            //document.getElementById("cost-ultimate").innerHTML = "";
            //document.getElementById("title-balance").innerHTML = "";
            //document.getElementById("desc-balance").innerHTML = "";
            //document.getElementById("cost-balance").innerHTML = "";
            var array = txtobj.benefits;
            for (var i = 0; i < array.length; i++){
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(array[i]));
                ul.appendChild(li);
            }
            document.getElementById("t-details").innerHTML = txtobj.details;
            /*if (treatment_type == 'swedish'){
                document.getElementById("t-cost").innerHTML = "You can choose from mulitple options or simply contact me via the Messenger button to discuss."
                var s_array = txtobj.costs;
                for (var s = 0; s < s_array.length; s++){
                    var s_li = document.createElement("li");
                    s_li.appendChild(document.createTextNode(s_array[s]));
                    s_ul.appendChild(s_li);
                }
                document.getElementById("title-ultimate").innerHTML = txtobj.title_ultimate;
                document.getElementById("desc-ultimate").innerHTML = txtobj.desc_ultimate;
                document.getElementById("cost-ultimate").innerHTML = txtobj.cost_ultimate;
                document.getElementById("title-balance").innerHTML = txtobj.title_balance;
                document.getElementById("desc-balance").innerHTML = txtobj.desc_balance;
                document.getElementById("cost-balance").innerHTML = txtobj.cost_balance;
            } 
            else { */
            document.getElementById("t-cost").innerHTML = txtobj.cost;
            //}
                
        }
    }; 
    xmlhttp.open("GET", fileTreatment(treatment_type), true);
    xmlhttp.send();
};

function fileTreatment(name){
    name.toLowerCase();
    //Make sure file location is set
    var filename = "../json/"
    filename = filename.concat(name, ".json");
    //add .json to create filename for AJAX call
    return filename;
}

function getURLParams(url){ //Assumes only one url parameter after '?'
    var querystring = url ? url.split('?')[1] : window.search.slice(1);
    querystring = querystring.split('#')[0];
    return querystring.toLowerCase();
}


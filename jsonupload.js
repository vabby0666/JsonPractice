var data=new Array()



/*$(document).ready(function(){
        if(localStorage.getItem("storeddata")!=null)      
            data=JSON.parse(localStorage.getItem("storeddata"));
});*/
    var text;

$("#upload").click(function () {
			storedata();
            $("#dvCSV").html("");
            var k1=data.length;
            var regex = /^([a-zA-Z0-9\s_\\.\-:\()\g])+(.csv)$/;
            if (regex.test($("#fileUpload").val())) {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();
                    reader.readAsText($("#fileUpload")[0].files[0]);

                    reader.onload = function (e) {
                        var rows = e.target.result.split("\r\n");
                        var req="name,email,phone";
                        var giv=(rows[0].toString()).trim();
                        var giv1=(rows[1].toString()).trim();
                        if(req===giv || req===giv1){
                        var html= "<table border='1'>";
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            if (cells.length > 1) {
                                if(cells[2]!="phone"){
                                	$("#name").val(cells[0].replace(/"/g,''));
                                    $("#email").val(cells[1].replace(/"/g,''));
                                    $("#phone").val(cells[2].replace(/"/g,''));
                                    $("#sub_btn").trigger('click');
                                    data=JSON.parse(localStorage.getItem("storeddata"));
                                }
                            }
                        }           
                                    text=$("#dvCSV").html();
                                    if(k1!=data.length && text==''){
                                    $("#dvCSV").css("color","green");
                                    $("#dvCSV").html("Data Uploaded Successful");
                                    }else{                                    
                                    $("#dvCSV").css("color","red");
                                    $("#dvCSV").html(text);    
                                    }
                    }
                    else
                    {
                    	$(dvCSV).css("color","red");
                    	$(dvCSV).html("Data is not in right format(name,email,phone)!!");
                    }
                    }
                } else {
                    $(dvCSV).css("color","red");
                    $(dvCSV).html("This browser does not support HTML5.");
                }
            } else {
                alert("Please upload a valid CSV file.");
            }
        });
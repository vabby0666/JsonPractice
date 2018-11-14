var data=new Array()

$(search).click(function(){
	storedata();
        var ser=$(searchitem).val();
        var htm="<table border='1'><tr><th>Name</th><th>Email</th><th>Phone</th></tr>";
        var htm1=0;
        
        for(var i=0;i<data.length;i++)
            if(((data[i].name).includes(ser) || (data[i].email).includes(ser) || (data[i].phone).includes(ser)) && ser.length>0 )
            {
               htm1=1;
               htm=htm+"<tr><td>"+data[i].name+"</td><td>"+data[i].email+"</td><td>"+data[i].phone+"</td></tr>";
            }
            htm=htm+"</table>";
            if(htm1==1){
                $(searchoutput).css("color","black");
                $(searchoutput).html(htm);
            }
            else{
                $(searchoutput).css("color","red");    
                $(searchoutput).html("No Searched Data Found!!");
            } 
});

    $(view_btn).click(function(){
  		viewdata();
    });

    function viewdata(){
    	storedata();
    	var html='';
        if(data.length>0)
        {
            html+= "<table border='1'>";
            html+="<tr><th>name</th><th>email</th><th>phone</th><th colspan='2'>Actions</th></tr>";
        for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td>"+data[i].name+"</td>";
        html+="<td>"+data[i].email+"</td>";
        html+="<td>"+data[i].phone+"</td>";
        html+="<td><button onclick='javascript: deletef("+i+")'>Delete</button></td>";
        html+="<td><button onclick='javascript: modify("+i+")'>Update</button></td>";

        html+="</tr>";
        }
        html+="</table>";
    }else
        html+="<p style='color:red;'>No data found</p>";
    
    $("#viewdata").html(html); 
    }
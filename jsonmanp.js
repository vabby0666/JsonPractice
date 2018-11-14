var data=new Array();

    var text;

   function storedata(){
   		if(localStorage.getItem("storeddata")!=null)      
            data=JSON.parse(localStorage.getItem("storeddata"));
    }

    function modify(x){
    	storedata();
        $("#updatedata").show();
        $("#viewdata").hide();      
        $(nameupd).val(data[x].name);
        $(emailupd).val(data[x].email);
        $(phoneupd).val(data[x].phone);
        $(flagupd).val(x);
    }

    $(sub_btn).click(function(){

            var myform=document.getElementById('myform');
            formdata=new FormData(myform);
            var n=formdata.get('name');
            var e=formdata.get('email');
            var p=formdata.get('phone');
            $("#success").css("color","red");
            if(n.length<3){
                $("#success").html("Name should be more than 3 characters");
                text=$(dvCSV).html();   
                $(dvCSV).css("color","red");
                $(dvCSV).html(text+ "<br> Name should be more than 3 characters where:"+n);
                    
            }
            else if(e.indexOf('@') < 0 || e.indexOf('.') < 0 || e.lastIndexOf('.')<e.indexOf('@') || (e.lastIndexOf('.')+1)>=(e.length)) {
                $("#success").html("invalid Email Address");   
                text=$(dvCSV).html();                
                $(dvCSV).css("color","red");
                $(dvCSV).html(text+"<br>invalid Email Address where:"+e);
            }
            else if(p.length!=10 || isNaN(p)){
                $("#success").html("Enter a 10-digit Mobile Number");  
                text=$(dvCSV).html();
                $(dvCSV).css("color","red");
                $(dvCSV).html(text+" <br> Enter a 10-digit Mobile Number where:"+p);       
            }
            else{
                dataadd();
            }
    });

    $(updone).click(function(){
    		storedata();
            var myform=document.getElementById('myform1');
            formdata=new FormData(myform);
            var n=formdata.get('nameupd');
            var e=formdata.get('emailupd');
            var p=formdata.get('phoneupd');
            var x=formdata.get('flagupd');
            var flag1=1;
            $("#success1").css("color","red");
            if(n.length<3){
                $("#success1").html("Name should be more than 3 characters");   
                
            }
            else if(e.indexOf('@') < 0 || e.indexOf('.') < 0 || e.lastIndexOf('.')<e.indexOf('@') || (e.lastIndexOf('.')+1)>=(e.length)) {
                $("#success1").html("invalid Email Address");   
                
            }
            else if(p.length!=10){
                $("#success1").html("Enter a 10-digit Mobile Number");   
            }
            else{
                for(i=0;i<data.length;i++)
                if(data[i].email==e)
                if(i!=x)
                flag1=0;
                if(flag1==1){
                data[x].name=n;
                data[x].email=e;
                data[x].phone=p;
                alert("Update Successfull!!");
                $("#updatedata").hide();
                $("#viewdata").show();
                viewdata();
                localStorage.setItem("storeddata",JSON.stringify(data));
                }
                else
                    $("#success1").html("Duplicate Data entered");
            }
    });

    function deletef(x){
    	storedata();
        data.splice(x,1);
        localStorage.setItem("storeddata",JSON.stringify(data));
        viewdata();
    }

function validate(evt) {
    var key=evt.keyCode;
    key=String.fromCharCode(key);

    if(isNaN(key)){
        evt.returnValue=false;
    }  
}

$("#cancel").click(function(){
    	$("#updatedata").hide();
        $("#viewdata").show();
    });
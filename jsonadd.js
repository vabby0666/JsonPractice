
var data=new Array();

    var text;

    function dataadd(){
    	storedata();
        var inputdata = {};
        var flag1=1;
        var myform=document.getElementById('myform');
            formdata=new FormData(myform);
            inputdata.name=formdata.get('name');
            inputdata.email=formdata.get('email');
            inputdata.phone=formdata.get('phone');
            myform.reset();
        for(i=0;i<data.length;i++)
            if(data[i].email==inputdata.email)
            {
                flag1=0;
                text=$(dvCSV).html();
                $(dvCSV).css("color","red");
                $(dvCSV).html(text+"<br> duplicate data found at:"+inputdata.email);
            }
        if(flag1==1){
        data.push(inputdata);
        localStorage.setItem("storeddata",JSON.stringify(data));
        $("#success").css("color","green");
        $("#success").html("Thanks for submission!! will contact you shortly.");
        /*$("#view_btn").trigger('click');*/        
        }
        else
            $("#success").html("duplicate data entered!!");
    }


function showData()
{
    event.preventDefault();
    var country=document.getElementById("cname").value;
    var startDate=document.getElementById("sdate").value;
    var endDate=document.getElementById("edate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");


    if(country=='' || startDate=='' || endDate=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+startDate+"T00:00:00Z&to="+endDate+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            //console.log(res);
            var length=res.length;
            var index=length-1;

            var bc=res[index].Confirmed;
            var ac=res[index].Active;
            var dc=res[index].Deaths;

            confirmed.innerHTML=bc;
            active.innerHTML=ac;
            deaths.innerHTML=dc;

            document.getElementById("res").style.display="block";
            
        })
    }
}
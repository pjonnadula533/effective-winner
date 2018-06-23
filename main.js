function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.Education);
  });
  var div2=document.getElementById("child2");
  function fun_education(edu){
    var list1=document.createElement("h2");
    list1.textContent="EDUCATIONAL QUALIFICATIONS";
    div2.appendChild(list1);
    var hr=document.createElement("hr");
    div2.appendChild(hr);
    var list=document.createElement("ul");
    div2.appendChild(list);
    for(var i=0;i<edu.length;i++){
      var listItem=document.createElement("li");
      listItem.textContent=edu[i].Degree;
      list.appendChild(listItem);
      var listItem1=document.createElement("p");
      listItem1.textContent=edu[i].Institute;
      list.appendChild(listItem1);
      var listItem2=document.createElement("p");
      listItem2.textContent=edu[i].Data;
      list.appendChild(listItem2);
    }
  }

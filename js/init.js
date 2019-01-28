$(document).ready(function(){
  includeHTML();

  $('.tabs').tabs();
  
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
  
  $("#education").append(parse(educationData));
  $("#work").append(parse(workData));
  $("#projects").append(parse(projectsData));
});

function parse(data){
  var retVal = '';
  
  for(idx in data){
    var entry = data[idx];
    var header = '';
    var body = '';
    var headerData = '';
    var bodyData = '';

    headerData += '<h4>';
    if(entry.year){
      headerData += entry.year + ' - ';
    }
    headerData += '<a>' + entry.header + '</a>';
    headerData += '</h4>';

    header += '<div class="collapsible-header Jura">' + headerData + '</div>';
    
    bodyData += '<p>' + entry.content + '</p>';

    if(entry.achievements){
      var achievementData = '<ul class="collection with-header">';
      achievementData += '<li class="collection-header"><h5>Achievements</h5></li>';
      for(achievementIdx in entry.achievements){
        achievementData += '<li class="collection-item">' + entry.achievements[achievementIdx] + '</li>';
      }
      achievementData += '</ul>';
      bodyData += achievementData;
    }
    body += '<div class="collapsible-body Jura">' + bodyData + '</div>';
    
    if(idx == 0){
      retVal += '<li class="active">' + header + body + '</li>';  
    }
    else{
      retVal += '<li>' + header + body + '</li>';  
    }
  }

  retVal = '<ul class="collapsible popout">' + retVal + '</ul>'; 
  return retVal;
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
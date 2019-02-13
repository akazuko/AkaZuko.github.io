$(document).ready(function(){
  includeHTML();

  $('.tabs').tabs();
  
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
  
  $("#education").append(prepareTimeline(educationData));
  $("#work").append(prepareTimeline(workData));
  $("#projects").append(plotProjects(projectsData));
});

function plotProjects(data) {
  var retVal = '';

  for(idx in data) {
    var entry = data[idx];
    var content = '';

    var cardTitle = '<span class="card-title Jura"><a>' + entry.header + '</a></span>';

    var cardContent = '<p class="Jura">' + entry.content + '</p>';
    cardContent = '<div class="card-content">' + cardTitle + cardContent + '</div>';

    var classes = 'waves-effect waves-light btn brown lighten-3 white-text';
    if (!entry.github) {
      classes += ' disabled';
    }
    var cardAction = '<a class="' + classes + '" href="'+ entry.github + '" target="_blank">code</a>';
    cardAction = '<div class="card-action">' + cardAction + '</div>';

    content = '<div class="card">' + cardContent + cardAction + '</div>';
    content = '<div class="col s12 m6 l6 xl6">' + content + '</div>';

    retVal += content;
  }

  retVal = '<div class="row">' + retVal + '</div>';
  console.log(retVal);
  return retVal;
}

function prepareTimeline(data){
  var retVal = '';
  var timeline__img = '<div class="cd-timeline__img cd-timeline__img--plain js-cd-img"></div>';
  
  for(idx in data){
    var entry = data[idx];
    var content = '';

    content += '<h2><a>' + entry.header + '</h2></a>';
    content += '<p>' + entry.content + '</p>';

    if(entry.achievements){
      var achievementData = '<ul class="collection with-header">';
      achievementData += '<li class="collection-header"><h5>Achievements</h5></li>';
      for(achievementIdx in entry.achievements){
        achievementData += '<li class="collection-item">' + entry.achievements[achievementIdx] + '</li>';
      }
      achievementData += '</ul>';
      content += achievementData;
    }

    var year = entry.year || idx;
    content += '<span class="cd-timeline__date">' + year + '</span>';
    content = '<div class="cd-timeline__content js-cd-content Jura">' + content + '</div>';
    content = timeline__img + content;
    
    retVal += '<div class="cd-timeline__block js-cd-block">' + content + '</div>';
  }

  retVal = '<div class="cd-timeline__container">' + retVal + '</div>';
  retVal = '<section class="cd-timeline js-cd-timeline">' + retVal + '</section>';

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
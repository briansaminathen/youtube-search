
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    });


function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyAh9oFwYUygR_8tEIwf1yNovUmxK0rHGGo',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<a href="https://www.youtube.com/watch?v='+ value.id.videoId +'" class="html5lightbox" target="_blank">';
    html += '<img src="' + value.snippet.thumbnails.medium.url + '"></a>';
    console.log(html);
    console.log(value.id.videoId);
  });

  $('#search-results').html(html);

}
});

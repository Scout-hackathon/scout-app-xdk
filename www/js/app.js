var skill = 0;
var etiquette = 0;
Parse.initialize("JeSEgrL1MX37qwgT2XzijyKn43Dfn09FuezJU6Jg", "NpYwPST1m7ItNpaz1G8lW5TwsSBZDaz2MtH0pXAj");
var User = Parse.Object.extend("User");
var query = new Parse.Query('User');
var userName='hi'
query.get("ElWAm3LNtS", {
  success: function(user) {
    // The object was retrieved successfully.
    userName = user.get('username');
    console.log(userName);
     document.getElementById("user").innerHTML = userName;
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});        
function main() {
  $('span').hover(function addRating() {
    $(this).removeClass('glyphicon glyphicon-star-empty');
    $(this).addClass('glyphicon glyphicon-star');
    $(this).prevAll('span').removeClass('glyphicon glyphicon-star-empty');
    $(this).prevAll('span').addClass('glyphicon glyphicon-star');
    $(this).nextAll('span').removeClass('glyphicon glyphicon-star');
    $(this).nextAll('span').addClass('glyphicon glyphicon-star-empty');

   /*ratings to save to db */ 

   skill = $('#skl-rat').children('.glyphicon-star').length;
    etiquette= $('#etq-rat').children('.glyphicon-star').length;
  });
  $('.btn').click(function saveRatings() {
    var User = Parse.Object.extend("User");
    var Rating=Parse.Object.extend("Rating");
    var rating= new Rating();
	var query = new Parse.Query('User');
	query.containedIn('objectId',['ElWAm3LNtS','YprBArHnni']);
	query.find({
		success: function(results){
			rating.set('userId',results[0]);
			rating.set('giverID',results[1]);
			rating.set('skill',skill);
			rating.set('etiquette',etiquette);
			rating.save({
				success: function(){
					window.location.replace("index.html")
				},
				error: function(results,error){
					alert('failed to create new object, with error code:' + error.message);
				}
			});
		},
		error: function(results,error){
			alert('failed to create new object, with error code:' + error.message);
		}
	});
  });
};
$(document).ready(main)
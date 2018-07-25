var custom = [];
var currentUser;
var listTitle;

function getUserData() {
	$.ajax('/user', {
		credentials: "include"
	})
	.then((res) => {
		currentUserId = res.user;
		getCurrentUsername();
		this.isAuthenticated = true
		if (typeof cb === 'function') {
			cb(res.json().user);
		}
	});
};

function getCurrentUsername() {
	$.get("/api/userInfo/" + currentUserId.googleId, function(data) {
		currentUser = data.username;
	});
};

$("#movieField").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submit").click();
    }
});

$("#submit").click(function(){
	var query = $("#movieField").val().trim();
	$.ajax({
      url: "https://api.themoviedb.org/3/search/movie?api_key=15f42708446edc241bf0072e277289fe&query=" + query,
      method: "GET"
    }).done(function(response) {
      $("#moviePoster").empty();
      for(i=0; i<response.results.length; i ++){
      	if(response.results[i].vote_count >= 75){
      		$("#moviePoster").append("<img class='customMoviePoster' id='" + response.results[i].title + "' src='https://image.tmdb.org/t/p/w200" + response.results[i].poster_path + "'>");
      	}
      }
	});
});

$(document).on("click", ".customMoviePoster", function(){
	var inList = false;
	var name = $(this).attr("id");
	var image = $(this).attr("src");
	var newCustom = {
		name: name,
		score: 0,
		appearances: 0,
		image: image,
		rank: 0
	};
	if(custom.length > 0){
		for(i=0; i < custom.length; i++) {
			if(newCustom.name === custom[i].name){
				inList = true;
			}else{}
		}
		if(inList === false){
			custom.push(newCustom);
		}
	}else{
		custom.push(newCustom);
	}
	displayCustomList();
});

function displayCustomList(){
	$("#customDisplay").empty();
	for(i=0; i<custom.length; i++){
		$("#customDisplay").append("<div class='row customName'>" + custom[i].name + "</div>");
	}
}

$("#finished").click(function(){
	listTitle = $("#titleField").val().trim();
	$.get("/custom", function(data) {
		postCustomList();
	});
});

function postCustomList() {
	if(custom.length >= 8 && listTitle.length > 0){
		$.ajax({
		method: "POST",
		url: "/custom/customList",
		data: {
			user: currentUser,
			customList: custom,
			listName: listTitle
		}
		}).done(function(data) {
		});
	}else if(custom.length >=8 && listTitle.length === 0){
		$("#errorMessage").empty();
		$("#errorMessage").append("You must title your list");
	}else if(custom.length < 8 && listTitle.length > 0){
		$("#errorMessage").empty();
		$("#errorMessage").append("Your list must have at least 8 movies");
	}else{
		$("#errorMessage").empty();
		$("#errorMessage").append("You must title your list and pick at least 8 movies");
	}
	setTimeout(function(){ 
		$("#errorMessage").empty();
	}, 3000);
};

getUserData();






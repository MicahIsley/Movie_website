var scores = [];
var marvelMovies = [
	{name: "Ant Man",score: 0,appearances: 0,image: "antMan",rank: 0},
	{name: "Ant Man 2",score: 0, appearances: 0,image: "antMan2",rank: 0},
	{name: "Avengers",score: 0,appearances: 0,image: "avengers",rank: 0},
	{name: "Avengers: Age of Ultron",score: 0,appearances: 0,image: "avengers2",rank: 0},
	{name: "Avengers: Infinity War",score: 0,appearances: 0,image: "avengers3",rank: 0},
	{name: "Black Panther",score: 0,appearances: 0,image: "blackPanther",rank: 0},
	{name: "Captain America: The First Avenger",score: 0,appearances: 0,image: "captainAmerica",rank: 0},
	{name: "Captain America: The Winter Soldier",score: 0,appearances: 0,image: "captainAmerica2",rank: 0},
	{name: "Captain America: Civil War",score: 0,appearances: 0,image: "captainAmerica3",rank: 0},
	{name: "Doctor Strange",score: 0,appearances: 0,image: "doctorStrange",rank: 0},
	{name: "Guardians of the Galaxy",score: 0,appearances: 0,image: "guardians",rank: 0},
	{name: "Guardians of the Galaxy Vol.2",score: 0,appearances: 0,image: "guardians2",rank: 0},
	{name: "The Incredible Hulk",score: 0,appearances: 0,image: "hulk",rank: 0},
	{name: "Iron Man",score: 0,appearances: 0,image: "ironMan",rank: 0},
	{name: "Iron Man 2",score: 0,appearances: 0,image: "ironMan2",rank: 0},
	{name: "Iron Man 3",score: 0,appearances: 0,image: "ironMan3",rank: 0},
	{name: "Spiderman: Homecoming",score: 0,appearances: 0,image: "spidermanHomecoming",rank: 0},
	{name: "Thor",score: 0,appearances: 0,image: "thor",rank: 0},
	{name: "Thor: The Dark World",score: 0,appearances: 0,image: "thor2",rank: 0},
	{name: "Thor: Ragnarok",score: 0,appearances: 0,image: "thor3",rank: 0}
];
var pixarMovies = [
	{name: "A Bug's Life",score: 0,appearances: 0,image: "aBugsLife",rank: 0},
	{name: "Brave",score: 0,appearances: 0,image: "brave",rank: 0},
	{name: "Cars",score: 0,appearances: 0,image: "cars",rank: 0	},
	{name: "Cars 2",score: 0,appearances: 0,image: "cars2",rank: 0},
	{name: "Cars 3",score: 0,appearances: 0,image: "cars3",rank: 0},
	{name: "Coco",score: 0,appearances: 0,image: "coco",rank: 0	},
	{name: "Finding Dory",score: 0,appearances: 0,image: "findingDory",rank: 0},
	{name: "Finding Nemo",score: 0,appearances: 0,image: "findingNemo",rank: 0},
	{name: "The Good Dinosaur",score: 0,appearances: 0,image: "theGoodDinosaur",rank: 0},
	{name: "The Incredibles",score: 0,appearances: 0,image: "theIncredibles",rank: 0},
	{name: "Incredibles 2",score: 0,appearances: 0,image: "incredibles2",rank: 0},
	{name: "Inside Out",score: 0,appearances: 0,image: "insideOut",rank: 0},
	{name: "Monsters, Inc.",score: 0,appearances: 0,image: "monstersInc",rank: 0},
	{name: "Monsters University",score: 0,appearances: 0,image: "monstersUniversity",rank: 0},
	{name: "Ratatouille",score: 0,appearances: 0,image: "ratatouille",rank: 0},
	{name: "Toy Story",score: 0,appearances: 0,image: "toyStory",rank: 0},
	{name: "Toy Story 2",score: 0,appearances: 0,image: "toyStory2",rank: 0},
	{name: "Toy Story 3",score: 0,appearances: 0,image: "toyStory3",rank: 0},
	{name: "Up",score: 0,appearances: 0,image: "up",rank: 0	},
	{name: "Wall-E",score: 0,appearances: 0,image: "wallE",rank: 0}
];
var top2017 = [
	{name: "Star Wars: The Last Jedi",score: 0,appearances: 0,image: "starWars8",rank: 0},
	{name: "Beauty and the Beast",score: 0,appearances: 0,image: "beautyAndTheBeast",rank: 0},
	{name: "Wonder Woman",score: 0,appearances: 0,image: "wonderWoman",rank: 0},
	{name: "Jumanji: Welcome to the Jungle",score: 0,appearances: 0,image: "jumanji2",rank: 0},
	{name: "Guardians of the Galaxy Vol.2",score: 0,appearances: 0,image: "guardians2",rank: 0},
	{name: "Spider-man: Homecoming",score: 0,appearances: 0,image: "spidermanHomecoming",rank: 0},
	{name: "It",score: 0,appearances: 0,image: "it",rank: 0},
	{name: "Thor: Ragnarok",score: 0,appearances: 0,image: "thor3",rank: 0},
	{name: "Despicable Me 3",score: 0,appearances: 0,image: "despicableMe3",rank: 0},
	{name: "Justice League",score: 0,appearances: 0,image: "justiceLeague",rank: 0},
	{name: "Logan",score: 0,appearances: 0,image: "logan",rank: 0},
	{name: "The Fate of the Furious",score: 0,appearances: 0,image: "fastAndFurious8",rank: 0},
	{name: "Coco",score: 0,appearances: 0,image: "coco",rank: 0},
	{name: "Dunkirk",score: 0,appearances: 0,image: "dunkirk",rank: 0},
	{name: "Get Out",score: 0,appearances: 0,image: "getOut",rank: 0},
	{name: "The LEGO Batman Movie",score: 0,appearances: 0,image: "legoBatman",rank: 0},
	{name: "The Boss Baby",score: 0,appearances: 0,image: "theBossBaby",rank: 0},
	{name: "The Greatest Showman",score: 0,appearances: 0,image: "theGreatestShowman",rank: 0},
	{name: "Pirates of the Caribbean: Dead Men Tell No Tales",score: 0,appearances: 0,image: "pirates5",rank: 0},
	{name: "Kong: Skull Island",score: 0,appearances: 0,image: "kongSkullIsland",rank: 0}
];
var customMovies = [];

//Global Variables

var username;
var selectedCategory;
var movie1;
var movie2;
var numberFinished = 0;
var sortScores;
var top8 = [];
var top4 = [];
var top2 = [];
var finalRanking = [];	
var currentUserId;
var currentUser;
var multiplayerGroup = [];
var multiplayerSize;
var mode = "group";
var onlineTimeout;
var firstRoundTimeout;
var downloadCompiledTimeout;
var votingTimeout;
var compiledRank = [];
var multiplayerRound = 0;
var player;

//Login/logout functions

window.onunload = function(){
	$.ajax({
		method: "DELETE",
		url: "/online/delete/" + currentUser,
		data: {
			username: currentUser,
		}
	}).done(function(data) {
	});
};

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
		checkForOnlineDuplicates();
	});
};

function checkForOnlineDuplicates(){
	$("#currentUser").append("<div id='currentUser' class='row groupMember'>" + currentUser + "</div>");
	$.get("/online", function(data) {
		if(data.length === 0){
			displayOnline();
		}else{
			for(i=0; i < data.length; i++){
				if(data[i].username === currentUser){
					console.log("Already online");
				}else{
					displayOnline();
				}
			}
		}
	});
}

function displayOnline() {
	$.ajax({
		method: "POST",
		url: "/online/" + currentUser,
		data: {
			username: currentUser,
		}
	}).done(function(data) {
	});
};

$("#logoutButton").click(function() {
	$.ajax({
		method: "DELETE",
		url: "/online/delete/" + currentUser,
		data: {
			username: currentUser,
		}
	}).done(function(data) {
	});
});

function findOnline() {
	$.get("/online", function(data) {
		$("#onlinePlayers").empty();
		for(i=0; i < data.length; i++) {
			if(data[i].username === currentUser){
			}else{
				$("#onlinePlayers").append("<div class='row onlinePlayer'>" + data[i].username + "<div class='glyphicon glyphicon-plus-sign' id='" + data[i].username + "'></div></div>");
			}
		}
	});
	onlineTimeout = setTimeout("findOnline()", 1000);
};

//Multiplayer Function

$(document).on("click", ".glyphicon-plus-sign", function(){
	var addPlayer = $(this).attr("id");
	$("#yourGroupMembers").empty();
	if (multiplayerGroup.indexOf(addPlayer) === -1){
		multiplayerGroup.push(addPlayer);
	}else{}
	for(i=0; i < multiplayerGroup.length; i++){
		$("#yourGroupMembers").append("<div class='row'>" + multiplayerGroup[i] + "<div class='glyphicon glyphicon-minus-sign' id='" + multiplayerGroup[i] + "'></div></div>");
	}
	console.log(multiplayerGroup);
});

$(document).on("click", ".glyphicon-minus-sign", function(){
	var removePlayer = $(this).attr("id");
	console.log(removePlayer);
	multiplayerGroup.splice(removePlayer);
	console.log(multiplayerGroup);
	$("#yourGroupMembers").empty();
	for(i=0; i < multiplayerGroup.length; i++){
		$("#yourGroupMembers").append("<div class='row'>" + multiplayerGroup[i] + "<div class='glyphicon glyphicon-minus-sign' id='" + multiplayerGroup[i] + "'></div></div>");
	}
});

$("#readyButton").click(function() {
	multiplayerGroup.push(currentUser);
	multiplayerSize = $("#yourGroupMembers > div").length + 1;
	$.ajax({
		method: "PUT",
		url: "/online/updateReady/" + currentUser
	}).done(function(data) {
	});
	$("#multiplayerLobby").hide();
	clearTimeout(onlineTimeout);
	clearMultiplayer();
});

//Round-robin functions

function pickMovieOne() {
	$("#movie1").empty();
	movie1 = scores[Math.floor(Math.random() * scores.length)];
	if(movie1.appearances < 1) {
		displayMovieOne();
	}else{
		if(numberFinished >= scores.length-1){
			$("#movie1").append("<div class='byePoster'>Bye</div>");
			pickMovieTwo();
		}else{
			pickMovieOne();
		}
	}
}

function pickMovieTwo() {
	$("#movie2").empty();
	movie2 = scores[Math.floor(Math.random() * scores.length)];
	if(movie1 === movie2) {
		pickMovieTwo();
	}else{
		if(movie2.appearances < 1) {
			displayMovieTwo();
		}else{
			if(numberFinished >= scores.length){
				$("#movie2").append("<div class='byePoster'>Bye</div>");
			}else{
				pickMovieTwo();
			}
		}
	}
}

function displayMovieOne() {
	var movie1Poster = movie1.image;
	for(i=0; i < scores.length; i++){
		if(movie1Poster === scores[i].image){
			scores[i].appearances ++;
		}else{}
	}
	if(selectedCategory === customMovies){
		$("#movie1").append("<img class='moviePoster' id='" + movie1Poster + "' src='" + movie1.image + "'>");
	}else{
		$("#movie1").append("<img class='moviePoster' id='" + movie1Poster + "' src='images/" + categoryId + "/" + movie1Poster + ".jpg'>");
	}
	pickMovieTwo();
}

function displayMovieTwo() {
	var movie2Poster = movie2.image;
	for(i=0; i < scores.length; i++){
		if(movie2Poster === scores[i].image){
			scores[i].appearances ++;
		}else{}
	}
	if(selectedCategory === customMovies){
		$("#movie2").append("<img class='moviePoster' id='" + movie2Poster + "' src='" + movie2.image + "'>");
	}else{
		$("#movie2").append("<img class='moviePoster' id='" + movie2Poster + "' src='images/" + categoryId + "/" + movie2Poster + ".jpg'>");
	}
}

$(document).on("click", ".moviePoster", function(){
	var picked = $(this).attr("id");
	for(i=0; i < scores.length; i++){
		if(picked === scores[i].image){
			scores[i].score ++;
		}
	}
	checkEnding();
});

function checkEnding() {
	numberFinished = 0;
	for(i=0; i<scores.length; i++) {
		if(scores[i].appearances === 1){
			numberFinished ++;
			if(numberFinished === scores.length){
				bracketStage();
			}else{}
		}else{}
	}
	pickMovieOne();
}

//Bracket Functions

function bracketStage(){
	postToMultiplayer();
	clearVotingData();
};

//Multiplayer Database
function clearMultiplayer() {
	$.get("/multiplayer", function(data) {
		if(data.length === 0){
			beginGame();
		}else{
			$.ajax({
				method: "DELETE",
				url: "/multiplayer/deleteAll"
			}).done(function(data) {
				beginGame();
			});
		}
	});
};

function postToMultiplayer() {
	$.ajax({
		method: "POST",
		url: "/multiplayer/" + currentUser,
		data: {
			user: currentUser,
			ranking: scores
		}
		}).done(function(data) {
			checkForAllData()
		});
};

function checkForAllData() {
	$.get("/multiplayer", function(data) {
		if(data.length === multiplayerSize) {
			compileRankings(data);
		}
	});
	firstRoundTimeout = setTimeout("checkForAllData()", 1000);
};

//Ranking

function compileRankings(data) {
	clearTimeout(firstRoundTimeout);
	for(var i = 0; i < data[0].ranking.length; i ++) {
		var combinedScore = 0;
		for(var j = 0; j < multiplayerSize; j ++) {
			var firstPart = parseInt(data[j].ranking[i].score);
			var secondPart = parseInt(combinedScore);
			combinedScore = firstPart + secondPart;
		}
		var compiledObject = {
			score: combinedScore,
			image: data[0].ranking[i].image,
			name: data[0].ranking[i].name
			}
		compiledRank.push(compiledObject);
	}
	sortCompiledScores();
}

function pushEliminated(){
	if(sortScores.length >= 16){
		for(i = 16; i < sortScores.length; i ++){
			finalRanking.push(sortScores[i]);
		}
	}else if(sortScores.length >=8 && sortScores.length < 16){
		for(i = 0; i < sortScores.length; i ++){
			if(i < 8){
				top8.push(sortScores[i]);
				multiplayerRound = 8;
			}else{
				finalRanking.push(sortScores[i]);
			}
		}
	}
	console.log(finalRanking);
	console.log(sortScores);
	displayMultiplayerBracket();
}

function sortCompiledScores() {
	sortScores = compiledRank.slice(0);
	sortScores.sort(function(a, b){return b.score-a.score});
	for(i=0; i<sortScores.length; i++){
		sortScores[i].rank = 1 + i;

	}
	checkAndDeleteCompiledScores();
}

//Compiled Database

function checkAndDeleteCompiledScores() {
	$.get("/compiled", function(data) {
		if(data.length > 0) {
			$.ajax({
				method: "DELETE",
				url: "/compiled/deleteAll"
			}).done(function(data) {
				uploadCompiledScores();
			});
		}else{
			uploadCompiledScores();
		}
	});
}

function uploadCompiledScores() {
	$.ajax({
		method: "POST",
		url: "/compiled/one",
		data: {
			user: "one",
			ranking: sortScores
		}
		}).done(function(data) {
			downloadCompiledScores();
		});
}

function downloadCompiledScores() {
	sortScores = [];
	$.get("/compiled", function(data) {
		for(i=0; i < data[0].ranking.length; i++){
			sortScores.push(data[0].ranking[i]);
		}
		pushEliminated();
		console.log("Sort Scores");
		console.log(sortScores);
	});
}

function displayMultiplayerBracket() {
	$("#leftSlot").empty();
	$("#rightSlot").empty();
	$("#leftSlot").css("border-color", "transparent");
	$("#rightSlot").css("border-color", "transparent");
	$("#firstRound").hide();
	$("#multiplayerMatchups").show();
	if(selectedCategory === customMovies){
		if(top8.length < 8){
			$("#roundHeading").text("Top 16");
			$("#leftSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[multiplayerRound].image + "' src='" + sortScores[multiplayerRound].image + "'>");
			$("#rightSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[15 - multiplayerRound].image + "' src='" + sortScores[15 - multiplayerRound].image + "'>");
		}else if(top8.length === 8 && top4.length < 4){
			$("#roundHeading").text("Top 8");
			$("#leftSlot").append("<img class='top8Poster posterPoster' id='" + top8[multiplayerRound - 8].image + "' src='" + top8[multiplayerRound - 8].image + "'>");
			$("#rightSlot").append("<img class='top8Poster posterPoster' id='" + top8[15 - multiplayerRound].image + "' src='" + top8[15 - multiplayerRound].image + "'>");
		}else if(top4.length === 4 && top2.length < 2) {
			$("#roundHeading").text("Top 4");
			$("#leftSlot").append("<img class='top4Poster posterPoster' id='" + top4[multiplayerRound - 12].image + "' src='" + top4[multiplayerRound - 12].image + "'>");
			$("#rightSlot").append("<img class='top4Poster posterPoster' id='" + top4[15 - multiplayerRound].image + "' src='" + top4[15 - multiplayerRound].image + "'>");
		}else if(top2.length === 2){
			$("#roundHeading").text("Top 2");
			$("#leftSlot").append("<img class='top2Poster posterPoster' id='" + top2[multiplayerRound - 14].image + "' src='" + top2[multiplayerRound - 14].image + "'>");
			$("#rightSlot").append("<img class='top2Poster posterPoster' id='" + top2[15 - multiplayerRound].image + "' src='" + top2[15 - multiplayerRound].image + "'>");
		}
	}else{
		if(multiplayerRound < 8){
			$("#roundHeading").text("Top 16");
			$("#leftSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[multiplayerRound].image + "' src='images/" + categoryId + "/" + sortScores[multiplayerRound].image + ".jpg'>");
			$("#rightSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[15 - multiplayerRound].image + "' src='images/" + categoryId + "/" + sortScores[15 - multiplayerRound].image + ".jpg'>");
		}else if(multiplayerRound >= 8 && multiplayerRound < 12){
			$("#roundHeading").text("Top 8");
			$("#leftSlot").append("<img class='top8Poster posterPoster' id='" + top8[multiplayerRound - 8].image + "' src='images/" + categoryId + "/" + top8[multiplayerRound - 8].image + ".jpg'>");
			$("#rightSlot").append("<img class='top8Poster posterPoster' id='" + top8[15 - multiplayerRound].image + "' src='images/" + categoryId + "/" + top8[15 - multiplayerRound].image + ".jpg'>");
		}else if(multiplayerRound >=12 && multiplayerRound < 14) {
			$("#roundHeading").text("Top 4");
			$("#leftSlot").append("<img class='top4Poster posterPoster' id='" + top4[multiplayerRound - 12].image + "' src='images/" + categoryId + "/" + top4[multiplayerRound - 12].image + ".jpg'>");
			$("#rightSlot").append("<img class='top4Poster posterPoster' id='" + top4[15 - multiplayerRound].image + "' src='images/" + categoryId + "/" + top4[15 - multiplayerRound].image + ".jpg'>");
		}else if(top2.length === 2){
			$("#roundHeading").text("Top 2");
			$("#leftSlot").append("<img class='top2Poster posterPoster' id='" + top2[multiplayerRound - 14].image + "' src='images/" + categoryId + "/" + top2[multiplayerRound - 14].image + ".jpg'>");
			$("#rightSlot").append("<img class='top2Poster posterPoster' id='" + top2[15 - multiplayerRound].image + "' src='images/" + categoryId + "/" + top2[15 - multiplayerRound].image + ".jpg'>");
		}
	}
}

$(document).on("click", ".bracketPoster", function(){
	$(this).removeClass("bracketPoster");
	var movieId = $(this).first().attr('id');
	var spliceId = movieId.split(" ");
	var movieName = spliceId[0];
	var movieRank = spliceId[1];
	var loserIdBracket = $(this).parent().parent().siblings().children().children().attr("id")
	var loserSpliceId = loserIdBracket.split(" ");
	var loserName = loserSpliceId[0];
	var loserRank = loserSpliceId[1];
	var loser = $(this).parent().parent().siblings().children().children();
	loser.removeClass("bracketPoster");
	loser.css("-webkit-filter", "grayscale(1)");
	$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
	multiplayerRound ++;
	console.log(multiplayerRound);
	createVotingDatabase();
});

//Voting

function postVote() {
	if($("#leftSlot").contents().length === 2) {
		postVoteLeft();
	}else if($("#rightSlot").contents().length === 2) {
		postVoteRight();
	}
};

function postVoteLeft() {
	$.ajax({
		method: "PUT",
		url: "/voting/updateLeft" 
	}).done(function(data) {
		determineRoundWinner();
	});
};

function postVoteRight() {
	$.ajax({
		method: "PUT",
		url: "/voting/updateRight" 
	}).done(function(data) {
		determineRoundWinner();
	});
};

function createVotingDatabase() {
	$.get("/voting", function(data) {
		if(data.length > 0) {
			postVote();
		}else {
			$.ajax({
				method: "POST",
				url: "/newVoting",
				data: {
					_id: 1,
					randNum: Math.floor((Math.random() * 10) + 1)
				}
				}).done(function(data) {
					postVote();
				});
		}
	});
}

function clearVotingData() {
	$.get("/voting", function(data) {
		if(data.length === 0){
			console.log(multiplayerRound);
			if(multiplayerRound > 0) {
					displayMultiplayerBracket();
			}else{}
		}else{
			$.ajax({
				method: "DELETE",
				url: "/voting/deleteAll"
			}).done(function(data) {
				if(multiplayerRound > 0) {
					displayMultiplayerBracket();
				}else{}
			});
		}
	});
};

function determineRoundWinner() {
	$.get("/voting", function(data) {
		if(data[0].votes === multiplayerSize){
			clearTimeout(votingTimeout);
			var winningSide = "tie";
			if(data[0].left > data[0].right){
				winningSide = "left";
			}else if(data[0].right > data[0].left) {
				winningSide = "right";
			}else {
				winningSide = "tie";
			}
			var leftId = $("#leftSlot").children("img").attr("id");
			var rightId = $("#rightSlot").children("img").attr("id");
			var randomNumber = data[0].randNum;
			for (var i = 0; i < sortScores.length; i++) {
				if(winningSide === "left"){
					if (sortScores[i].image === rightId) {
						if(top2.length < 2){
							finalRanking.push(sortScores[i]);
						}else if (top2.length === 2){
							sortScores[i].rank = 2;
							finalRanking.push(sortScores[i]);
						}
					}
					if (sortScores[i].image === leftId) {
						if(top8.length < 8){
							top8.push(sortScores[i]);
						}else if(top8.length === 8 && top4.length < 4){
							top4.push(sortScores[i]);
						}else if(top4.length === 4 && top2.length < 2){
							top2.push(sortScores[i]);
						}else if(top2.length === 2){
							sortScores[i].rank = 1;
							finalRanking.push(sortScores[i]);
						}
					}else{}
				}else if(winningSide === "right") {
					if (sortScores[i].image === leftId) {
						if(top2.length < 2){
							finalRanking.push(sortScores[i]);
						}else if (top2.length === 2){
							sortScores[i].rank = 2;
							finalRanking.push(sortScores[i]);
						}
					}
					if (sortScores[i].image === rightId) {
						if(top8.length < 8){
							top8.push(sortScores[i]);
						}else if(top8.length === 8 && top4.length < 4){
							top4.push(sortScores[i]);
						}else if(top4.length === 4 && top2.length < 2){
							top2.push(sortScores[i]);
						}else if(top2.length === 2){
							sortScores[i].rank = 1;
							finalRanking.push(sortScores[i]);
						}
					}else{}
				}else if(winningSide === "tie") {
					if(randomNumber > 5){
						if (sortScores[i].image === rightId) {
							if(top2.length < 2){
								finalRanking.push(sortScores[i]);
							}else if (top2.length === 2){
								sortScores[i].rank = 2;
								finalRanking.push(sortScores[i]);
							}
						}
						if (sortScores[i].image === leftId) {
							if(top8.length < 8){
								top8.push(sortScores[i]);
							}else if(top8.length === 8 && top4.length < 4){
								top4.push(sortScores[i]);
							}else if(top4.length === 4 && top2.length < 2){
								top2.push(sortScores[i]);
							}else if(top2.length === 2){
								sortScores[i].rank = 1;
								finalRanking.push(sortScores[i]);
							}
							winningSide = "left";
						}else{}
					}else{
						if (sortScores[i].image === leftId) {
							if(top2.length < 2){
								finalRanking.push(sortScores[i]);
							}else if (top2.length === 2){
								sortScores[i].rank = 2;
								finalRanking.push(sortScores[i]);
							}
						}
						if (sortScores[i].image === rightId) {
							if(top8.length < 8){
								top8.push(sortScores[i]);
							}else if(top8.length === 8 && top4.length < 4){
								top4.push(sortScores[i]);
							}else if(top4.length === 4 && top2.length < 2){
								top2.push(sortScores[i]);
							}else if(top2.length === 2){
								sortScores[i].rank = 1;
								finalRanking.push(sortScores[i]);
							}
							winningSide = "right";
						}else{}
					}
				}
			}
			if(top8.length === 8 && top4.length === 0){
				sortBracketLoserScores();
			}else if(top4.length === 4 && top2.length === 0){
				sortTop8LoserScores();
			}else if(top2.length === 2){
				sortTop4LoserScores();
			}
			displayWinningSide(winningSide);
		}else{
			votingTimeout = setTimeout("determineRoundWinner()", 500);
		}
	});
}

function displayWinningSide(winningSide){
	if(winningSide === "left"){
		$("#leftSlot").children().css("border-color", "green");
		if(finalRanking.length === selectedCategory.length) {
			setTimeout("displayFinalRanking()", 500);
		}else{
			setTimeout("clearVotingData()", 500);
		}
	}else if(winningSide === "right"){
		$("#rightSlot").children().css("border-color", "green");
		if(finalRanking.length === selectedCategory.length) {
			setTimeout("displayFinalRanking()", 500);
		}else{
			setTimeout("clearVotingData()", 500);
		}
	}
}

function sortBracketLoserScores() {
	finalRanking.sort(function(a, b){return b.rank-a.rank});
	for (var i = 0; i < finalRanking.length; i++){
		finalRanking[i].rank = selectedCategory.length - i;
	}
}

function sortTop8LoserScores() {
	var beginning = selectedCategory.length - 8;
	var ending = selectedCategory.length - 5;
	finalRanking.slice(beginning, ending).sort(function(a, b){return b.rank-a.rank});
	for (var i = beginning; i < (ending + 1); i++){
		finalRanking[i].rank = selectedCategory.length - i;
	}
}

function sortTop4LoserScores() {
	var beginning = selectedCategory.length - 4;
	var ending = selectedCategory.length - 3;
	finalRanking.slice(beginning, ending).sort(function(a, b){return b.rank-a.rank});
	for (var i = beginning; i < (ending + 1); i++){
		finalRanking[i].rank = selectedCategory.length - i;
	}
}

$(document).on("click", ".top8Poster", function(){
	$(this).removeClass("top8Poster");
	var top4MovieName = $(this).attr("id");
	var loserIdTop8Name = $(this).parent().parent().siblings().children().children().attr("id");
	var loser = $(this).parent().parent().siblings().children().children();
	loser.removeClass("bracketPoster");
	loser.css("-webkit-filter", "grayscale(1)");
	$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
	multiplayerRound ++;
	console.log(multiplayerRound);
	createVotingDatabase();
});

$(document).on("click", ".top4Poster", function(){
	var top4MoviePoster = $(this);
	var top2Image = $(this).attr("id");
	var rightLoserTop4Name = $(this).parent().parent().next().next().children().children().attr("id");
	var leftLoserTop4Name = $(this).parent().parent().prev().prev().children().children().attr("id");
	var loserIdTop4Name = $(this).parent().parent().siblings().children().children().attr("id");
	$(this).removeClass("top4Poster");
	var loser = $(this).parent().parent().siblings().children().children();
	loser.removeClass("bracketPoster");
	loser.css("-webkit-filter", "grayscale(1)");
	$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
	multiplayerRound ++;
	console.log(multiplayerRound);
	createVotingDatabase();
});

$(document).on("click", ".top2Poster", function(){
	$(this).removeClass("top2Poster");
	var loser = $(this).parent().parent().siblings().children().children();
	loser.removeClass("bracketPoster");
	loser.css("-webkit-filter", "grayscale(1)");
	$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
	var winnerName = $(this).attr("id");
	var leftFinalLoserName = $(this).parent().parent().next().next().children().children().attr("id");
	var rightFinalLoserName = $(this).parent().parent().prev().prev().children().children().attr("id");
	createVotingDatabase();
});

function displayFinalRanking(){
	$("#championDisplay").show();
	$("#multiplayerMatchups").hide();
	$("#leftSlot").empty();
	$("#rightSlot").empty();
	$("#rankingDisplay").empty();
	if (finalRanking.length === scores.length){
		finalRanking.sort(function(a, b){return a.rank-b.rank});
		console.log(finalRanking);
		for(i=0; i<finalRanking.length; i++){
			finalRanking[i].rank = i + 1;
			$("#rankingDisplay").append("<p>" + (i+1) + ". " + finalRanking[i].name + "</p>");
		}
		if(selectedCategory === customMovies){
			$("#overallWinner").append("<img id='winner' src='" + finalRanking[0].image + "'>");
		}else{
			$("#overallWinner").append("<img id='winner' src='images/" + categoryId + "/" + finalRanking[0].image + ".jpg'>");
		}
		saveRankingToDatabase();
	}
}

/*function checkForDuplicateUser() {
	$.ajax({
		method: "GET",
		url: "/rankings/user"
	}).done(function(data) {
		console.log(data);
		if(data.user === username){
			console.log("Username Already Exists");
		}else{
			saveRankingToDatabase();
		}
	});
}*/

function saveRankingToDatabase() {
	$.ajax({
		method: "POST",
		url: "/rankings/" + username,
		data: {
			user: username,
			ranking: finalRanking
		}
	}).done(function(data) {
	});
};

$("#replayButton").click(function(){
	$("#multiplayerLobby").show();
	$("#championDisplay").hide();
});

$(".category").click(function(){
	categoryId  = $(this).attr("id");
	$(".category").children().css("border-width", "0px");
	$(this).children().css({"border-width": "7px", "border-color": "green", "border-style": "ridge"});
	if(categoryId === "marvelMovies"){
		selectedCategory = marvelMovies;
	}else if(categoryId === "pixarMovies"){
		selectedCategory = pixarMovies;
	}else if(categoryId === "top2017"){
		selectedCategory = top2017;
	}else if(categoryId === "customGame"){
		getCustomList();
	}
});

function getCustomList() {
	$.get("/customList", function(data) {
		console.log(data);
		if(data.length === 0){
			console.log("you need to make a list");
		}else{}
		for(var i=0; i < data[0].customList.length; i++){
			customMovies.push(data[0].customList[i]);
		}
		console.log(customMovies);
		selectedCategory = customMovies;
	});
}

$("#customGame").click(function(){
	$("#categorySelection").hide();
	$("#customSelection").show();
});

$("#backButton").click(function(){
	$("#categorySelection").show();
	$("#customSelection").hide();
});

function beginGame() {
	scores = [];
	for(var i=0; i < selectedCategory.length; i++){
		scores.push(selectedCategory[i]);
	}
	$("#firstRound").show();
	$("#championDisplay").hide();
	$(".moviePoster").remove();
	$(".bracketPoster").remove();
	$(".top8Poster").remove();
	$(".top4Poster").remove();
	$(".top2Poster").remove();
	$("#winner").remove();
	for(var i=0; i < scores.length; i++) {
		scores[i].appearances = 0;
		scores[i].score = 0;
		scores[i].rank = 0;
	}
	numberFinished = 0;
	top8 = [];
	top4 = [];
	top2 = [];
	finalRanking = [];
	compiledRank = [];
	sortScores = [];
	multiplayerRound = 0;
	pickMovieOne();
}

findOnline();
getUserData();

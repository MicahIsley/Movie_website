var scores = [];
var marvelMovies = [
	{
		name: "Ant Man",
		score: 0,
		appearances: 0,
		image: "antMan",
		rank: 0
	},
	{
		name: "Avengers",
		score: 0,
		appearances: 0,
		image: "avengers",
		rank: 0
	},
	{
		name: "Avengers: Age of Ultron",
		score: 0,
		appearances: 0,
		image: "avengers2",
		rank: 0
	},
	{
		name: "Captain America: The First Avenger",
		score: 0,
		appearances: 0,
		image: "captainAmerica",
		rank: 0
	},
	{
		name: "Captain America: The Winter Soldier",
		score: 0,
		appearances: 0,
		image: "captainAmerica2",
		rank: 0
	},
	{
		name: "Captain America: Civil War",
		score: 0,
		appearances: 0,
		image: "captainAmerica3",
		rank: 0
	},
	{
		name: "Doctor Strange",
		score: 0,
		appearances: 0,
		image: "doctorStrange",
		rank: 0
	},
	{
		name: "Guardians of the Galaxy",
		score: 0,
		appearances: 0,
		image: "guardians",
		rank: 0
	},
	{
		name: "Guardians of the Galaxy Vol.2",
		score: 0,
		appearances: 0,
		image: "guardians2",
		rank: 0
	},
	{
		name: "The Incredible Hulk",
		score: 0,
		appearances: 0,
		image: "hulk",
		rank: 0
	},
	{
		name: "Iron Man",
		score: 0,
		appearances: 0,
		image: "ironMan",
		rank: 0
	},
	{
		name: "Iron Man 2",
		score: 0,
		appearances: 0,
		image: "ironMan2",
		rank: 0
	},
	{
		name: "Iron Man 3",
		score: 0,
		appearances: 0,
		image: "ironMan3",
		rank: 0
	},
	{
		name: "Spiderman: Homecoming",
		score: 0,
		appearances: 0,
		image: "spidermanHomecoming",
		rank: 0
	},
	{
		name: "Thor",
		score: 0,
		appearances: 0,
		image: "thor",
		rank: 0
	},
	{
		name: "Thor: The Dark World",
		score: 0,
		appearances: 0,
		image: "thor2",
		rank: 0
	},
	{
		name: "Thor: Ragnarok",
		score: 0,
		appearances: 0,
		image: "thor3",
		rank: 0
	},
	{
		name: "Black Panther",
		score: 0,
		appearances: 0,
		image: "blackPanther",
		rank: 0
	}
];
var pixarMovies = [
	{
		name: "Toy Story",
		score: 0,
		appearances: 0,
		image: "toyStory",
		rank: 0		
	},
	{
		name: "A Bug's Life",
		score: 0,
		appearances: 0,
		image: "aBugsLife",
		rank: 0		
	},
	{
		name: "Toy Story 2",
		score: 0,
		appearances: 0,
		image: "toyStory2",
		rank: 0		
	},
	{
		name: "Monsters, Inc.",
		score: 0,
		appearances: 0,
		image: "monstersInc",
		rank: 0		
	},
	{
		name: "Finding Nemo",
		score: 0,
		appearances: 0,
		image: "findingNemo",
		rank: 0		
	},
	{
		name: "The Incredibles",
		score: 0,
		appearances: 0,
		image: "theIncredibles",
		rank: 0		
	},
	{
		name: "Cars",
		score: 0,
		appearances: 0,
		image: "cars",
		rank: 0		
	},
	{
		name: "Ratatouille",
		score: 0,
		appearances: 0,
		image: "ratatouille",
		rank: 0		
	},
	{
		name: "Wall-E",
		score: 0,
		appearances: 0,
		image: "wallE",
		rank: 0		
	},
	{
		name: "Up",
		score: 0,
		appearances: 0,
		image: "up",
		rank: 0		
	},
	{
		name: "Toy Story 3",
		score: 0,
		appearances: 0,
		image: "toyStory3",
		rank: 0		
	},
	{
		name: "Cars 2",
		score: 0,
		appearances: 0,
		image: "cars2",
		rank: 0		
	},
	{
		name: "Brave",
		score: 0,
		appearances: 0,
		image: "brave",
		rank: 0		
	},
	{
		name: "Monsters University",
		score: 0,
		appearances: 0,
		image: "monstersUniversity",
		rank: 0		
	},
	{
		name: "Inside Out",
		score: 0,
		appearances: 0,
		image: "insideOut",
		rank: 0		
	},
	{
		name: "The Good Dinosaur",
		score: 0,
		appearances: 0,
		image: "theGoodDinosaur",
		rank: 0		
	},
	{
		name: "Finding Dory",
		score: 0,
		appearances: 0,
		image: "findingDory",
		rank: 0		
	},
	{
		name: "Cars 3",
		score: 0,
		appearances: 0,
		image: "cars3",
		rank: 0		
	},
	{
		name: "Coco",
		score: 0,
		appearances: 0,
		image: "coco",
		rank: 0		
	}
];
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
var mode;
var onlineTimeout;
var firstRoundTimeout;
var votingTimeout;
var compiledRank = [];
var multiplayerRound = 0;

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
	console.log("hey");
	$.get("/online", function(data) {
		console.log(data);
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
	console.log("displayOnline");
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
			$("#onlinePlayers").append("<div class='row onlinePlayer' id='" + data[i].username + "'>" + data[i].username + "</div>");
		}
	});
	onlineTimeout = setTimeout("findOnline()", 1000);
};

findOnline();
getUserData();

$("#soloMode").click(function() {
	$("#gameModeSelection").hide();
	$("#categorySelection").show();
	mode = "solo";
});

$("#groupMode").click(function() {
	multiplayerGroup.push(currentUser);
	$("#gameModeSelection").hide();
	$("#multiplayerLobby").show();
	$("#yourGroupMembers").append("<div class='row groupMember'>" + currentUser + "</div>");
	mode = "group";
});

$(document).on("click", ".onlinePlayer", function(){
	var addPlayer = $(this).attr("id");
	$("#yourGroupMembers").empty();
	console.log(multiplayerGroup);
	if (multiplayerGroup.indexOf(addPlayer) === -1){
		multiplayerGroup.push(addPlayer);
	}else{}
	for(i=0; i < multiplayerGroup.length; i++){
		$("#yourGroupMembers").append("<div class='row'>" + multiplayerGroup[i] + "</div>");
	}
});

$("#readyButton").click(function() {
	multiplayerSize = $("#yourGroupMembers > div").length;
	$.ajax({
		method: "PUT",
		url: "/online/updateReady/" + currentUser
	}).done(function(data) {
	});
	$("#multiplayerLobby").hide();
	$("#categorySelection").show();
	clearTimeout(onlineTimeout);
	clearMultiplayer();
});

$("#multiButton").click(function() {
	$("#multiButton").hide();
	$(".multiDisplay").show();
});

function pickMovieOne() {
	$("#movie1").empty();
	movie1 = scores[Math.floor(Math.random() * scores.length)];
	if(movie1.appearances < 1) {
		displayMovieOne();
	}else{
		if(numberFinished >= scores.length-1){
				$("#movie1").append("Bye");
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
				$("#movie2").append("Bye");
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
	$("#movie1").append("<img class='moviePoster' id='" + movie1Poster + "' src='images/" + movie1Poster + ".jpg'>");
}

function displayMovieTwo() {
	var movie2Poster = movie2.image;
	for(i=0; i < scores.length; i++){
		if(movie2Poster === scores[i].image){
			scores[i].appearances ++;
		}else{}
	}
	$("#movie2").append("<img class='moviePoster' id='" + movie2Poster + "' src='images/" + movie2Poster + ".jpg'>");
}

$(document).on("click", ".moviePoster", function(){
	var picked = $(this).attr("id");
	for(i=0; i < scores.length; i++){
		if(picked === scores[i].image){
			scores[i].score ++;
		}
	}
	displayRanking();
});

function displayRanking() {
	$("#rankingDisplay").empty();
	sortScores = scores.slice(0);
	sortScores.sort(function(a, b){return b.score-a.score});
	for(i=0; i<sortScores.length; i++){
		sortScores[i].rank = i + 1;
	}
	checkEnding();
}

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
	pickMovieTwo();
}

function bracketStage(){
	if( mode === "solo") {
		displayBracket();
	} else if( mode === "group") {
		postToMultiplayer();
		clearVotingData();
	}
};

function clearMultiplayer() {
	$.ajax({
		method: "DELETE",
		url: "/multiplayer/deleteAll"
	}).done(function(data) {
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
			console.log(data);
			compileRankings(data);
		}
	});
	firstRoundTimeout = setTimeout("checkForAllData()", 1000);
};

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

function sortCompiledScores() {
	sortScores = compiledRank.slice(0);
	sortScores.sort(function(a, b){return b.score-a.score});
	for(i=0; i<sortScores.length; i++){
		sortScores[i].rank = i + 1;
	}
	for(i = 16; i < sortScores.length; i ++){
		finalRanking.push(sortScores[i]);
	}
	console.log(sortScores);
	displayMultiplayerBracket();
}

function displayBracket() {
	$("#firstRound").hide();
	$("#secondRound").show();
	for(i=0; i < sortScores.length; i++){
		if(i <= 7) {
			$("#" + (i+1) + "Seed").append("<img class='bracketPoster posterPoster' id='" + sortScores[i].image + " " + (i + 1) + "' src='images/" + sortScores[i].image + ".jpg'>");
		}else if(i <16) {
			$("#" + (i+1) + "Seed").prepend("<img class='bracketPoster posterPoster' id='" + sortScores[i].image + " " + (i + 1) + "' src='images/" + sortScores[i].image + ".jpg'>");
		}else if(i >= 16) {
			finalRanking.push(sortScores[i]);
			console.log(finalRanking);
		}
	}
}

function displayMultiplayerBracket() {
	$("#leftSlot").empty();
	$("#rightSlot").empty();
	$("#leftSlot").css("background", "transparent");
	$("#rightSlot").css("background", "transparent");
	$("#firstRound").hide();
	$("#multiplayerMatchups").show();
	if(top8.length < 8){
		$("#roundHeading").text("Top 16" + multiplayerRound);
		$("#leftSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[multiplayerRound].image + "' src='images/" + sortScores[multiplayerRound].image + ".jpg'>");
		$("#rightSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[15 - multiplayerRound].image + "' src='images/" + sortScores[15 - multiplayerRound].image + ".jpg'>");
	}else if(top8.length === 8 && top4.length < 4){
		$("#roundHeading").text("Top 8");
		$("#leftSlot").append("<img class='top8Poster posterPoster' id='" + top8[multiplayerRound - 8].image + "' src='images/" + top8[multiplayerRound - 8].image + ".jpg'>");
		$("#rightSlot").append("<img class='top8Poster posterPoster' id='" + top8[15 - multiplayerRound].image + "' src='images/" + top8[15 - multiplayerRound].image + ".jpg'>");
	}else if(top4.length === 4 && top2.length < 2) {
		$("#roundHeading").text("Top 4");
		$("#leftSlot").append("<img class='top4Poster posterPoster' id='" + top4[multiplayerRound - 12].image + "' src='images/" + top4[multiplayerRound - 12].image + ".jpg'>");
		$("#rightSlot").append("<img class='top4Poster posterPoster' id='" + top4[15 - multiplayerRound].image + "' src='images/" + top4[15 - multiplayerRound].image + ".jpg'>");
	}else if(top2.length === 2){
		$("#roundHeading").text("Top 2");
		$("#leftSlot").append("<img class='top2Poster posterPoster' id='" + top2[multiplayerRound - 14].image + "' src='images/" + top2[multiplayerRound - 14].image + ".jpg'>");
		$("#rightSlot").append("<img class='top2Poster posterPoster' id='" + top2[15 - multiplayerRound].image + "' src='images/" + top2[15 - multiplayerRound].image + ".jpg'>");
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
	if(mode === "solo") {
		for (var i = 0; i < scores.length; i++) {
			if (scores[i].image === loserName) {
				finalRanking.push(scores[i]);
			}
			if (scores[i].image === movieName) {
				top8.push(scores[i]);
			}else{}
		}
		$(this).parent().parent().siblings().children().children().remove();
	}else if(mode === "group") {
		var loser = $(this).parent().parent().siblings().children().children();
		loser.removeClass("bracketPoster");
		loser.css("-webkit-filter", "grayscale(1)");
		console.log($(this).parent());
		$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
		multiplayerRound ++;
		createVotingDatabase();
	}
	if(top8.length === 8){
		if(mode === "solo"){
			startThirdRound();
			sortBracketLoserScores();
		}
	}else{}
});

function postVote() {
	console.log($("#leftSlot").contents().length);
	console.log($("#rightSlot").contents().length);
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
		console.log(data);
		determineRoundWinner();
	});
};

function postVoteRight() {
	$.ajax({
		method: "PUT",
		url: "/voting/updateRight" 
	}).done(function(data) {
		console.log(data);
		determineRoundWinner();
	});
};

function createVotingDatabase() {
	$.get("/voting", function(data) {
		console.log(data);
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
					console.log(data);
					postVote();
				});
		}
	});
}

function clearVotingData() {
	$.get("/voting", function(data) {
		console.log(data.length);
		if(data.length === 0){
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
							console.log(sortScores[i]);
						}else if (top2.length === 2){
							sortScores[i].rank = 2;
							finalRanking.push(sortScores[i]);
							console.log(sortScores[i]);
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
							console.log(sortScores[i]);
						}
					}else{}
				}else if(winningSide === "right") {
					if (sortScores[i].image === leftId) {
						if(top2.length < 2){
							finalRanking.push(sortScores[i]);
							console.log(sortScores[i]);
						}else if (top2.length === 2){
							sortScores[i].rank = 2;
							finalRanking.push(sortScores[i]);
							console.log(sortScores[i]);
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
							console.log(sortScores[i]);
						}
					}else{}
				}else if(winningSide === "tie") {
					if(randomNumber > 5){
						if (sortScores[i].image === rightId) {
							if(top2.length < 2){
								finalRanking.push(sortScores[i]);
								console.log(sortScores[i]);
							}else if (top2.length === 2){
								sortScores[i].rank = 2;
								finalRanking.push(sortScores[i]);
								console.log(sortScores[i]);
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
								console.log(sortScores[i]);
							}
							winningSide = "left";
						}else{}
					}else{
						if (sortScores[i].image === leftId) {
							if(top2.length < 2){
								finalRanking.push(sortScores[i]);
								console.log(sortScores[i]);
							}else if (top2.length === 2){
								sortScores[i].rank = 2;
								finalRanking.push(sortScores[i]);
								console.log(sortScores[i]);
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
								console.log(sortScores[i]);
							}
							winningSide = "right";
						}else{}
					}
				}
			}
			if(top8.length === 8 && top4.length < 4){
				sortBracketLoserScores();
			}else if(top4.length === 4 && top2.length < 2){
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
	console.log(winningSide);
	if(winningSide === "left"){
		$("#leftSlot").css("background", "green");
		if(finalRanking.length === selectedCategory.length) {
			setTimeout("displayFinalRanking()", 2000);
		}else{
			setTimeout("clearVotingData()", 2000);
		}
	}else if(winningSide === "right"){
		$("#rightSlot").css("background", "green");
		if(finalRanking.length === selectedCategory.length) {
			setTimeout("displayFinalRanking()", 2000);
		}else{
			setTimeout("clearVotingData()", 2000);
		}
	}
}

function sortBracketLoserScores() {
	console.log("sort bracket Losers");
	finalRanking.sort(function(a, b){return b.rank-a.rank});
	for (var i = 0; i < finalRanking.length; i++){
		finalRanking[i].rank = 17 - i;
	}
}

function sortTop8LoserScores() {
	console.log("sort Top 8 losers");
	console.log(finalRanking);
	finalRanking.slice(9, 12).sort(function(a, b){return b.rank-a.rank});
	for (var i = 9; i < 13; i++){
		finalRanking[i].rank = 17 - i;
	}
}

function sortTop4LoserScores() {
	console.log("sort top 4 losers");
	finalRanking.slice(13, 14).sort(function(a, b){return b.rank-a.rank});
	for (var i = 13; i < 15; i++){
		finalRanking[i].rank = 17 - i;
		console.log(finalRanking);
	}
}

function startThirdRound() {
	$("#secondRound").hide();
	$("#thirdRound").show();
	for(var i=0; i < top8.length; i++) {
		var thirdRoundRank = top8[i].rank;
		switch(thirdRoundRank) {
			case 1:
			case 16:
				$("#winner1").append("<img class='top8Poster posterPoster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 8:
			case 9:
				$("#winner2").append("<img class='top8Poster posterPoster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 4:
			case 13:
				$("#winner3").append("<img class='top8Poster posterPoster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 5:
			case 12:
				$("#winner4").append("<img class='top8Poster posterPoster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 2:
			case 15:
				$("#winner5").append("<img class='top8Poster posterPoster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 7:
			case 10:
				$("#winner6").append("<img class='top8Poster posterPoster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 3:
			case 14:
				$("#winner7").append("<img class='top8Poster posterPoster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 6:
			case 11:
				$("#winner8").append("<img class='top8Poster posterPoster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;

		}
	}
}

$(document).on("click", ".top8Poster", function(){
	$(this).removeClass("top8Poster");
	var top4MovieName = $(this).attr("id");
	var loserIdTop8Name = $(this).parent().parent().siblings().children().children().attr("id");
	if(mode === "solo"){
		for (var i = 0; i < top8.length; i++) {
			if (top8[i].image === loserIdTop8Name) {
				finalRanking.push(top8[i]);
			}
			if (top8[i].image === top4MovieName) {
				top4.push(top8[i]);
			}
		}
	$(this).parent().parent().siblings().children().children().remove();
	}
	if(mode === "group"){
			var loser = $(this).parent().parent().siblings().children().children();
			console.log(loser);
			loser.removeClass("bracketPoster");
			loser.css("-webkit-filter", "grayscale(1)");
			$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
			multiplayerRound ++;
			createVotingDatabase();
		}
	if(top4.length === 4){
		if(mode === "solo") {
			startFinalRound();
		}
	}else{}
});

function startFinalRound() {
	$("#thirdRound").hide();
	$("#finalRound").show();
	for(var i=0; i < top4.length; i++) {
		var finalRoundRank = top4[i].rank;
		switch(finalRoundRank) {
			case 1:
			case 16:
			case 8:
			case 9:
				$("#winner9").append("<img class='top4Poster posterPoster' id='" + top4[i].image + "' src='images/" + top4[i].image + ".jpg'>");
				break;
			case 4:
			case 13:
			case 5:
			case 12:
				$("#winner10").append("<img class='top4Poster posterPoster' id='" + top4[i].image + "' src='images/" + top4[i].image + ".jpg'>");
				break;
			case 2:
			case 15:
			case 7:
			case 10:
				$("#winner11").append("<img class='top4Poster posterPoster' id='" + top4[i].image + "' src='images/" + top4[i].image + ".jpg'>");
				break;
			case 3:
			case 14:
			case 6:
			case 11:
				$("#winner12").append("<img class='top4Poster posterPoster' id='" + top4[i].image + "' src='images/" + top4[i].image + ".jpg'>");
				break;

		}
	}
}


$(document).on("click", ".top4Poster", function(){
	var top4MoviePoster = $(this);
	var top2Image = $(this).attr("id");
	var rightLoserTop4Name = $(this).parent().parent().next().next().children().children().attr("id");
	var leftLoserTop4Name = $(this).parent().parent().prev().prev().children().children().attr("id");
	var loserIdTop4Name = $(this).parent().parent().siblings().children().children().attr("id");
	if(mode === "solo"){
		for(i=0; i < top4.length; i++){
			if(leftLoserTop4Name === top4[i].image){
				finalRanking.push(top4[i]);
			}else if(rightLoserTop4Name === top4[i].image){
				finalRanking.push(top4[i]);
			}
			$(top4MoviePoster).attr("class", "top2Poster");
			if(top2Image === top4[i].image){
				var top2Rank = top4[i].rank;
				switch(top2Rank) {
					case 1:
					case 16:
					case 8:
					case 9:
					case 4:
					case 13:
					case 5:
					case 12:
						$("#winner13").append(top4MoviePoster);
						$("#top4Left").css("visibility", "hidden");
						break;
					case 2:
					case 15:
					case 7:
					case 10:
					case 3:
					case 14:
					case 6:
					case 11:
						$("#winner14").append(top4MoviePoster);
						$("#top4Right").css("visibility", "hidden");
						break;

				}
			}
		}
	}else if(mode === "group"){
		$(this).removeClass("top4Poster");
		var loser = $(this).parent().parent().siblings().children().children();
		console.log(loser);
		loser.removeClass("bracketPoster");
		loser.css("-webkit-filter", "grayscale(1)");
		$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
		multiplayerRound ++;
		createVotingDatabase();
	}
	console.log(finalRanking.length + " " + scores.length-2);
});

$(document).on("click", ".top2Poster", function(){
	if(mode === "solo"){
		if ($("#top4Left").css("visibility") === "hidden" && $("#top4Right").css("visibility") === "hidden"){
			var winnerName = $(this).attr("id");
			var leftFinalLoserName = $(this).parent().parent().next().next().children().children().attr("id");
			var rightFinalLoserName = $(this).parent().parent().prev().prev().children().children().attr("id");
			for(var i=0; i < top4.length; i++) {
				if(top4[i].image === winnerName){
					top4[i].rank = 1;
					finalRanking.push(top4[i]);
				}
				if(top4[i].image === leftFinalLoserName){
					top4[i].rank = 2;
					finalRanking.push(top4[i]);
				}
				if(top4[i].image === rightFinalLoserName){
					top4[i].rank = 2;
					finalRanking.push(top4[i]);
				}
			}
			$("#finalRound").hide();
			$("#championDisplay").show();
			$("#overallWinner").append(this);
			$(this).attr("class", "winner");
			displayFinalRanking();
		}else{}
	}else if(mode === "group"){
		console.log(finalRanking);
		$(this).removeClass("top2Poster");
		var loser = $(this).parent().parent().siblings().children().children();
		loser.removeClass("bracketPoster");
		loser.css("-webkit-filter", "grayscale(1)");
		$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
		var winnerName = $(this).attr("id");
		var leftFinalLoserName = $(this).parent().parent().next().next().children().children().attr("id");
		var rightFinalLoserName = $(this).parent().parent().prev().prev().children().children().attr("id");
		createVotingDatabase();
	}
});

function displayFinalRanking(){
	$("#finalRound").hide();
	$("#championDisplay").show();
	$("#multiplayerMatchups").hide();
	$("#leftSlot").empty();
	$("#rightSlot").empty();
	$("#rankingDisplay").empty();
	console.log(finalRanking.length + " " + scores.length);
	console.log(finalRanking);
	console.log(scores);
	if (finalRanking.length === scores.length){
		finalRanking.sort(function(a, b){return a.rank-b.rank});
		console.log(finalRanking);
		for(i=0; i<finalRanking.length; i++){
			finalRanking[i].rank = i + 1;
			$("#rankingDisplay").append("<p>" + (i+1) + ". " + finalRanking[i].name + "</p>");
		}
		$("#overallWinner").append("<img id='winner' src='images/" + finalRanking[0].image + ".jpg'>");
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
		console.log(data);
	});
};

$("#replayButton").click(function(){
	$("#categorySelection").show();
	$("#firstRound").hide();
	$("#secondRound").hide();
	$("#thirdRound").hide();
	$("#finalRound").hide();
	$("#championDisplay").hide();
});

$(".category").click(function(){
	var categoryId = $(this).attr("id");
	if(categoryId === "pixarMovies"){
		selectedCategory = pixarMovies;
		beginGame();
	}else if(categoryId === "marvelMovies"){
		selectedCategory = marvelMovies;
		beginGame();
	}
	$("#mainTitle").hide();
});

function beginGame() {
	scores = [];
	for(var i=0; i < selectedCategory.length; i++){
		scores.push(selectedCategory[i]);
	}
	$("#categorySelection").hide();
	$("#firstRound").show();
	$("#secondRound").hide();
	$("#thirdRound").hide();
	$("#finalRound").hide();
	$("#championDisplay").hide();
	$(".moviePoster").remove();
	$(".bracketPoster").remove();
	$(".top8Poster").remove();
	$(".top4Poster").remove();
	$(".top2Poster").remove();
	$(".winner").remove();
	$("#top4Left").css("visibility", "visible");
	$("#top4Right").css("visibility", "visible");
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
	pickMovieOne();
	pickMovieTwo();
}

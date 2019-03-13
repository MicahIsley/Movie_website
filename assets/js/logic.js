var scores = [];
var marvelMovies = [
	{name: "Ant Man",score: 0,appearances: 0,image: "antMan",rank: 0},
	{name: "Ant Man and The Wasp",score: 0, appearances: 0,image: "antMan2",rank: 0},
	{name: "Avengers",score: 0,appearances: 0,image: "avengers",rank: 0},
	{name: "Avengers: Age of Ultron",score: 0,appearances: 0,image: "avengers2",rank: 0},
	{name: "Avengers: Infinity War",score: 0,appearances: 0,image: "avengers3",rank: 0},
	/*{name: "Avengers: Endgame",score: 0, appearances: 0,image: "avengers4", rank: 0},*/
	{name: "Black Panther",score: 0,appearances: 0,image: "blackPanther",rank: 0},
	{name: "Captain America: The First Avenger",score: 0,appearances: 0,image: "captainAmerica",rank: 0},
	{name: "Captain America: The Winter Soldier",score: 0,appearances: 0,image: "captainAmerica2",rank: 0},
	{name: "Captain America: Civil War",score: 0,appearances: 0,image: "captainAmerica3",rank: 0},
	{name: "Captain Marvel",score: 0,appearances: 0,image: "captainMarvel",rank: 0},
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
	{name: "The Incredibles 2",score: 0,appearances: 0,image: "incredibles2",rank: 0},
	{name: "Inside Out",score: 0,appearances: 0,image: "insideOut",rank: 0},
	{name: "Monsters, Inc.",score: 0,appearances: 0,image: "monstersInc",rank: 0},
	{name: "Monsters University",score: 0,appearances: 0,image: "monstersUniversity",rank: 0},
	{name: "Ratatouille",score: 0,appearances: 0,image: "ratatouille",rank: 0},
	{name: "Toy Story",score: 0,appearances: 0,image: "toyStory",rank: 0},
	{name: "Toy Story 2",score: 0,appearances: 0,image: "toyStory2",rank: 0},
	{name: "Toy Story 3",score: 0,appearances: 0,image: "toyStory3",rank: 0},
	/*{name: "Toy Story 4",score: 0,appearances: 0,image: "toyStory4",rank: 0},*/
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
var top2018 = [
	{name: "Black Panther",score: 0,appearances: 0,image: "blackPanther",rank: 0},
	{name: "Avengers: Infinity War",score: 0,appearances: 0,image: "avengers3",rank: 0},
	{name: "Incredibles 2",score: 0,appearances: 0,image: "incredibles2",rank: 0},
	{name: "Jurassic World: Fallen Kingdom",score: 0,appearances: 0,image: "jurassicWorld2",rank: 0},
	{name: "Aquaman",score: 0,appearances: 0,image: "aquaman",rank: 0},
	{name: "Deadpool 2",score: 0,appearances: 0,image: "deadpool2",rank: 0},
	{name: "Dr. Seuss' The Grinch",score: 0,appearances: 0,image: "theGrinch",rank: 0},
	{name: "Mission: Impossible-Fallout",score: 0,appearances: 0,image: "missionImpossibleFallout",rank: 0},
	{name: "Ant-Man and the Wasp",score: 0,appearances: 0,image: "antMan2",rank: 0},
	{name: "Bohemian Rhapsody",score: 0,appearances: 0,image: "bohemianRhapsody",rank: 0},
	{name: "Solo: A Star Wars Story",score: 0,appearances: 0,image: "solo",rank: 0},
	{name: "Venom",score: 0,appearances: 0,image: "venom",rank: 0},
	{name: "A Star is Born",score: 0,appearances: 0,image: "aStarIsBorn",rank: 0},
	{name: "Ralph Breaks the Internet",score: 0,appearances: 0,image: "ralph2",rank: 0},
	{name: "A Quiet Place",score: 0,appearances: 0,image: "aQuietPlace",rank: 0},
	{name: "Spider-man: Into the Spider-verse",score: 0,appearances: 0,image: "spidermanIntoTheSpiderverse",rank: 0},
	{name: "Crazy Rich Asians",score: 0,appearances: 0,image: "crazyRichAsians",rank: 0},
	{name: "Mary Poppins Returns",score: 0,appearances: 0,image: "maryPoppinsReturns",rank: 0},
	{name: "Hotel Transylvania 3: Summer Vaction",score: 0,appearances: 0,image: "hotelTransylvania3",rank: 0},
	{name: "Fantastic Beasts: The Crimes of Grindelwald",score: 0,appearances: 0,image: "fantasticBeasts2",rank: 0}
];
var harryPotter = [
	{name: "The Sorcerer's Stone",score: 0,appearances: 0,image: "harryPotter1",rank: 0},
	{name: "The Chamber of Secrets",score: 0,appearances: 0,image: "harryPotter2",rank: 0},
	{name: "The Prisoner of Azkaban",score: 0,appearances: 0,image: "harryPotter3",rank: 0},
	{name: "The Goblet of Fire",score: 0,appearances: 0,image: "harryPotter4",rank: 0},
	{name: "The Order of the Phoenix",score: 0,appearances: 0,image: "harryPotter5",rank: 0},
	{name: "The Half-Blood Prince",score: 0,appearances: 0,image: "harryPotter6",rank: 0},
	{name: "The Deathly Hallows Part 1",score: 0,appearances: 0,image: "harryPotter7",rank: 0},
	{name: "The Deathly Hallows Part 2",score: 0,appearances: 0,image: "harryPotter8",rank: 0},
	{name: "Fantastic Beasts and Where to Find Them",score: 0,appearances: 0,image: "fantasticBeasts1",rank: 0},
	{name: "Fantastic Beasts: The Crimes of Grindewald",score: 0,appearances: 0,image: "fantasticBeasts2",rank: 0}
];
var starWars = [
	{name: "The Phantom Menace",score: 0,appearances: 0,image: "starWarsEpisode1",rank: 0},
	{name: "Attack of the Clones",score: 0,appearances: 0,image: "starWarsEpisode2",rank: 0},
	{name: "The Revenge of the Sith",score: 0,appearances: 0,image: "starWarsEpisode3",rank: 0},
	{name: "A New Hope",score: 0,appearances: 0,image: "starWarsEpisode4",rank: 0},
	{name: "The Empire Stikes Back",score: 0,appearances: 0,image: "starWarsEpisode5",rank: 0},
	{name: "The Return of the Jedi",score: 0,appearances: 0,image: "starWarsEpisode6",rank: 0},
	{name: "The Force Awakens",score: 0,appearances: 0,image: "starWarsEpisode7",rank: 0},
	{name: "The Last Jedi",score: 0,appearances: 0,image: "starWarsEpisode8",rank: 0},
	/*{name: "Episode 9",score: 0,appearances: 0,image: "starWarsEpisode9",rank: 0},*/
	{name: "Rogue One",score: 0,appearances: 0,image: "rogueOne",rank: 0},
	{name: "Solo",score: 0,appearances: 0,image: "solo",rank: 0}
];
var xMenMovies = [
	{name: "Deadpool",score: 0,appearances: 0,image: "deadpool",rank: 0},
	{name: "Deadpool 2",score: 0,appearances: 0,image: "deadpool2",rank: 0},
	{name: "Logan",score: 0,appearances: 0,image: "logan",rank: 0},
	/*{name: "New Mutants",score: 0,appearances: 0,image: "newMutants",rank: 0},*/
	{name: "The Wolverine",score: 0,appearances: 0,image: "theWolverine",rank: 0},
	{name: "X-Men: Apocalypse",score: 0,appearances: 0,image: "xApocalypse",rank: 0},
	/*{name: "X-Men: Dark Phoenix",score: 0,appearances: 0,image: "xDarkPhoenix",rank: 0},*/
	{name: "X-Men: Days of Future Past",score: 0,appearances: 0,image: "xDaysOfFuturePast",rank: 0},
	{name: "X-Men: First Class",score: 0,appearances: 0,image: "xFirstClass",rank: 0},
	{name: "X-Men",score: 0,appearances: 0,image: "xMen1",rank: 0},
	{name: "X-Men 2",score: 0,appearances: 0,image: "xMen2",rank: 0},
	{name: "X-Men 3",score: 0,appearances: 0,image: "xMen3",rank: 0}
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
var pageNumber = 0;
var pageText = ["Welcome to the first round! Pick one movie from each pair.", "Then we'll turn the results into a single-elimination bracket.", "Let's Play!", "Hey1 ", "Pick one movie from each pair, just like before", "Only this time, the ones you don't pick are elimated forever!", "Keep playing until only one movie is standing!", "Let the Superbattle begin!"];
var averageRank = [];
//Login/logout functions


$( window ).on('beforeunload', function() {
	$.ajax({
	method: "DELETE",
	url: "/online/delete/" + currentUser,
	data: {
		username: currentUser,
	}
	}).done(function(data) {
	});
});

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
		console.log(currentUser);
		//checkForOnlineDuplicates();
		displayProfileLetter();
		displayOnline();
		getCustomList();
	});
};

function displayProfileLetter() {
	var colorArray = ["yellow", "orange", "green", "red"];
	$("#profileIcon").append(currentUser[0]);
	var color = colorArray[Math.floor(Math.random()*colorArray.length)];
	$("#profileIcon").css("background", color);
}

/*function checkForOnlineDuplicates(){
	$("#currentUser").append("<div id='currentUser' class='row groupMember'>" + currentUser + "</div>");
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
}*/

function displayOnline() {
	$.ajax({
		method: "POST",
		url: "/online/" + currentUser,
		data: {
			username: currentUser,
		}
	}).done(function(data) {
		$("#currentUser").append("<div id='currentUser' class='row groupMember'>" + currentUser + "</div>");
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

$("#marvelProfileTab").click(function(){
	averageRank = [];
	$.get("/rankings", function(data) {
		var numMarvelRuns = 0;
		for(i=0; i< data.length; i++){
			if(data[i].category === "marvelMovies" && data[i].user === currentUser){
				numMarvelRuns ++;
				console.log(numMarvelRuns);
			}else{}
		}
		for(i=0; i < marvelMovies.length; i++){
			var rankName = marvelMovies[i];
			var combinedRank = 0;
			for(j=0; j < data.length; j ++){
				if(data[j].user === currentUser){
					for(k=0; k < data[j].ranking.length; k ++){
						if(data[j].ranking[k].name === rankName.name){
							combinedRank = parseInt(data[j].ranking[k].rank) + parseInt(combinedRank);
						}
					}
				}else{}
			}
			var combinedObject = {
				name: rankName.name,
				rank: Math.round(((combinedRank/numMarvelRuns) * 100)) / 100
			}
			averageRank.push(combinedObject);
		}
		sortAverageRank();
	});
});

$("#pixarProfileTab").click(function(){
	averageRank = [];
	$.get("/rankings", function(data) {
		var numPixarRuns = 0;
		for(i=0; i< data.length; i++){
			if(data[i].category === "pixarMovies" && data[i].user === currentUser){
				numPixarRuns ++;
				console.log(numPixarRuns);
			}else{}
		}
		for(i=0; i < pixarMovies.length; i++){
			var rankName = pixarMovies[i];
			var combinedRank = rankName.rank;
			for(j=0; j < data.length; j ++){
				if(data[j].user === currentUser){
					for(k=0; k < data[j].ranking.length; k ++){
						if(data[j].ranking[k].name === rankName.name){
							combinedRank = parseInt(data[j].ranking[k].rank) + parseInt(combinedRank);
						}
					}
				}
			}
			var combinedObject = {
				name: rankName.name,
				rank: Math.round(((combinedRank/numPixarRuns) * 100)) / 100
			}
			averageRank.push(combinedObject);
		}
		sortAverageRank();
	});
});

function sortAverageRank(){
	averageRank.sort(function(a, b){return a.rank-b.rank});
	console.log(averageRank);
	$("#averageDisplay1").empty();
	$("#averageDisplay2").empty();
	for(i=0; i < averageRank.length; i++){
		if(i < averageRank.length/2){
			$("#averageDisplay1").append("<div class='row averageRow'><div class='col-xs-8 col-lg-10 avgName'>" + averageRank[i].name + "</div><div class='col-xs-1 col-lg-2 avgRank'>" + averageRank[i].rank + "</div></div>");
		}else if(i >= averageRank.length/2){
			$("#averageDisplay2").append("<div class='row averageRow'><div class='col-xs-8 col-lg-10 avgName'>" + averageRank[i].name + "</div><div class='col-xs-1 col-lg-2 avgRank'>" + averageRank[i].rank + "</div></div>");
		}
	}
}

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
});

$(document).on("click", ".glyphicon-minus-sign", function(){
	var removePlayer = $(this).attr("id");
	multiplayerGroup.splice(removePlayer);
	$("#yourGroupMembers").empty();
	for(i=0; i < multiplayerGroup.length; i++){
		$("#yourGroupMembers").append("<div class='row'>" + multiplayerGroup[i] + "<div class='glyphicon glyphicon-minus-sign' id='" + multiplayerGroup[i] + "'></div></div>");
	}
});

$("#hamburgerIcon").click(function() {
	console.log("click");
    $('#hamburgerMenu').toggle();
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

//Intro functions

$(".okTextButton").click(function() {
	console.log(pageNumber);
	if(pageNumber < 4){
		$("#beginnerText").empty();
		$("#beginnerText").append(pageText[pageNumber]);
	}else if(pageNumber >= 4){
		$("#bracketText").empty();
		$("#bracketText").append(pageText[pageNumber]);
	}
	pageNumber ++;
	if(pageNumber === 4){
		$("#firstTimeText").hide();
	}else if(pageNumber === 9){
		$("#firstBracketText").hide();
	}
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
	if(numberFinished < scores.length){
		pickMovieOne();
	}
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
	});
}

function displayMultiplayerBracket() {
	$("#leftSlot").empty();
	$("#rightSlot").empty();
	$("#firstRound").hide();
	$("#multiplayerMatchups").show();
	if(selectedCategory === customMovies){
		if(top8.length < 8){
			$("#roundHeading").text("The Sensational Sixteen");
			$("#leftSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[multiplayerRound].image + "' src='" + sortScores[multiplayerRound].image + "'>");
			$("#rightSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[15 - multiplayerRound].image + "' src='" + sortScores[15 - multiplayerRound].image + "'>");
		}else if(top8.length === 8 && top4.length < 4){
			$("#roundHeading").text("The Esteemed Eight");
			$("#leftSlot").append("<img class='top8Poster posterPoster' id='" + top8[multiplayerRound - 8].image + "' src='" + top8[multiplayerRound - 8].image + "'>");
			$("#rightSlot").append("<img class='top8Poster posterPoster' id='" + top8[15 - multiplayerRound].image + "' src='" + top8[15 - multiplayerRound].image + "'>");
		}else if(top4.length === 4 && top2.length < 2) {
			$("#roundHeading").text("The Formidable Four");
			$("#leftSlot").append("<img class='top4Poster posterPoster' id='" + top4[multiplayerRound - 12].image + "' src='" + top4[multiplayerRound - 12].image + "'>");
			$("#rightSlot").append("<img class='top4Poster posterPoster' id='" + top4[15 - multiplayerRound].image + "' src='" + top4[15 - multiplayerRound].image + "'>");
		}else if(top2.length === 2){
			$("#roundHeading").text("The Final Superbattle");
			$("#leftSlot").append("<img class='top2Poster posterPoster' id='" + top2[multiplayerRound - 14].image + "' src='" + top2[multiplayerRound - 14].image + "'>");
			$("#rightSlot").append("<img class='top2Poster posterPoster' id='" + top2[15 - multiplayerRound].image + "' src='" + top2[15 - multiplayerRound].image + "'>");
		}
	}else{
		if(multiplayerRound < 8){
			$("#roundHeading").text("The Sensational Sixteen");
			$("#leftSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[multiplayerRound].image + "' src='images/" + categoryId + "/" + sortScores[multiplayerRound].image + ".jpg'>");
			$("#rightSlot").append("<img class='bracketPoster posterPoster' id='" + sortScores[15 - multiplayerRound].image + "' src='images/" + categoryId + "/" + sortScores[15 - multiplayerRound].image + ".jpg'>");
		}else if(multiplayerRound >= 8 && multiplayerRound < 12){
			$("#roundHeading").text("The Esteemed Eight");
			$("#leftSlot").append("<img class='top8Poster posterPoster' id='" + top8[multiplayerRound - 8].image + "' src='images/" + categoryId + "/" + top8[multiplayerRound - 8].image + ".jpg'>");
			$("#rightSlot").append("<img class='top8Poster posterPoster' id='" + top8[15 - multiplayerRound].image + "' src='images/" + categoryId + "/" + top8[15 - multiplayerRound].image + ".jpg'>");
		}else if(multiplayerRound >=12 && multiplayerRound < 14) {
			$("#roundHeading").text("The Formidable Four");
			$("#leftSlot").append("<img class='top4Poster posterPoster' id='" + top4[multiplayerRound - 12].image + "' src='images/" + categoryId + "/" + top4[multiplayerRound - 12].image + ".jpg'>");
			$("#rightSlot").append("<img class='top4Poster posterPoster' id='" + top4[15 - multiplayerRound].image + "' src='images/" + categoryId + "/" + top4[15 - multiplayerRound].image + ".jpg'>");
		}else if(top2.length === 2){
			$("#roundHeading").text("The Final Superbattle");
			$("#leftSlot").append("<img class='top2Poster posterPoster' id='" + top2[multiplayerRound - 14].image + "' src='images/" + categoryId + "/" + top2[multiplayerRound - 14].image + ".jpg'>");
			$("#rightSlot").append("<img class='top2Poster posterPoster' id='" + top2[15 - multiplayerRound].image + "' src='images/" + categoryId + "/" + top2[15 - multiplayerRound].image + ".jpg'>");
		}
	}
}

$(document).on("click", ".bracketPoster", function(){
	$("#leftSlot").removeClass("roundWinner");
	$("#rightSlot").removeClass("roundWinner");
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
	var classWinner = $(this).parent();
	$(classWinner).addClass("roundWinner");
	//$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
	multiplayerRound ++;
	createVotingDatabase();
});

//Voting

function postVote() {
	console.log("postVote");
	if($("#leftSlot").attr("class") === "roundWinner") {
		postVoteLeft();
	}else if($("#rightSlot").attr("class") === "roundWinner") {
		postVoteRight();
	}
};

function postVoteLeft() {
	console.log("postLeft");
	$.ajax({
		method: "PUT",
		url: "/voting/updateLeft" 
	}).done(function(data) {
		determineRoundWinner();
	});
};

function postVoteRight() {
	console.log("postRight");
	$.ajax({
		method: "PUT",
		url: "/voting/updateRight" 
	}).done(function(data) {
		determineRoundWinner();
	});
};

function createVotingDatabase() {
	$.get("/voting", function(data) {
		console.log(data);
		if(data.length > 0) {
			postVote();
		}else {
			console.log("make new voting");
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
			if(multiplayerRound > 0) {
					displayMultiplayerBracket();
			}else{}
		}else{
			$.ajax({
				method: "PUT",
				url: "/voting/reset"
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
		console.log(data);
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
	$("#leftSlot").removeClass("roundWinner");
	$("#rightSlot").removeClass("roundWinner");
	var top4MovieName = $(this).attr("id");
	var loserIdTop8Name = $(this).parent().parent().siblings().children().children().attr("id");
	var loser = $(this).parent().parent().siblings().children().children();
	loser.removeClass("top8Poster");
	loser.css("-webkit-filter", "grayscale(1)");
	var classWinner = $(this).parent();
	$(classWinner).addClass("roundWinner");
	//$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
	multiplayerRound ++;
	createVotingDatabase();
});

$(document).on("click", ".top4Poster", function(){
	$(this).removeClass("top4Poster");
	var top4MoviePoster = $(this);
	$("#leftSlot").removeClass("roundWinner");
	$("#rightSlot").removeClass("roundWinner");
	var top2Image = $(this).attr("id");
	var rightLoserTop4Name = $(this).parent().parent().next().next().children().children().attr("id");
	var leftLoserTop4Name = $(this).parent().parent().prev().prev().children().children().attr("id");
	var loserIdTop4Name = $(this).parent().parent().siblings().children().children().attr("id");
	$(this).removeClass("top4Poster");
	var loser = $(this).parent().parent().siblings().children().children();
	loser.removeClass("top4Poster");
	loser.css("-webkit-filter", "grayscale(1)");
	var classWinner = $(this).parent();
	$(classWinner).addClass("roundWinner");
	//$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
	multiplayerRound ++;
	console.log(multiplayerRound);
	createVotingDatabase();
});

$(document).on("click", ".top2Poster", function(){
	$(this).removeClass("top2Poster");
	$("#leftSlot").removeClass("roundWinner");
	$("#rightSlot").removeClass("roundWinner");
	var loser = $(this).parent().parent().siblings().children().children();
	loser.removeClass("top2Poster");
	loser.css("-webkit-filter", "grayscale(1)");
	var classWinner = $(this).parent();
	$(classWinner).addClass("roundWinner");
	//$(this).parent().append("<div><img class='circleCheck' src='/images/circleCheck.png'></div>");
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
	$("#firstPlace").empty();
	$("#secondPlace").empty();
	$("#thirdPlace").empty();
	$("#topTen").empty();
	$("#bottomRankings").empty();
	if (finalRanking.length === scores.length){
		finalRanking.sort(function(a, b){return a.rank-b.rank});
		console.log(finalRanking);
		for(i=0; i<finalRanking.length; i++){
			finalRanking[i].rank = i + 1;
			if(i===0){
				$("#firstPlace").append("<div class='row top3' id='firstIcon'>1st </div><div class='row top3Name'>" + finalRanking[i].name + "</div></div>");
			}else if(i===1){
				$("#secondPlace").append("<div class='row top3' id='secondIcon'>2nd </div><div class='row top3Name'>" + finalRanking[i].name + "</div></div>");
			}else if(i===2){
				$("#thirdPlace").append("<div class='row top3' id='thirdIcon'>3rd </div><div class='row top3Name'>" + finalRanking[i].name + "</div></div>");
			}else if(i > 2 && i < 12){
				$("#topTen").append("<div class='row'>" + (i+1) + ". " + finalRanking[i].name + "</div>");
			}else{
				$("#bottomRankings").append("<div class='row'>" + (i+1) + ". " + finalRanking[i].name + "</div>");
			}
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
	console.log(currentUser);
	$.ajax({
		method: "POST",
		url: "/rankings/" + currentUser,
		data: {
			user: currentUser,
			category: categoryId,
			ranking: finalRanking
		}
	}).done(function(data) {
		console.log(data);
	});
};

$("#replayButton").click(function(){
	$("#multiplayerLobby").show();
	$("#championDisplay").hide();
});

$(".category").click(function(){
	categoryId  = $(this).attr("id");
	$(".category").css({"background-color": "#374461"});
	$(".customListData").css({"background-color": "#374461"});
	$("#readyButton").addClass("pulsate");
	/*$(this).css({"background-image": "url('../images/siteAssets/pow.png')"});*/
	$(this).css({"background-color": "#6b2a2a"});
	if(categoryId === "marvelMovies"){
		selectedCategory = marvelMovies;
	}else if(categoryId === "pixarMovies"){
		selectedCategory = pixarMovies;
	}else if(categoryId === "top2017"){
		selectedCategory = top2017;
	}else if(categoryId === "customGame"){
		//getCustomList();
	}else if(categoryId === "harryPotter"){
		selectedCategory = harryPotter;
	}else if(categoryId === "starWars"){
		selectedCategory = starWars;
	}else if(categoryId === "xMenMovies"){
		selectedCategory = xMenMovies;
	}
});



function getCustomList() {
	$("#customListDisplay").empty();
	$.get("/customList", function(data) {
		if(data.length === 0){
			console.log("you need to make a list");
		}else{}
		for(var i=0; i < data.length; i++){
			if(data[i].user === currentUser){
				$("#customListDisplay").append("<div class='row customListRow' id='div" + i + "'><div class='col-xs-12'><div class='customListData' id='"+i+"'>" + data[i].listName + "<button class='deleteList' id='" + data[i]._id + "'>X</button></div></div>");
			}
		}
	});
}

$(document).on("click", ".customListData", function(){
	customMovies = [];
	var listId = $(this).attr("id");
	$.get("/customList", function(data) {
		for(i=0; i<data[listId].customList.length; i++){
			customMovies.push(data[listId].customList[i]);
		}
	});
	selectedCategory = customMovies;
	$(".category").css({"background-color": "#374461"});
	$(".customListData").css({"background-color": "#374461"});
	$(this).css({"background-color": "#6b2a2a"});
});

$(document).on("click", ".deleteList", function(){
	var deleteDivId = $(this).parent();
	var deleteListId = $(this).attr("id");
	$.ajax({
		method: "DELETE",
		url: "/custom/delete/" + deleteListId,
		data: {
			id: deleteListId,
		}
	}).done(function(data) {
		console.log(data);
		console.log("#" + deleteDivId);
		$(deleteDivId).remove();
	});
});

$('#profileIcon').click( function(event){
    event.stopPropagation();
    console.log("profile");
    $('#profileMenu').toggle();
    $("#multiplayerMenu").hide();
    /*$("#customSelection").hide();*/
});

$("#profileButton").click(function(){
	event.stopPropagation();
	$("#profileDisplay").toggle();
	$("#profileMenu").hide();
});

$("#closeProfile").click(function(){
	$("#profileDisplay").hide();
});

$(".onlineTab").click(function(event){
	event.stopPropagation();
	$("#multiplayerMenu").toggle();
	$("#profileMenu").hide();
	/*$("#customSelection").hide();*/
	$("#profileDisplay").hide();
});

/*$("#customTab").click(function(event){
	event.stopPropagation();
	/*$("#customSelection").toggle();
	$("#multiplayerMenu").hide();
	$("#profileMenu").hide();
	$("#profileDisplay").hide();
	//getCustomList();
});*/

/*$(document).mouseup(function(e) {
	console.log("document");
    var container = $("#profileDisplay, #profileMenu, #multiplayerMenu, #customSelection");
    if (!container.is(e.target) && container.has(e.target).length === 0){
    	container.hide();
    }
});*/

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

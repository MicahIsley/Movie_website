var scores = [
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
	}
];
var movie1;
var movie2;
var numberFinished = 0;
var sortScores;
var top8 = [];
var top4 = [];
var finalRanking = [];	

function pickMovieOne() {
	$("#movie1").empty();
	movie1 = scores[Math.floor(Math.random() * scores.length)];
	if(movie1.appearances < 1) {
		displayMovieOne();
	}else{
		if(numberFinished >= 16){
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
			if(numberFinished >= 17){
				$("#movie2").append("Bye");
			}else{
				pickMovieTwo();
			}
		}
	}
}

function displayMovieOne() {
	var movie1Poster = movie1.image;
	switch (movie1Poster) {
		case "antMan":
			scores[0].appearances ++;
			break;
		case "avengers":
			scores[1].appearances ++;
			break;
		case "avengers2":
			scores[2].appearances ++;
			break;
		case "captainAmerica":
			scores[3].appearances ++;
			break;
		case "captainAmerica2":
			scores[4].appearances ++;
			break;
		case "captainAmerica3":
			scores[5].appearances ++;
			break;
		case "doctorStrange":
			scores[6].appearances ++;
			break;
		case "guardians":
			scores[7].appearances ++;
			break;
		case "guardians2":
			scores[8].appearances ++;
			break;
		case "hulk":
			scores[9].appearances ++;
			break;
		case "ironMan":
			scores[10].appearances ++;
			break;
		case "ironMan2":
			scores[11].appearances ++;
			break;
		case "ironMan3":
			scores[12].appearances ++;
			break;
		case "spidermanHomecoming":
			scores[13].appearances ++;
			break;
		case "thor":
			scores[14].appearances ++;
			break;
		case "thor2":
			scores[15].appearances ++;
			break;
		case "thor3":
			scores[16].appearances ++;
			break;
	}
	$("#movie1").append("<img class='moviePoster' id='" + movie1Poster + "' src='images/" + movie1Poster + ".jpg'>");
}

function displayMovieTwo() {
	var movie2Poster = movie2.image;
	switch (movie2Poster) {
		case "antMan":
			scores[0].appearances ++;
			break;
		case "avengers":
			scores[1].appearances ++;
			break;
		case "avengers2":
			scores[2].appearances ++;
			break;
		case "captainAmerica":
			scores[3].appearances ++;
			break;
		case "captainAmerica2":
			scores[4].appearances ++;
			break;
		case "captainAmerica3":
			scores[5].appearances ++;
			break;
		case "doctorStrange":
			scores[6].appearances ++;
			break;
		case "guardians":
			scores[7].appearances ++;
			break;
		case "guardians2":
			scores[8].appearances ++;
			break;
		case "hulk":
			scores[9].appearances ++;
			break;
		case "ironMan":
			scores[10].appearances ++;
			break;
		case "ironMan2":
			scores[11].appearances ++;
			break;
		case "ironMan3":
			scores[12].appearances ++;
			break;
		case "spidermanHomecoming":
			scores[13].appearances ++;
			break;
		case "thor":
			scores[14].appearances ++;
			break;
		case "thor2":
			scores[15].appearances ++;
			break;
		case "thor3":
			scores[16].appearances ++;
			break;
	}
	$("#movie2").append("<img class='moviePoster' id='" + movie2Poster + "' src='images/" + movie2Poster + ".jpg'>");
}

pickMovieOne();
pickMovieTwo();

$(document).on("click", ".moviePoster", function(){
	var picked = $(this).attr("id");
	switch (picked) {
		case "antMan":
			scores[0].score += 1;
			break;
		case "avengers":
			scores[1].score += 1;
			break;
		case "avengers2":
			scores[2].score += 1;
			break;
		case "captainAmerica":
			scores[3].score += 1;
			break;
		case "captainAmerica2":
			scores[4].score += 1;
			break;
		case "captainAmerica3":
			scores[5].score += 1;
			break;
		case "doctorStrange":
			scores[6].score += 1;
			break;
		case "guardians":
			scores[7].score += 1;
			break;
		case "guardians2":
			scores[8].score += 1;
			break;
		case "hulk":
			scores[9].score += 1;
			break;
		case "ironMan":
			scores[10].score += 1;
			break;
		case "ironMan2":
			scores[11].score += 1;
			break;
		case "ironMan3":
			scores[12].score += 1;
			break;
		case "spidermanHomecoming":
			scores[13].score += 1;
			break;
		case "thor":
			scores[14].score += 1;
			break;
		case "thor2":
			scores[15].score += 1;
			break;
		case "thor3":
			scores[16].score += 1;
			break;
	}
	displayRanking();
});

function displayRanking() {
	$("#rankingDisplay").empty();
	sortScores = scores.slice(0);
	sortScores.sort(function(a, b){return b.score-a.score});
	for(i=0; i<sortScores.length; i++){
		sortScores[i].rank = i + 1;
		//$("#rankingDisplay").append("<p>" + (i+1) + ". " + sortScores[i].name + "</p>");
	}
	checkEnding()
}

function checkEnding() {
	numberFinished = 0;
	for(i=0; i<scores.length; i++) {
		if(scores[i].appearances === 1){
			numberFinished ++;
			if(numberFinished === 17){
				bracketStage();
			}else{}
		}else{}
	}
	pickMovieOne();
	pickMovieTwo();
}

function bracketStage(){
	$("#firstRound").hide();
	$("#secondRound").show();
	displayBracket();
};

function displayBracket() {
	for(i=0; i < (sortScores.length-1); i++){
		if(i <= 7) {
			$("#" + (i+1) + "Seed").append("<img class='bracketPoster' id='" + sortScores[i].image + " " + (i + 1) + "' src='images/" + sortScores[i].image + ".jpg'>");
		}else{
			$("#" + (i+1) + "Seed").prepend("<img class='bracketPoster' id='" + sortScores[i].image + " " + (i + 1) + "' src='images/" + sortScores[i].image + ".jpg'>");
		}
	}
	if(sortScores[i].rank >= 17) {
			finalRanking.push(sortScores[i]);
		}
}

$(document).on("click", ".bracketPoster", function(){
	var movieId = $(this).first().attr('id');
	var spliceId = movieId.split(" ");
	var movieName = spliceId[0];
	var movieRank = spliceId[1];
	var loserIdBracket = $(this).parent().parent().siblings().children().children().attr("id")
	var loserSpliceId = loserIdBracket.split(" ");
	var loserName = loserSpliceId[0];
	var loserRank = loserSpliceId[1];
	for (var i = 0; i < scores.length; i++) {
		if (scores[i].image === loserName) {
			finalRanking.push(scores[i]);
		}
		if (scores[i].image === movieName) {
			top8.push(scores[i]);
		}else{}
	}
	if(top8.length === 8){
		startThirdRound();
		sortBracketLoserScores();
	}else{}
	$(this).parent().parent().siblings().empty();
});

function sortBracketLoserScores() {
	finalRanking.sort(function(a, b){return b.rank-a.rank});
	for (var i = 0; i < finalRanking.length; i++){
		finalRanking[i].rank = 17 - i;
	}
}

function sortTop8LoserScores() {
	finalRanking.slice(9, 12).sort(function(a, b){return b.rank-a.rank});
	for (var i = 9; i < 13; i++){
		finalRanking[i].rank = 17 - i;
	}
}

function sortTop4LoserScores() {
	finalRanking.slice(13, 14).sort(function(a, b){return b.rank-a.rank});
	for (var i = 12; i < 15; i++){
		console.log(i);
		finalRanking[i].rank = 17 - i;
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
				$("#winner1").append("<img class='top8Poster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 8:
			case 9:
				$("#winner2").append("<img class='top8Poster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 4:
			case 13:
				$("#winner3").append("<img class='top8Poster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 5:
			case 12:
				$("#winner4").append("<img class='top8Poster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 2:
			case 15:
				$("#winner5").append("<img class='top8Poster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 7:
			case 10:
				$("#winner6").append("<img class='top8Poster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 3:
			case 14:
				$("#winner7").append("<img class='top8Poster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;
			case 6:
			case 11:
				$("#winner8").append("<img class='top8Poster' id='" + top8[i].image + "' src='images/" + top8[i].image + ".jpg'>");
				break;

		}
	}
}

$(document).on("click", ".top8Poster", function(){
	var top4MovieName = $(this).attr("id");
	var loserIdTop8Name = $(this).parent().parent().siblings().children().children().attr("id");
	for (var i = 0; i < top8.length; i++) {
		if (top8[i].image === loserIdTop8Name) {
			finalRanking.push(top8[i]);
		}
		if (top8[i].image === top4MovieName) {
			top4.push(top8[i]);
		}
	}
	if(top4.length === 4){
		sortTop8LoserScores();
		startFinalRound();
	}else{}
	$(this).parent().parent().siblings().empty();
});

function startFinalRound() {
	console.log(finalRanking);
	$("#thirdRound").hide();
	$("#finalRound").show();
	for(var i=0; i < top4.length; i++) {
		var finalRoundRank = top4[i].rank;
		switch(finalRoundRank) {
			case 1:
			case 16:
			case 8:
			case 9:
				$("#winner9").append("<img class='top4Poster' id='" + top4[i].image + "' src='images/" + top4[i].image + ".jpg'>");
				break;
			case 4:
			case 13:
			case 5:
			case 12:
				$("#winner10").append("<img class='top4Poster' id='" + top4[i].image + "' src='images/" + top4[i].image + ".jpg'>");
				break;
			case 2:
			case 15:
			case 7:
			case 10:
				$("#winner11").append("<img class='top4Poster' id='" + top4[i].image + "' src='images/" + top4[i].image + ".jpg'>");
				break;
			case 3:
			case 14:
			case 6:
			case 11:
				$("#winner12").append("<img class='top4Poster' id='" + top4[i].image + "' src='images/" + top4[i].image + ".jpg'>");
				break;

		}
	}
}


$(document).on("click", ".top4Poster", function(){
	var top4MoviePoster = $(this);
	var top2Image = $(this).attr("id");
	$(top4MoviePoster).attr("class", "top2Poster");
	var rightLoserTop4Name = $(this).parent().parent().next().next().children().children().attr("id");
	var leftLoserTop4Name = $(this).parent().parent().prev().prev().children().children().attr("id");
	for(var i=0; i < top4.length; i++) {
		if(leftLoserTop4Name === top4[i].image){
			finalRanking.push(top4[i]);
			console.log(finalRanking);
		}
		if(rightLoserTop4Name === top4[i].image){
			finalRanking.push(top4[i]);
			console.log(finalRanking);
		}
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
		if(finalRanking.length === 15){
			sortTop4LoserScores();
		}
	}
});

$(document).on("click", ".top2Poster", function(){
	var winnerName = $(this).attr("id");
	var leftFinalLoserName = $(this).parent().parent().next().next().children().children().attr("id");
	var rightFinalLoserName = $(this).parent().parent().prev().prev().children().children().attr("id");
	console.log(winnerName);
	for(var i=0; i < top4.length; i++) {
		if(top4[i].image === winnerName){
			top4[i].rank = 1;
			finalRanking.push(top4[i]);
			console.log(finalRanking);
		}
		if(top4[i].image === leftFinalLoserName){
			top4[i].rank = 2;
			finalRanking.push(top4[i]);
			console.log(finalRanking);
		}
		if(top4[i].image === rightFinalLoserName){
			top4[i].rank = 2;
			finalRanking.push(top4[i]);
			console.log(finalRanking);
		}
	}
	$("#finalRound").hide();
	$("#championDisplay").show();
	$("#overallWinner").append(this);
	$(this).attr("class", "winner");
	displayFinalRanking();
});

function displayFinalRanking(){
	$("#rankingDisplay").empty();
	console.log(finalRanking);
	if (finalRanking.length === 17){
		finalRanking.sort(function(a, b){return a.rank-b.rank});
		for(i=0; i<finalRanking.length; i++){
			finalRanking[i].rank = i + 1;
			$("#rankingDisplay").append("<p>" + (i+1) + ". " + finalRanking[i].name + "</p>");
		}
	}
}


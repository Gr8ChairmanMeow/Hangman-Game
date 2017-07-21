//var words = ["kitten","doggo","snakeroo","kitten","penguin","kitten"]

var variables = {
	guesses: [],
	remaining:15,
	valid: "abcdefghijklmnopqrstuvwxyz",
	words: ["kitten","doggo","snakeroo","kitten","penguin","kitten"],
	counter: 0,
	wins:0,
	word: function() {
		return this.words[Math.floor(Math.random()*this.words.length)];
		},
	indexArr: function(arr, val) {
	    var indexes = [];
	    for(i = 0; i < arr.length; i++){
		        if (arr[i] === val){
		            indexes.push(i);
		        }
		    }
		    //console.log(indexes);
		    return indexes;
		},
	hidden: function(word){
			var hidden = ""

			for(j=0;j<word.length;j++){
				hidden+="-";
			}
			return hidden;
		}
};

/*function indexArr(arr, val){
	var indexes=[];

	for(i=0;i<arr.length;i++){
		if (arr[i] === val){
			indexes.push(i);
		}
	};

	console.log(indexes);
}*/

/*function hidden(word){
	var hidden = ""

	for(j=0;j<word.length;j++){
		hidden+="-";
	}
	console.log(hidden);
};*/

var the_word = variables.word();
var hidden_word = variables.hidden(the_word);

document.onkeyup = function(event) {
	//variables.counter++;
	variables.remaining--;
	variables.wins++;

	var key = event.key;
	var $guesses = document.getElementById("guesses");
	var $word = document.getElementById("word");
	var $remaining = document.getElementById("remaining");
	var $wins = document.getElementById("wins");
	var check = variables.guesses.indexOf(key);
	var check_guess = the_word.indexOf(key);
	//may need to comment out below
	//var the_word = variables.word();

	//var hidden_word = variables.hidden(the_word);

	if (check === -1){
		variables.guesses.push(key);
	}

	if (check_guess > -1){
		var correctArr = variables.indexArr(the_word,key);
		var hiddenArr = hidden_word.split("");
		for (k=0;k<correctArr.length;k++){
			hiddenArr[correctArr[k]] = hiddenArr[correctArr[k]].replace(/-/g,key);
			//console.log(hiddenArr);
			//console.log(correctArr[k]);
		};
		hidden_word = hiddenArr.join("");
		//console.log(hidden_word);
		//$word.innerHTML = hidden_word;
	}

	if (variables.remaining === 0){
		alert("You lost!")
	}
	
	$guesses.innerHTML = variables.guesses;
	//$word.innerHTML = variables.hidden(the_word);
	$word.innerHTML = hidden_word;
	$wins.innerHTML = variables.wins;
	$remaining.innerHTML = variables.remaining;

	//working for arrays looking for words
	//variables.indexArr(variables.words,"kitten");

	//variables.indexArr(the_word,key);
	//console.log(the_word);
	variables.hidden(the_word);
}

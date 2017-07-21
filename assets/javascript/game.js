//var words = ["kitten","doggo","snakeroo","kitten","penguin","kitten"]

var variables = {
	guesses: [],
	valid: "abcdefghijklmnopqrstuvwxyz",
	words: ["kitten","doggo","snakeroo","kitten","penguin","kitten"],
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
		    console.log(indexes);
		},
	hidden: function(word){
			var hidden = ""

			for(j=0;j<word.length;j++){
				hidden+="-";
			}
			return hidden;
		}

	//["kitten","doggo","snakeroo"]
	//computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

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


document.onkeyup = function(event) {
	var key = event.key;
	var $guesses = document.getElementById("guesses");
	var $word = document.getElementById("word")
	var check = variables.guesses.indexOf(key)
	//may need to comment out below
	var the_word = variables.word();

	if (check === -1){
		variables.guesses.push(key);
	}
	
	$guesses.innerHTML = variables.guesses;
	$word.innerHTML = variables.hidden(the_word);


	variables.indexArr(variables.words,"kitten");
	console.log(the_word);
	//variables.hidden(the_word);
}

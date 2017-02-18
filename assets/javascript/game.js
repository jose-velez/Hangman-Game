////////////////////////////////////////////////////////////////////////////////
//																			  //
//							Hangman Game									  //
//																			  //
////////////////////////////////////////////////////////////////////////////////

var wordBank = ["dog", "cat", "horse", "turtle", "cow"];		// Word to be used 
var randomWord;													// Word selected by the computer 
var letterGuessed;												// Letter selected by the user
var allLetters;													// Bank of letters selected by the user 
var wins = 0;													// Numbers of win games
var guessedRemaining = 4;										// Guesses remaining to the user 

//Pick a Random Word from the array 
randomWord = wordBank[ Math.floor(Math.random() * wordBank.length)];
console.log(randomWord);
createSpaces(randomWord);



document.onkeyup = function(event)
{

	//Store the input from the user 
	letterGuessed = event.key;
	lookForTheLetter(letterGuessed);

	
};



/////////////////////////////////////////////////////////////////////////////
//																		   //
//							All Functions								   //
//																		   //
/////////////////////////////////////////////////////////////////////////////

//Function to create blank spaces
function createSpaces(randomWord)
{
	for (i= 0; i < randomWord.length; i++)
	{
		var newElement = document.createElement("div");
		var newLine = document.createTextNode("_ ");
		document.getElementById("currentWord").appendChild(newLine);	
		console.log(newLine);
	}
}	

//Function to see if the letter enter by the user is in the random word or not 
function lookForTheLetter(letterGuessed)
{
	for (i=0; i < randomWord.length; i++)
	{
		if(letterGuessed === randomWord.charAt(i))
		{
			console.log(letterGuessed);
			newLine = document.createTextNode(randomWord.charAt(i));
			document.getElementById("currentWord").appendChild(newLine);

		}
		else
		{
			console.log(letterGuessed);
		}
	}
	printLetter(letterGuessed);
}

// function to orint the letter
function printLetter(letter)
{
		newElement = document.createElement("div");
		var newLetter = document.createTextNode(letterGuessed);
		document.getElementById("letters").appendChild(newLetter);	
}
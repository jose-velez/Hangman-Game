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
	console.log(letterGuessed);

	//loop to see if the letter enter by the user is in the random word
	for (i=0; i < randomWord.length; i++)
	{
		if(letterGuessed === randomWord.charAt(i))
		{
			document.getElementById("letters").innerHTML = letterGuessed;

		}
		else
		{
			
		}
	}
};



/////////////////////////////////////////////////////////////////////////////
//																		   //
//							All Functions								   //
//																		   //
/////////////////////////////////////////////////////////////////////////////

//For loop to create blank spaces
function createSpaces(randomWord)
{
	for (i= 0; i < randomWord.length; i++)
	{
		var newElement = document.createElement("div");
		var newLine = document.createTextNode("_ ");
		document.getElementById("currentWord").appendChild(newLine);	
	}
}	
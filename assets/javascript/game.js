////////////////////////////////////////////////////////////////////////////////
//																			  //
//							Hangman Game									  //
//																			  //
////////////////////////////////////////////////////////////////////////////////

var wordBank = ["dog", "cat", "horse", "turtle", "cow"];		// Word to be used 
var randomWord;													// Word selected by the computer 
var letterGuessed;												// Letter selected by the user
var allLetters= [""];													// Bank of letters selected by the user 
var wins = 0;													// Numbers of win games
var guessedRemaining = 4;										// Guesses remaining to the user 
var allLettersGuessed = [];										// Store all the letters guessed dby the user 
var isInTheArray = false;

//Pick a Random Word from the array 
randomWord = wordBank[ Math.floor(Math.random() * wordBank.length)];
console.log(randomWord);
createSpaces(allLetters, randomWord);



document.onkeyup = function(event)
{

	//Store the input from the user 
	letterGuessed = event.key; 
	lookTheArray(letterGuessed);

	if(isInTheArray === false)
	{
		lookForTheLetter(letterGuessed);
	}
	else
	{
		alert("Try another letter");
	}
	
};



/////////////////////////////////////////////////////////////////////////////
//																		   //
//							All Functions								   //
//																		   //
/////////////////////////////////////////////////////////////////////////////

//Function to create blank spaces
function createSpaces(allLetters, randomWord)
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
	allLettersGuessed.push(letterGuessed);
	printLetter(letterGuessed);				// Call the function to print the letter 

}

// function to print the letter
function printLetter(letter)
{
		newElement = document.createElement("div");
		var newLetter = document.createTextNode(letterGuessed);
		document.getElementById("letters").appendChild(newLetter);	
}

function lookTheArray(allLettersGuessed, letterGuessed)
{
	for(i = 0; i < allLettersGuessed.length; i++)
	{
		if (allLettersGuessed.charAt(i) == letterGuessed)
		{
			console.log(isInTheArray);
			console.log(allLettersGuessed[i]);
			return isInTheArray = true;
			console.log(isInTheArray);
		}
		else
		{
			console.log(isInTheArray);
			console.log(allLettersGuessed[i]);
			return isInTheArray = false;
			console.log(isInTheArray);
		}
	}
}
function getInfo() {
	window.numberOfQuestions =	10;
	window.currentSlide = 		0;
	window.currentScore = 		0;
	window.title = 				"sussy AMONGUS Quiz";

	window.questions = [	"What is the minimum number of players required <br>to play Among Us's base game mode?",//1
							"When was Among Us first released?",												//2
							"Which of these was/is <u>not</u> a playable role in Among us?", 							//3
							"What is the name of the company that made Among Us?", 								//4
							"Which Imposter based party game is Among us based off?",							//5
							"How many bones do Crewmates have?",												//6
							"What is under the Crewmates suits?",												//7
							"What are Crewmates made of?",														//8
							"How tall are Among Us Crewmates?",													//9
							"Which one of the Geneva Conventions <br>did Innersloth CO violate?" ];					//10
	
	window.correctAnswer = ["D", "C", "A", "E", "B" , "C", "E", "D", "B", "A"]; 

	window.answerA = [ 		"- 1", 																								//1
							"- 2014", 																							//2
							"- Captain", 																						//3 CORRECT
							"- The Tophat Crew", 																				//4
							"- Werewolf", 																						//5
							"- 300",																							//6
							"- Nothing, it's hollow",																			//7
							"- Meat",																							//8
							"- 6 feet 6 inches",																						//9
							"- <u>Rule 59.</u> The improper use of the distinctive emblems <br>&nbsp&nbsp&nbsp&nbspof the Geneva Conventions is prohibited."];	//10 CORRECT

	window.answerB = [ 		"- 2", 																			//1
							"- 2016", 																		//2
							"- Crewmate", 																	//3
							"- PuffballsUnited",															//4
							"- Mafia",																		//5 CORRECT
							"- 206",																		//6
							"- Henry Stickmin",																//7
							"- Stuffing",																	//8
							"- 3 feet 6 inches",																	//9 CORRECT
							"- <u>Rule 31.</u> Humanitarian relief personnel <br>&nbsp&nbsp&nbsp&nbspmust be respected and protected." ];	//10

	window.answerC = [ 		"- 3",																																	//1
							"- 2018",																																//2 CORRECT
							"- Imposter", 																															//3
							"- Mira HQ",																															//4
							"- Frogger", 																															//5
							"- 1",																																	//6 CORRECT
							"- A human person",																														//7
							"- Spacesuit",																													//8
							"- 0 feet 7 inches",																															//9	
							"- <u>Rule 133.</u> The property rights of displaced persons <br>&nbsp&nbsp&nbsp&nbspmust be respected." ];//10

	window.answerD = ["- 4",  																								//1 CORRECT
							"- 2020",																						//2
							"- Scientist", 																					//3
							"- The Pretenders LLC",																			//4
							"- 1-2-3 Look!",																				//5
							"- 0",																							//6
							"- A can of beans",																				//7
							"- Bean",																						//8 CORRECT
							"- 5 feet 5 inches",																					//9
							"- <u>Rule 65.</u> Killing, injuring or capturing an adversary <br>&nbsp&nbsp&nbsp&nbspby resort to perfidy is prohibited."];	//10

	window.answerE = [ 		"- 5", 					//1
							"- 2022", 				//2
							"- Rancher", 			//3
							"- Innersloth CO", 		//4 CORRECT
							"- Witch",				//5
							"- 9201",				//6
							"- Another suit",		//7 CORRECT
							"- Metal",				//8
							"- 5 oranges tall",		//9
							"- None of the above"];	//10

							//DONE: "What is the minimum number of players required to play Among Us's base game mode?"
	window.response = [ 	"The player roles in a 4 player game of Among Us <br>is 3 Crewmates and 1 Imposter. <br>This for balancing, as the Imposter wins <br>when the Number of Imposters and Crewmates is the same", 							//1

							//DONE: "When was Among Us first released?"
							"Among Us was first released on <br>June 15, 2018 for ios and android. <br><br>it was originally both local-multiplayer and mobile only",//2

							//DONE: "Which of these was/is NOT a playable role in Among us?"
							"The Rancher role was introduced <br>in the 2023 April fools Horse Mode update, <br>replacing the imposter role in Hide and Seek mode.",//3

							//DONE: "What is the name of the company that made Among Us?"
							"PuffballsUnited is the screen name of Marcus Bromander <br>cofounder of innersloth, <br>the Henry Stickmin series was originally published on his Newgrounds account",//4

							//DONE: "Which Imposter based party game is Among us based off?"
							"Among Us is based off a sub-type of Mafia named Assassin. <br>While Among Us was in Development it went by the code name Space Mafia, <br>which it still goes by in its URL on the Google Play Store",//5

							//DONE: "How many bones do Crewmates have?"
							"in the bottom right corner of airship map, <br>there is an x-ray which shows crewmates have a singular cartoon bone, which is visible upon being killed.",//6

							//DONE: "What is under the Crewmates suits?"
							"This was revealed when the \"The Crewmate Suit\" <br>hat was anounced on the among us twitter account <br>in response to a question from user TurtleCharge",//7

							//DONE: "What are Crewmates made of?"
							"Alongside being reffered to as beans in the <br>\"oops! all beans! imposter cookbook\" <br>Crewmates have been referred to as <br>\"Bean Based Lifeforms\" on the offical Innersloth Discord",//8

							//DONE: "How tall are Among Us Crewmates?"
							"Among Us Crewmates are all <br>3 foot 6 inches and weigh 92 pounds, <br>with the exeption of the removed Fortegreen color, <br>which weighed 132 pounds",//9

							//DONE: "Which one of the Geneva Conventions did Innersloth CO violate?"
							"Innersloth violated the Geneva Conventions <br>by using the red cross symbol in the SKELD maps medbay area. <br>the medbay has since been updated with a green cross"];//10

}
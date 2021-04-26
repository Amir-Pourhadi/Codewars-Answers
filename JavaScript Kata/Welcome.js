/* -------------------------------------------------------------------------- */
/*                                  Welcome!                                  */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/welcome
/* Your start-ups BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.
Marketing thinks it would be great to welcome visitors to the site in their own language.
Luckily you already use an API that detects the user's location, so this is an easy win.

Think of a way to store the languages as a database (eg an object).
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database.
It should default to English if the language is not in the database, or in the event of an invalid input. */

function greet(language) {
	const greetDB = {
		english: "Welcome",
		czech: "Vitejte",
		danish: "Velkomst",
		dutch: "Welkom",
		estonian: "Tere tulemast",
		finnish: "Tervetuloa",
		flemish: "Welgekomen",
		french: "Bienvenue",
		german: "Willkommen",
		irish: "Failte",
		italian: "Benvenuto",
		latvian: "Gaidits",
		lithuanian: "Laukiamas",
		polish: "Witamy",
		spanish: "Bienvenido",
		swedish: "Valkommen",
		welsh: "Croeso",
	};
	return greetDB[language] || greetDB["english"];
}

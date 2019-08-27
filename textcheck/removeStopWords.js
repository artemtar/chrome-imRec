/*
 * String method to remove stop words
 * Written by GeekLad http://geeklad.com
 * Stop words obtained from http://www.lextek.com/manuals/onix/stopwords1.html
 *   Usage: string_variable.removeStopWords();
 *   Output: The original String with stop words removed
 */
String.prototype.removeStopWords = function() {
	var x;
	var y;
	var word;
	var stop_word;
	var regex_str;
	var regex;
	var cleansed_string = this.valueOf();
	var stop_words = new Array(
		'all',
		'and',
		'any',
		'are',
		'been',
		'big',
		'but',
		'can',
		'did',
		'for',
		'get',
		'got',
		'had',
		'has',
		'have',
		'her',
		'here',
		'high',
		'him',
		'his',
		'how',
		'into',
		'its',
		'just',
		'kind',
		'know',
		'left',
		'large',
		'last',
		'less',
		'let',
		'like',
		'likely',
		'long',
		'made',
		'make',
		'man',
		'many',
		'may',
		'member',
		'men',
		'more',
		'most',
		'mostly',
		'much',
		'must',
		'myself',
		'necessary',
		'need',
		'needed',
		'new',
		'next',
		'nobody',
		'none',
		'not',
		'nothing',
		'now',
		'number',
		'off',
		'often',
		'old',
		'once',
		'one',
		'only',
		'open',
		'other',
		'our',
		'out',
		'over',
		'part',
		'place',
		'point',
		'put',
		'puts',
		'quite',
		'rather',
		'right',
		'room',
		'said',
		'same',
		'say',
		'says',
		'second',
		'see',
		'seem',
		'several',
		'she',
		'should',
		'show',
		'since',
		'small',
		'some',
		'somebody',
		'someone',
		'something',
		'somewhere',
		'still',
		'such',
		'sure',
		'take',
		'taken',
		'than',
		'that',
		'the',
		'them',
		'then',
		'there',
		'therefore',
		'these',
		'they',
		'thing',
		'things',
		'think',
		'this',
		'those',
		'though',
		'thought',
		'three',
		'thus',
		'today',
		'together',
		'too',
		'took',
		'turn',
		'turned',
		'turns',
		'under',
		'until',
		'upon',
		'use',
		'used',
		'very',
		'want',
		'wanted',
		'was',
		'way',
		'well',
		'went',
		'were',
		'what',
		'when',
		'where',
		'whether',
		'which',
		'while',
		'who',
		'whole',
		'whose',
		'why',
		'will',
		'with',
		'within',
		'without',
		'work',
		'would',
		'year',
		'years',
		'yet',
		'you',
		'young',
		'your',
		'yours',
	)

	// Split out all the individual words in the phrase
	words = cleansed_string.match(/[^\s]+|\s+[^\s+]$/g)

	// Review all the words
	for(x=0; x < words.length; x++) {
		// For each word, check all the stop words
		for(y=0; y < stop_words.length; y++) {
			// Get the current word
			word = words[x].replace(/\s+|[^a-z]+/ig, "");	// Trim the word and remove non-alpha

			// Get the stop word
			stop_word = stop_words[y];

			// If the word matches the stop word, remove it from the keywords
			if(word.toLowerCase() == stop_word) {
				// Build the regex
				regex_str = "^\\s*"+stop_word+"\\s*$";		// Only word
				regex_str += "|^\\s*"+stop_word+"\\s+";		// First word
				regex_str += "|\\s+"+stop_word+"\\s*$";		// Last word
				regex_str += "|\\s+"+stop_word+"\\s+";		// Word somewhere in the middle
				regex = new RegExp(regex_str, "ig");

				// Remove the word from the keywords
				cleansed_string = cleansed_string.replace(regex, " ");
			}
		}
	}
	return cleansed_string.replace(/^\s+|\s+$/g, "");
}
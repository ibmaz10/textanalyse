function analyzeSentiment() {
    var text = document.getElementById('textInput').value;
    var result = getSentiment(text);
    document.getElementById('result').innerHTML = "<p>Sentiment: " + result + "</p>";
}

function getSentiment(text) {
    // Initialize the natural library's sentiment analyzer
    var natural = require('natural');
    var analyzer = new natural.SentimentAnalyzer();
    var stemmer = natural.PorterStemmer;

    // Analyze sentiment
    var score = analyzer.getSentiment(stemmer.tokenizeAndStem(text));

    // Determine sentiment
    if (score > 0) {
        return "Positive";
    } else if (score < 0) {
        return "Negative";
    } else {
        return "Neutral";
    }
}

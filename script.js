function analyzeSentiment() {
    var text = document.getElementById('textInput').value;
    
    // Perform sentiment analysis
    var sentiment = new Sentiment();
    var result = sentiment.analyze(text);
    
    // Display the result
    var sentimentResult = "";
    if (result.score > 0) {
        sentimentResult = "Positive";
    } else if (result.score < 0) {
        sentimentResult = "Negative";
    } else {
        sentimentResult = "Neutral";
    }
    
    // Update the result div
    document.getElementById('result').innerHTML = "<p>Sentiment: " + sentimentResult + "</p>";
}

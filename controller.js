function QuoteController($scope) {
    $scope.quotes = [
        "FOCUS",
        "STAY FOCUSED AND KEEP SHIPPING",
        "MOVE FAST AND BREAK THINGS",
        "PROCEED AND BE BOLD",
        "INNOVATE BETTER",
        "FORTUNE FAVORS THE BOLD",
        "SHIPS ARE NOT BUILT TO STAY AT HARBOR",
        "JUST DO IT",
        "ACHIEVE GREATNESS",
        "SIMPLIFY",
        "DO WHAT YOU LOVE",
        "GET FOCUSED",
        "MEMENTO MORI",
        "JUST DO IT",
        "GO OUTSIDE",
        "TODAY IS BIG",
        "A SENSE OF URGENCY",
        "DEMAND MORE",
        "DON'T STOP NOW",
        "SUBTRACT",
        "DONE IS BETTER THAN PERFECT",
        "YOUR TIME IS LIMITED",
        "GET CURIOUS",
        "BE KIND",
        "NO REGRETS",
        "BE HAPPY, NOT COMPLACENT",
        "NEVER DOUBT YOURSELF",
        "QUIT QUITTING",
        "YOU MISS EVERY SHOT YOU DON'T TAKE",
        "GET OUT THERE",
        "BELIEVE YOU CAN",
        "STAY HUNGRY, STAY FOOLISH",
        "DON'T WAIT",
        "FAIL HARDER",
        "DREAM BIGGER",
        "SHIPS ARE NOT BUILT TO STAY AT HARBOR",
        "HACK FASTER",
        "CREATE MORE",
        "MAKE 3 FRIENDS TODAY",
        "DONE IS BETTER THAN PERFECT",
        "BETTER TOGETHER",
        "GOOD THINGS TAKE TIME",
        "HACK",
        "WHAT WOULD YOU DO IF YOU WEREN'T AFRAID?",
        "HACKERS GONNA HACK",
        "FORTUNE FAVORS THE BOLD",
        "SEEK CRITICISM",
        "BE BOLD",
        "DARE TO FAIL",
        "COLLABORATE",
        "IMPROVISE",
        "GET BETTER",
        "FAIL HARDER",
        "GET THE WIN",
        "GROW",
        "KEEP CALM AND CODE ON",
        "ALWAYS BE CLOSING",
        "YOUR HEART KNOWS",
        "STOP THINKING, START DOING",
        "SUBTRACT SUBTRACT SUBTRACT",
        "DEEDS, NOT WORDS",
        "WORK HARD. WORK SMART.",
        "RUTHLESS PRIORITIZATION",
        "YOUR HEART KNOWS",
        "DO SOMETHING THAT SCARES YOU",
        "SHIP HAPPINESS",
        "PEOPLE FIRST",
        "REMEMBER TO LAUGH",
        "EVERYTHING YOU NEED IS ALREADY INSIDE",
        "THINK FOR YOURSELF",
        "HIGH EXPECTATIONS ARE THE KEY TO EVERYTHING",
        "INVERT, ALWAYS INVERT.",
        "KEEP CALM AND CODE ON"
    ];

    var arrayLength = $scope.quotes.length;

    $scope.quote = "";

    $scope.randomQuote = function() {
        var randomInt = Math.floor((Math.random()*arrayLength));
        $scope.quote = $scope.quotes[randomInt];
    };

    $scope.replaceWord = function() {
        $scope.replaceThis = "'fade'";
    };

}
import { helloWorld, rps } from "./your-task.mjs";
import { assertPrint, runAllTests } from "./helpers.mjs";

function testHelloWorld() {
    return assertPrint(
        helloWorld() === "Hello world!",
        'it returns "Hello world!"',
    );
}

function testPaperBeatsRock() {
    return assertPrint(
        rps("rock", "paper") === "Paper wins!",
        "paper beats rock",
    );
}

function testPaperBeatsRockCommutes() {
    return assertPrint(
        rps("paper", "rock") === "Paper wins!",
        "paper beats rock (flipped)",
    );
}
// add more test functions here to exhaustively test your rps function...

function testRockBeatsScissors() {
    return assertPrint(
        rps("rock", "scissors") === "Rock wins!",
        "Rock beats Scissors",
    );
}

function testRockBeatsScissorsCommutes() {
    return assertPrint(
        rps("scissors", "rock") === "Rock wins!",
        "Rock beats Scissors (flipped)",
    );
}

function testScissorsBeatsPaper() {
    return assertPrint(
        rps("scissors", "paper") === "Scissors wins!",
        "Scissors beats paper",
    );
}

function testScissorsBeatspaperCommutes() {
    return assertPrint(
        rps("paper", "scissors") === "Scissors wins!",
        "Scissors beats paper (flipped)",
    );
}

function testTie() {
    return assertPrint(
        rps("paper", "paper") === "Tie!",
        "Tie!",
    );
}

// Once you have defined each test function, don't forget to
// pass the function definition to the test harness so that
// the test will actually run:
runAllTests(
    testHelloWorld, 
    testPaperBeatsRock, 
    testPaperBeatsRockCommutes,
    testRockBeatsScissors,
    testRockBeatsScissorsCommutes,
    testScissorsBeatsPaper,
    testScissorsBeatspaperCommutes,
    testTie
);

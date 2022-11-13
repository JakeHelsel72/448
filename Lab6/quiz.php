<?php
$correct = 0; // keeps track of correct answers
for ($i = 0; $i < 5; $i++){
    $user_answers[$i] = $_POST["Question$i"]; // put user answers in array
}
$questions[0] = "Question 1 Which one is our class code?";
$answers[0] = 'EECS 448';
$questions[1] = "Question 2 How many TAs do we have in the class?";
$answers[1] = '3';
$questions[2] = "Question 3 Where do we take the class?";
$answers[2] = 'Eaton Hall';
$questions[3] = "Question 4 How many campus does KU have?";
$answers[3] = '5';
$questions[4] = "Question 5 Which one is the main campus of KU?";
$answers[4] = 'Lawrence';

for ($i = 0; $i < 5; $i++){
    echo "$questions[$i]<br>";
    echo "&emsp;Your answer: $user_answers[$i]<br>"; //the emsp thing is to tab it over a bit
    echo "&emsp;Correct answer: $answers[$i]<br>";
    if ($user_answers[$i] == $answers[$i]){
        $correct++; // increments when answer is right
    }
}
if ($correct == 5){
    echo "<br>Correct answers: $correct! Congratulations! You got 100%";
} else {
    echo "<br>Correct answers: $correct, so you got a score of ", ($correct/5)*100 ,"%.";
}
?>
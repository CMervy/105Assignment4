// Prompt Sync //
const prompt = require('prompt-sync')();

// Global Variables //


// Functions //
function MathMax(){
    console.clear();
    
    var max = 0
    x = 0
    while(x === 0){
        let number1 = Number(prompt(`Enter your number: `))
        let choice = prompt(`Type "done" if you have entered all your numbers. Press any key to continue: `).toLowerCase()
        if(number1 > max){
            max = number1
        }
        else{
            x = 0
        }

        if (choice === "done"){
            x = 1
        }
        else{}
    }
    console.log(`${max} is the highest number you entered.`)
}

function reverseOrder(){
    console.clear();

    const table1 = [];
    var word = "";
    var userLength = 0;
    var isNegative = "";

    console.log("\nGive Me A Number To Reverse The Number Order!");
    var user = prompt();
    userLength = user.length;

    if (user.substring(0, 1) == "-"){
        isNegative = "-";
        user = user.substring(1, userLength);
    };
    
    for (var i = 0; i < user; i++){
        var temp = user.substring(i, i+1);
        table1.push(temp);
    };
    if (isNegative == ""){
        for (var i = 0; i < user; i++){
            var temp = table1.pop();
            word = word+temp;
        };
    } else if (isNegative == "-"){
        word = isNegative;
        for (var i = 0; i < user; i++){
            var temp = table1.pop();
            word = word+temp;
        };
    };

    console.clear;
    console.log("\nThis Is Your Number!");
    console.log(word);

    console.log("\nDo You Want To Go Back To Options? (Enter To Go Back | No to continue)");
    var exit = prompt();
    if (exit.toLowerCase == "no"){
        reverseOrder();
    } else {
        selectFunction();
    }
};

function uppercase(){
    let string = prompt(`Enter something to be capitalized: `)
    var finalstring = ""
    for(var i = 0; i < string.length; i++){
        var character = string[i]
        var ascii = character.charCodeAt(0)
        
        if(ascii >= 97 && ascii <= 122){
            finalstring += String.fromCharCode(ascii - 32);
        }
        else{
            finalstring += character
        }
    }
   console.log(finalstring)
   return finalstring
   
}

function invertCapitals(){
    console.clear();

    console.log("\nType A Word A Randomize Capital Letters Please!");
    var user = prompt();
    var userLength = user.length;
    var word = "";

    console.clear();
    for (var i = 0; i < userLength; i++){
        var temp = user.substring(i, i+1);
        if (temp == temp.toLowerCase()){
            word = word+temp.toUpperCase();
        } else if (temp == temp.toUpperCase()){
            word = word+temp.toLowerCase();
        };
    };

    console.clear
    console.log("\nYour Word Reversed Capitals Are.");
    console.log(word);

    console.log("\nDo You Want To Go Back To Options? (Enter To Go Back | No to continue)");
    var exit = prompt();
    if (exit.toLowerCase == "no"){
        reverseOrder();
    } else {
        selectFunction();
    }
};

function selectFunction(again){
    console.clear();

    if (again == 1){
        console.log("\nInvalid Input Please Choose A Function\n\t1. MathMax\n\t2.reverseOrder\n\t3. Uppercase\n\t4. Name")
    } else {
        console.log("\nChoose A Function();\n\t1. MathMax();\n\t2. reverseOrder();\n\t3. uppercase();\n\t4. invertCapitals();\n\t5. Quit")
    }
    var x = prompt();
    x = parseInt(x);

    if (x == 1){
        MathMax();
    } else if (x == 2){
        reverseOrder();
    } else if (x == 3){
        uppercase();  
    } else if (x == 4){
        invertCapitals();
    } else if (x == 5){
        console.log("Bye Bye!");
        setTimeout(() => {
            console.clear();
        }, 3000);
    } else {
        selectFunction(1);
    }
}




// Start //
selectFunction(0);
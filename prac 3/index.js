function write (message){
    document.getElementById('message').innerHTML += message + '<br/>';
    }
    
    const num1 = parseInt(prompt('Enter the first number '));
    const num2 = parseInt(prompt('Enter the second number '));
    
    const sum = num1 + num2;
    
    write(`The sum of ${num1} and ${num2} is ${sum}`);
    write("num1 and num2 are both: " + typeof sum);


    function write (message){
        document.getElementById('message').innerHTML += message + '<br/>';
        }
        
        var answer = 9;
        var guess;
        
        for(i=0; i<10; i++)
        {
            guess = prompt("what number am i thinking of?");
          if(answer == guess)
          {
          alert("you win!");
          break;
          }
          else
          {
          } 
        }
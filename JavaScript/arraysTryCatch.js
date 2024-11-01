//Cat variables! ( car is a hip and new cool way to say cat )
var Stopics = ["Maine coons", "Tuxedo", "Car", "russian blue", "Laperm" ];
//weekends and weekday names!
var dayNames  = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//name
var fname = "Roel";
//date of birth
var dateofbirth = 2009;
//adds a new cat breed
 Stopics.push("Selkirk Rex");
console.log("The length of the siteTopics array is " + Stopics.length + ".");
var i = 0;
while (i < Stopics.length) {
  
    console.log(Stopics[i]);
    i++;
  }
 //reverses day names
  dayNames.reverse();
  //takes a daynameout
  dayNames.shift();
  // console.log(dayNames);
  
    try
    {
      
      if(dayNames[0] == "Sunday"){
//error !
        throw "Error: Sunday should be missing!";
      }
      
    
      

    }
    catch(e){console.log(e);}

    finally{

      console.log("Roel was born in the year 2009.I think the day was either a " + dayNames[1] +  " or " + dayNames[3] + ".");
    }    

  
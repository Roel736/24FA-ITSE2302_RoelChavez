var Stopics = ["Maine coons", "Tuxedo", "Car", "russian blue", "Laperm" ];
var dayNames  = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var fname = "Roel";
var dateofbirth = 2009;
 Stopics.push("Selkirk Rex");
console.log("The length of the siteTopics array is " + Stopics.length + ".");
var i = 0;
while (i < Stopics.length) {
  
    console.log(Stopics[i]);
    i++;
  }
  dayNames.reverse();
  dayNames.shift();
  // console.log(dayNames);
  
    try
    {
      
      if(dayNames[0] == "Sunday"){

        throw "Error: Sunday should be missing!";
      }
      
    
      

    }
    catch(e){console.log(e);}

    finally{

      console.log("Roel was born in the year 2009.I think the day was either a " + dayNames[1] +  " or " + dayNames[3] + ".");
    }    

  
function calculate()
{
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  
  var ans1 = document.getElementById("q1ans").checked;
  var ans2 = document.getElementById("q2ans").checked;
  var ans3 = document.getElementById("q3ans").checked;
  var ans4 = document.getElementById("q4ans").checked;
  
  var percentage = 0;
  
  if (!ans1)
  {
    percentage += Math.ceil(Math.random() * 19); // we didn't agree on what to increase/decrease the odds by, so we went with 18 as a middle ground
  } else {
    percentage -= Math.ceil(Math.random() * 19);
  }
  
  if (!ans2)
  {
    percentage += Math.ceil(Math.random() * 19); 
  } else {
    percentage -= Math.ceil(Math.random() * 19);
  }
  
  if (!ans3)
  {
    percentage += Math.ceil(Math.random() * 19);
  } else {
    percentage -= Math.ceil(Math.random() * 19);
  }
  
  if (!ans4)
  {
    percentage += Math.ceil(Math.random() * 19);
  } else {
    percentage -= Math.ceil(Math.random() * 19);
  }
  
  // definitely not hard coded...
  ((name1.toLowerCase() == "sir roy" && name2.toLowerCase() == "monette") || (name1.toLowerCase() == "monette" && name2.toLowerCase() == "sir roy")) ? percentage = 108 : percentage += Math.round(Math.random() * 100);
  // yes, for the most part, you're only getting 108% if you answer at least one of those questions with a no
  // and yes, our methods for getting a random number are inconsistent [insert some excuse on how love is like gambling so blah blah blah]
  
  if (percentage > 108) // these two ifs act as a clamp
  {
    percentage = 108;
  }
  
  if (percentage < 0)
  {
    percentage = 0;
  }
  
  document.getElementById("output").innerHTML = `The percentage of love between ${name1} and ${name2} is ${percentage}%`
}
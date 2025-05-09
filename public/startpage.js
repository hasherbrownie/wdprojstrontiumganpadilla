function changeimg()
{
  var changingimg = document.getElementById("changingimg")

  const images = [
    "galleryimg1.jpg",
    "galleryimg2.jpg",
    "galleryimg3.jpg",
    "galleryimg4.jpg"
  ];

  var currentimg = images.indexOf(changingimg.src.split("/").pop());
  
  currentimg += 1; // go to next image
  
  if (currentimg == images.length) // basically if it's on the last image in the array
  {
    currentimg = 0;
  }
  
  changingimg.src = images[currentimg];
}

function closeseasonthing()
{
  document.getElementById("transluscent").style.display = "none";
}

function changeseasonexp(season)
{
  document.getElementById("transluscent").style.display = "block";
  var box = document.getElementById("seasonexplanationblock");
  
  const explanations = { // i used an object since it seemed like the easier thing to do, but idk
    "1": "Marinette Dupain-Cheng is chosen as the holder of the ladybug earrings and Adrien Agreste is the holder of the Black Cat’s ring. They are tasked with protecting Paris using the power of creation and destruction to defeat Hawk Moth, a villain that utilizes ordinary citizens’ negative emotions to turn them into supervillains. They begin to grow their partnership and dynamic, but being unaware of each other’s identities causes rifts in some relationships. This marks the beginning of their journey.",
    "2": "As Hawk Moth changes his strategies to hunt for the guardian, the villains become more powerful and dangerous. New superheroes, including Rena Rouge, Carapace, and Queen Bee, debut, joining Ladybug and Cat Noir in protecting Paris. Marinette begins training under Master Fu, the Guardian of the Miraculous, learning about the deeper responsibilities and history behind what caused the rift between the Miraculous and modern day society.",
    "3": "The rise of new superheroes and villains continues, with Mayura, the wielder of the broken Peacock Miraculous, becoming an antagonist. Marinette’s story role expands, and she continues her training under Master Fu, preparing herself for the worries and strife ahead. Tensions between Ladybug and Cat Noir grow as their personal lives begin to clash with their superhero duties, even more so from their growing personal relationship even without the masks. By the end of the season, Marinette is faced with a difficult decision about her future, regarding what she should and shouldn’t do and how she manages everything.",
    "4": "Marinette is officially named the new Guardian of the Miraculous after Master Fu’s memory is wiped, taking on the weight of the responsibility. She assigns temporary Miraculous to her friends, hoping to create a more powerful team, but this causes strain in her relationship with Adrien, leading to frequent misunderstandings and conflicts. It also creates more worry as more and more heroes are needed to face the villains. As Ladybug and Cat Noir’s teamwork becomes more fractured, Cat Noir’s feelings of neglect bubble up and ultimately lead to him renouncing his Miraculous in frustration. Meanwhile, Hawk Moth becomes more determined in his quest to steal all the Miraculous, putting the heroes in an even more difficult position.",
    "5": "The stakes are higher than ever as Gabriel Agreste evolves into Monarch, using the stolen Miraculous to create even more powerful supervillains in his obsessive quest to revive his wife, Emilie. He was able to get almost every Miraculous except for two. Marinette, fully embracing her role as the Guardian, must rebuild the superhero team and protect Paris despite overwhelming odds. Eventually, Marinette and Adrien start dating, but their relationship is torn apart by the increasing pressures from Adrien’s father, Gabriel. The season ends with Gabriel’s wish to rewrite the universe, leaving the fate of their world uncertain and setting up a dramatic conclusion to their journey."
  }
  
  box.innerHTML = explanations[season];
}
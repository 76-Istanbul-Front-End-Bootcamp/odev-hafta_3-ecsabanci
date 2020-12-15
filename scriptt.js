class Animal {
    constructor(name,legs,actionText,actionSoundName,url){
      this.name = name;
      this.legs = legs;
      this.actionText = actionText;
      this.actionSoundName = actionSoundName;
      this.url = url;
    }
    
    action() {
      document.getElementById(this.actionSoundName).play();
    }
    
    showImage() {
      
      let p = document.createElement("p");
      p.innerHTML = this.name +"'s picture";
      let body = document.querySelector("body");
      let img = document.createElement("img");
      img.setAttribute("src",this.url);
      body.appendChild(p);
      body.appendChild(img);
      
    }
    
    putInTheDocument() {
      var petsTable = document.getElementById("petsTable");
      var petTR = document.createElement("tr");
    
      var petNameTD = document.createElement("td");
      petNameTD.textContent = this.name;
      petTR.appendChild(petNameTD);
    
      var petLegsTD = document.createElement("td");
      petLegsTD.textContent = this.legs;
      petTR.appendChild(petLegsTD);
    
      var petActionTD = document.createElement("td");
      var petActionTDButton = document.createElement("button");
      petActionTDButton.textContent = this.actionText;
      petActionTD.appendChild(petActionTDButton);
      petTR.appendChild(petActionTD);
      
      petActionTDButton.onclick = this.action.bind(this);
      petsTable.querySelector("tbody").appendChild(petTR)
      
      petNameTD.onclick = this.showImage.bind(this);
    }
    
    
  };
  
  class Cat extends Animal {
    constructor(name,legs,actionText,actionSoundName,url){
      super(name,legs,actionText,actionSoundName,url)
    }
  }
  
  class Monkey extends Animal {
    constructor(name,legs,actionText,actionSoundName,url){
      super(name,legs,actionText,actionSoundName,url)
    }
  }
  
  var milaUrl = "https://www.hillspet.com.tr/content/dam/cp-sites/hills/hills-pet/global/brands/vetessentials/HP_pods_1_VEcat_Kitten.jpg.rendition.678.340.jpg"
  var Mila = new Cat("Mila",4,"Meoow","meow",milaUrl);
  
  Mila.putInTheDocument();
  
  var charlieUrl = "https://ichef.bbci.co.uk/news/976/cpsprodpb/E9DF/production/_96317895_gettyimages-164067218.jpg"
  var Charlie = new Monkey("Charlie",2,"Scream","scream",charlieUrl);
  
  Charlie.putInTheDocument();
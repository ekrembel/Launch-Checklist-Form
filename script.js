window.addEventListener("load", function() {
   
   let userInput = prompt("Where would you like to go? \n\ \n\ Type 0 for Tatooine \n\ Type 1 for Pern \n\ Type 2 for Saturn \n\ Type 3 for Mars \n\ Type 4 for K2-18b \n\ Type 5 for Jupiter \n\ \n\ Good luck!");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {

         document.getElementById("missionTarget").innerHTML = `<b>Mission Destination</b> <br> <ol>
         <li>Name: ${json[userInput].name}</li>
         <li>Diameter: ${json[userInput].diameter}</li>
         <li>Star: ${json[userInput].star}</li>
         <li>Distance from earth: ${json[userInput].distance}</li>
         <li>Number of moons: ${json[userInput].moons}</li>
         </ol>
         <img src="${json[userInput].image}">`;
      });
   });
   let button = document.querySelector("#formSubmit");
   button.addEventListener("click", function() {
      let pilotName = document.getElementById("pilotName").value;
      let copilotName = document.getElementById("copilotName").value;
      let fuelLevel = document.getElementById("fuelLevel").value;
      let cargoMass = document.getElementById("cargoMass").value;

      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      else if (!isNaN(pilotName) || !isNaN(copilotName) || isNaN(fuelLevel) || isNaN(cargoMass)) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }       
      else if (fuelLevel < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} Ready`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName} Ready`;
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journay!";
         document.getElementById("launchStatus").innerHTML = "Shuttle not Ready for Launch";
         document.getElementById("launchStatus").style.color = "red";
         event.preventDefault();
      }
      else if (cargoMass > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} Ready`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName} Ready`;
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to launch!";
         document.getElementById("launchStatus").innerHTML = "Shuttle not Ready for Launch";
         document.getElementById("launchStatus").style.color = "red";
         event.preventDefault();         
      }
      else {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} Ready`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName} Ready`;
         document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
         document.getElementById("launchStatus").style.color = "green";
         event.preventDefault();                    
      }

   });
});

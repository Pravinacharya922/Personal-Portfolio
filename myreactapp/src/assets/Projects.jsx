// assets/Contact.jsx
import React from 'react';

function Projects() {
  const projectTitle = ["CTA Database App (Python, SQL)", "Tic Tac Toe Game (C++)", "Hackatho (React, CSS)", "Fintech App (Python)", "WeatherApp (Java, JavaFX, Maven) ", "ConnectFour (Java, JavaFX, Maven, Socket)"];
  let project1Details = "This is the cta database app which shows the details about the train and bus route around the Chicago area. The program was build using Python and SQL. The SQL was used for datset and python was using for to manage the dataset and print the results from dataset.";
  let project3Details = "  ";
  let project4Details = "  ";
  let project5Details = "  ";
  let project6Details = "  ";

  return (
    <>
      <h3> Include 5 projects and their description and final link to github</h3>
      <ul>
        {projectTitle.map((name, index) => (
        <li key = {index}> {name}</li>
        
        
        
        ))}
        
        
        

      </ul>
      












      <h3>Link to github:</h3>
      <a href="https://github.com/Pravinacharya922">
            <img id="logo" src="src/assets/gitlogo.jpg" alt="GitHub" />
      </a>

    
    
    
    
    
    </>

   
  );
}

export default Projects;

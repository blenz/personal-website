const projects = [
  {
    name: 'TTD Project',
    img: { src: 'img/tdd-calculator.png', height: 200, width: 300 },
    links: ['https://github.com/blenz/TDDCalculator'],
    body:
      'The goal of this project was to use TDD to build a calculator that would accept a string and calculate the sum by parsing out the valid numbers from the string. Each requirement of the project built upon existing requirements so unit tests were essential to ensure existing functionality worked while new features were added. This project was a great example of why having solid unit tests are crucial for building robust software that will scale.',
    tags: ['C#', 'NUnit', 'TDD', 'Unit Testing']
  },
  {
    name: 'Events App (In Development)',
    img: { src: 'img/react-firebase.png', height: 200, width: 400 },
    links: ['https://github.com/blenz/events-app'],
    body:
      'This project uses React, Redux, Firebase, and Google Maps API to offer users a place where they can create, view, comment, and join other events they are interested in. The goal of this project was to increase my skills with React / Redux, CI / CD, and Kubernetes.',
    tags: [
      'React',
      'Redux',
      'Firebase',
      'Google Maps API',
      'Kubernetes',
      'CI/CD',
      'CircleCI'
    ]
  },
  {
    name: 'Dating App',
    img: { src: 'img/angular.png', height: 200, width: 200 },
    links: [
      'https://dating-app.brettlenz.com/',
      'https://github.com/blenz/dating-app'
    ],
    body:
      'This project was developed using AngularJs and .NET Core. I wanted to build a fullstack web application to get more familar with these frameworks and a dating up is. Additionally, I learned how to deploy and maintain a kubernetes cluster and set up CI/CD using CircleCI.',
    tags: ['.NET Core', 'MySQL', 'AngularJs', 'Kubernetes', 'CI/CD', 'CircleCI']
  },
  {
    name: 'Ecommerce Website',
    img: { src: 'img/ecommerce.png', height: 200, width: 270 },
    links: ['https://github.com/blenz/eCommerce-WebApp'],
    body:
      'This project was for my Internet Applications Engineering class. The goal was to design and create an ecommerce site of your choosing using PHP and a MySQL database. The user simulates a purchase by entering their information into a form where it then gets validated and sent to the database.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML / CSS']
  },
  {
    name: 'Missile Defense',
    img: { src: 'img/missile-defense.png', height: 200, width: 350 },
    links: [],
    body:
      "This was my final project for my mobile development class. With the requirements being very broad, I decided to make a game based on Atari's classic game 'Missile Command'. I felt this would be a good challenge for myself while also allowing me to use my skills to implement a complete game. In the game, missiles are headed toward the city and the user must tap the missiles to blow them up in order to save the city.",
    tags: ['Corona SDK', 'Lua']
  },
  {
    name: 'Fabflix',
    img: { src: 'img/movies-logo.jpg', height: 200, width: 180 },
    links: [],
    body:
      'This project was for my Internet Applications Engineering class. The goal was to design and create an ecommerce site of your choosing using PHP and a MySQL database. The user simulates a purchase by entering their information into a form where it then gets validated and sent to the database.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML / CSS']
  },
  {
    name: 'YouTube Downloader',
    img: { src: 'img/YTDL.JPG', height: 200, width: 400 },
    links: ['https://github.com/blenz/YouTube-Downloader'],
    body:
      'This application was built using C# in Visual Studio using a library from Github. The user specifies a download location and provides the URL of the video and the program will then download the video for offline use.',
    tags: ['C#', 'GitHub API']
  },
  {
    name: 'Operating Systems',
    img: { src: 'img/simulation.png', height: 200, width: 400 },
    links: ['https://github.com/blenz/Operating-System-Projects'],
    body:
      'This project was for my operating systems class. For this class, there were three different projects, each focusing on one topic involving operating systems. The topics included a process resource manager, process scheduler, and virtual memory simulator. All of these projects required solid OOP design principles to run successfully.',
    tags: ['Java', 'OOP']
  },
  {
    name: 'Tip Calculator',
    img: { src: 'img/tip-calc.png', height: 200, width: 140 },
    links: [],
    body:
      'This tip calculator app was built using Corona SDK. The calculator allows a user to input the total bill amount and then choose from a preset tip percentage. The correct tip and updated amount will then be displayed.',
    tags: ['Corona SDK', 'Lua']
  }
];

// list the projects
projects.forEach((p, i) => {
  if (i % 2 === 0) $('#projects').append("<div class='row'></div>");

  $('#projects > div.row:last-child').append(
    `<div class="col-sm-12 col-lg-6">
        <h3>${p.name}</h3>
        <img 
          src="${p.img.src}"
          height="${p.img.height}"
          width="${p.img.width}"
        >
        <p class="text-muted">
          ${p.body}
        </p>
        ${p.tags
          .map(t => `<span class="label label-info">${t}</span>`)
          .join('\n')}
          <br/>
          <br/>
        ${p.links.map(link => {
          let isGithub = link.includes('github.com');
          return `<a class='btn btn-${
            isGithub ? 'primary' : 'success'
          }' href='${link}'>${
            isGithub ? 'Github' : 'Deployed'
          }  <i class='glyphicon glyphicon-new-window'></i></a>`;
        })}
      </div>`
  );
});

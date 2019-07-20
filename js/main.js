$('#about-link').click(function(e) {
  e.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $('#about').offset().top
    },
    1000
  );
});

$('#projects-link').click(function(e) {
  e.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $('#projects').offset().top
    },
    1000
  );
});

$('#contact-link').click(function(e) {
  e.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $('#contact').offset().top
    },
    1000
  );
});

// list the projects from projects.json
$.getJSON('js/projects.json', projects => {
  projects.forEach((p, i) => {
    if (i % 2 === 0) $('#projects').append("<div class='row'></div>");

    $('#projects > div.row:last-child').append(
      `<div class="container col-lg-6">
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
           .map(t => `<span class="label label-primary">${t}</span>`)
           .join('\n')}
      </div>`
    );
  });
});

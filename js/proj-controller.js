console.log('Starting up');

$(document).ready(initPage);
$('.send-mail-btn').click(sendMessage);

function initPage() {
  renderProjects()
}

function renderProjects() {
  var strHtml = '';
  var projects = getProjects();

  projects.forEach(function (project) {
    strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${project.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.id}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>`;
  });

  $('.project-container').html(strHtml);
}

function renderModal(id) {
  var project = getProjById(id);
  var date = new Date(project.publishedAt);

  $('.portfolio-modal h2').text(project.name);
  $('.portfolio-modal .item-title').text(project.title);
  $('.portfolio-modal .item-desc').text(project.desc);
  $('.portfolio-modal .date').text(date.toDateString());
  $('.portfolio-modal img').attr('src', `img/portfolio/${project.id}-full.jpg`);
  $('.portfolio-modal a').attr('href', project.url);
}

function sendMessage() {
  var email = $("#form-email").val();
  var subject = $("#form-subject").val();
  var body = $("#form-body").val();

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=danadubrov@hotmail.com&su=${subject}&body=${body}`);

  $("#form-email").val('');
  $("#form-subject").val('');
  $("#form-body").val('');
}
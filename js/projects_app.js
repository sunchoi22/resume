let cardHTML = "";
let elements = [];
$.getJSON("../data/projects_app.json", function (data) {
  $.each(data, function (i, item) {
    cardHTML = `
    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
      <div class="card-body p-0">
          <div class="d-md-flex align-items-center">
              <div class="p-5">
                  <h2 class="fw-bolder">${item.title}</h2>
                  <p>${item.text}</p>
                  <a class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="${item.href}">바로가기</a>
              </div>
              <img class="img-fluid float-right" src="${item.image}"
                  alt="${item.title}">
          </div>
      </div>
  </div>
`;
    elements.push(cardHTML);
  });
  $(".projects-card-body").append(elements);
});
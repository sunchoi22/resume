let cardHTML = "";
let elements = [];
$.getJSON("./data/projects_web.json", function (data) {
  // console.log(data);
  $.each(data, function (i, item) {
    cardHTML = `
    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
    <div class="projects-card-body card-body p-0">
    <a href="${item.href}" target="_blank"><img class="img-fluid" src="${item.src}" alt="${item.title}"></a>
        <div class="d-md-flex align-items-center">
            <div class="p-5">
                <h2 class="fw-bolder h5">${item.title}</h2>
                <p>${item.text}</p>
                <h3 class="fw-bolder h6">개발 기간</h3>
                <p>${item.period}</p>
                <h3 class="fw-bolder h6">개발 인원</h3>
                <p>${item.personnel}</p>
                <h3 class="fw-bolder h6">담당 업무</h3>
                <p>${item.work}</p>
            </div>
            </div>
    </div>
</div>
    `;
    elements.push(cardHTML);
  });
  $(".projects-card-body").append(elements);
});
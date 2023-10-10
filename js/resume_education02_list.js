let ed02cardHTML = "";
let ed02elements = [];
$.getJSON("./data/resume_education02_list.json", function (data) {
  // console.log(data);
  $.each(data, function (i, item) {
    ed02cardHTML = `
    <h4 class="h6 fw-bolder m-0 mb-2">
    <a href="${item.href}" target="_blank">${item.title}</a>
    <a href="${item.href02}" target="_blank">[<i class="bi bi-github"></i> GitHub]</a>
    <a href="${item.href03}" target="_blank">[<i class="bi bi-file-earmark-ppt-fill"></i> PT]</a>
    </h4>
    <p class="mb-2">${item.text}</p>
    <h5 class="h6 fw-bolder m-0">개발 기간</h5>
    <p class="mb-2">${item.date}</p>
    <h5 class="h6 fw-bolder m-0">개발 인원</h5>
    <p class="mb-2">${item.person} &#40;제작 기여도 &#58; ${item.persent}%&#41;</p>
    <h5 class="h6 fw-bolder m-0">담당업무</h5>
    <p class="mb-5">${item.worklist}</p>
    `;
    ed02elements.push(ed02cardHTML);
  });
  $(".resume_education02_list").append(ed02elements);
});
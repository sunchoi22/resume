let cardHTML = "";
let elements = [];
$.getJSON("./data/resume_experience_list.json", function (data) {
  // console.log(data);
  $.each(data, function (i, item) {
    cardHTML = `<h4 class="h6 fw-bolder m-0 mb-2"><a href="${item.href}" target="_blank">${item.title}</a></h4>
    <p class="mb-2">${item.text}</p>
    <h5 class="h6 fw-bolder m-0">개발 기간</h5>
    <p class="mb-2">${item.date}</p>
    <h5 class="h6 fw-bolder m-0">개발 인원</h5>
    <p class="mb-2">${item.person} &#40;제작 기여도 &#58; ${item.persent}%&#41;</p>
    <h5 class="h6 fw-bolder m-0">담당업무</h5>
    <p class="mb-5">${item.worklist}</p>`;
    elements.push(cardHTML);
  });
  $(".resume_experience_list").append(elements);
});
let ed03cardHTML = "";
let ed03elements = [];
$.getJSON("./data/resume_education03_list.json", function (data) {
  // console.log(data);
  $.each(data, function (i, item) {
    ed03cardHTML = `
    <h4 class="h6 fw-bolder m-0 mb-2">
    <a href="${item.href}" target="_blank">${item.title}</a>
    <a href="${item.href02}" target="_blank">[<i class="bi bi-github"></i> GitHub]</a>
    <a href="${item.href03}" target="_blank">[<i class="bi bi-file-earmark-ppt-fill"></i> PT]</a>
    </h4>
    <p class="mb-2">${item.text}</p>
    <h5 class="h6 fw-bolder m-0">개발 기간</h5>
    <p class="mb-2">${item.date}</p>
    <h5 class="h6 fw-bolder m-0">개발 인원</h5>
    <p class="mb-2">${item.person} </p>
    <h5 class="h6 fw-bolder m-0">담당업무 <span class="fw-normal"> - 디자인 및 퍼블리싱 &#40;담당 제작 기여도 &#58; ${item.persent}%&#41;</span></h5>

    <div class="mb-5">
      <a href="${item.href_site01}" target="_blank">${item.page_site01}</a>
      <a href="${item.href_site02}" target="_blank">${item.page_site02}</a>
      <a href="${item.href_site03}" target="_blank">${item.page_site03}</a>
      <a href="${item.href_site04}" target="_blank">${item.page_site04}</a>
      <a href="${item.href_site05}" target="_blank">${item.page_site05}</a>
      <a href="${item.href_site06}" target="_blank">${item.page_site06}</a>
      <a href="${item.href_site07}" target="_blank">${item.page_site07}</a>
      <a href="${item.href_site08}" target="_blank">${item.page_site08}</a>
      <a href="${item.href_site09}" target="_blank">${item.page_site09}</a>
      <a href="${item.href_site10}" target="_blank">${item.page_site10}</a>
      <a href="${item.href_site11}" target="_blank">${item.page_site11}</a>
      <a href="${item.href_site12}" target="_blank">${item.page_site12}</a>
      <a href="${item.href_site13}" target="_blank">${item.page_site13}</a>
    </div>
    `;
    ed03elements.push(ed03cardHTML);
  });
  $(".resume_education03_list").append(ed03elements);
});
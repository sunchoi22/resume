let ed02cardHTML = "";
let ed02elements = [];
$.getJSON("./data/resume_education02_list.json", function (data) {
  // console.log(data);
  $.each(data, function (i, item) {
    ed02cardHTML = `
    <h4 class="h6 fw-bolder m-0 mb-2">
    <a href="${item.href_site}" target="_blank">${item.title}</a>
    <a href="${item.href_github}" target="_blank">${item.icon_open}<i class="${item.bi_github_icon}"></i>${item.Github_text}${item.icon_close}</a>
    <a href="${item.href_ppt}" target="_blank">${item.icon_open02}<i class="${item.bi_ppt_icon}"></i>${item.PT_text}${item.icon_close02}</a>
    <a href="${item.href_design}" target="_blank">${item.icon_open03}<i class="${item.bi_design_icon}"></i>${item.design_text}${item.icon_close03}</a>
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
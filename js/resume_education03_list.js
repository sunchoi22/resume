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
    <h5 class="h6 fw-bolder m-0">담당업무 - 디자인 및 퍼블리싱</h5>
    <p class="m-0">&#40;담당업무 기여도 &#58; ${item.persent}%&#41;</p>
    <a href="${item.href_site01}" target="_blank">${item.page_site01}</a>,
    <a href="${item.href_site02}" target="_blank">${item.page_site02}</a>,
    <a href="${item.href_site03}" target="_blank">${item.page_site03}</a>,
    <p>

강의 상세보기 -
<a href="http://keepcoding.dothome.co.kr/keepcoding/main/product/product_shop_details.php?pid=1"
target="_blank">
일반 강의</a>,
<a href="http://keepcoding.dothome.co.kr/keepcoding/main/product/product_shop_details.php?pid=55"
target="_blank">숏 강의</a><br>
마이페이지 -
<a href="http://keepcoding.dothome.co.kr/keepcoding/main/mypage/myproduct_list.php"
target="_blank">
나의 강의</a>,
<a href="http://keepcoding.dothome.co.kr/keepcoding/main/mypage/mycoupon_list.php"
target="_blank">
나의 쿠폰</a>

    
    `;
    ed03elements.push(ed03cardHTML);
  });
  $(".resume_education03_list").append(ed03elements);
});
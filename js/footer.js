window.addEventListener("load", function () {
  // 하단 패밀리 펼침 기능
  //   목록 열기 버튼
  const openBtn = this.document.querySelector(".footer-link");
  //   목록 닫기버튼
  const closeBtn = this.document.querySelector(".family-close");
  //   보여질 패빌리 목록
  const family = this.document.querySelector(".family");
  //   클릭이벤트
  openBtn.addEventListener("click", function () {
    family.classList.add("active");
    this.classList.add("active");
  });
  closeBtn.addEventListener("click", function () {
    family.classList.remove("active");
    this.classList.remove("active");
  });
});

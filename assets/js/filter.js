document.addEventListener("DOMContentLoaded", () => {
  const tagButtons = document.querySelectorAll(".tag-filter");
  const noteItems = document.querySelectorAll("#home ul li");

  // タグクリックで絞り込み
  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // activeクラス切替
      tagButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedTag = button.dataset.tag.toLowerCase();

      noteItems.forEach((item) => {
        const tags = item.getAttribute("data-tags").toLowerCase().split(",");
        if (selectedTag === "all" || tags.includes(selectedTag)) {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // URLパラメータでタグ指定があれば自動クリック（初期表示制御）
  const urlParams = new URLSearchParams(window.location.search);
  const selectedTagFromUrl = urlParams.get("tag");

  if (selectedTagFromUrl) {
    const targetBtn = Array.from(tagButtons).find(
      (btn) =>
        btn.dataset.tag.toLowerCase() === selectedTagFromUrl.toLowerCase()
    );
    if (targetBtn) {
      targetBtn.click();
      return;
    }
  }
  // 指定がなければ「すべて」を初期選択
  const allBtn = document.querySelector('.tag-filter[data-tag="all"]');
  if (allBtn) allBtn.click();
});

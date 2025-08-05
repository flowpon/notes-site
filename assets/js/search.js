// search.js - このファイルを新規作成してください

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const noteItems = document.querySelectorAll("#home ul li");
  const tagButtons = document.querySelectorAll(".tag-filter");

  if (!searchInput) return;

  // 検索機能
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    noteItems.forEach((item) => {
      const noteTitle = item.querySelector("h2")
        ? item.querySelector("h2").textContent.toLowerCase()
        : "";
      const noteTags = item.getAttribute("data-tags")
        ? item.getAttribute("data-tags").toLowerCase()
        : "";

      // タイトルまたはタグに検索語が含まれているかチェック
      const matchesSearch =
        noteTitle.includes(searchTerm) || noteTags.includes(searchTerm);

      if (searchTerm === "" || matchesSearch) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    });

    // 検索中はタグフィルターを無効化
    if (searchTerm !== "") {
      tagButtons.forEach((btn) => btn.classList.remove("active"));
    }
  });

  // 検索をクリアした時の処理
  searchInput.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      // 「すべて」タグを再選択
      const allBtn = document.querySelector('.tag-filter[data-tag="all"]');
      if (allBtn) allBtn.click();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const noteItems = document.querySelectorAll("#home ul li");
  const tagButtons = document.querySelectorAll(".tag-filter");

  if (!searchInput) return;

  // 検索機能（あいまい検索対応）
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    noteItems.forEach((item) => {
      const noteTitle = item.querySelector("h2")
        ? item.querySelector("h2").textContent.toLowerCase()
        : "";
      const noteTags = item.getAttribute("data-tags")
        ? item.getAttribute("data-tags").toLowerCase()
        : "";

      let matchesSearch = false;

      if (searchTerm === "") {
        matchesSearch = true;
      } else {
        // 複数キーワード検索（スペース区切り）
        const keywords = searchTerm
          .split(/\s+/)
          .filter((word) => word.length > 0);

        matchesSearch = keywords.every((keyword) => {
          // 各キーワードに対してあいまい検索
          return (
            fuzzyMatch(noteTitle, keyword) ||
            fuzzyMatch(noteTags, keyword) ||
            noteTitle.includes(keyword) ||
            noteTags.includes(keyword)
          );
        });
      }

      if (matchesSearch) {
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

  // あいまい検索関数
  function fuzzyMatch(text, pattern) {
    if (!text || !pattern) return false;

    // 文字の順序を保ったまま、間に他の文字が入っても一致とみなす
    let patternIndex = 0;

    for (let i = 0; i < text.length && patternIndex < pattern.length; i++) {
      if (text[i] === pattern[patternIndex]) {
        patternIndex++;
      }
    }

    return patternIndex === pattern.length;
  }

  // 検索をクリアした時の処理
  searchInput.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      // 「すべて」タグを再選択
      const allBtn = document.querySelector('.tag-filter[data-tag="all"]');
      if (allBtn) allBtn.click();
    }
  });
});

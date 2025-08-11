document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".category-link");
  const noteItems = Array.from(document.querySelectorAll(".note-item"));
  const searchInput = document.getElementById("search-input");
  const itemsPerPageSelect = document.getElementById("items-per-page");

  let selectedCategory = "";
  let currentPage = 1;
  let itemsPerPage = parseInt(itemsPerPageSelect.value, 10);

  function filterNotes() {
    const searchQuery = searchInput.value.trim().toLowerCase();
    return noteItems.filter((item) => {
      const matchCategory =
        !selectedCategory || item.dataset.categories.includes(selectedCategory);
      const matchSearch =
        item.dataset.title.includes(searchQuery) ||
        item.dataset.tags.includes(searchQuery) ||
        item.dataset.content.includes(searchQuery);
      return matchCategory && matchSearch;
    });
  }

  function renderNotes() {
    const filtered = filterNotes();
    const totalPages =
      itemsPerPage === -1 ? 1 : Math.ceil(filtered.length / itemsPerPage);

    // ページ番号範囲調整
    if (currentPage > totalPages) currentPage = totalPages || 1;

    noteItems.forEach((item) => (item.style.display = "none"));

    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex =
      itemsPerPage === -1 ? filtered.length : startIndex + itemsPerPage;
    filtered.slice(startIndex, endIndex).forEach((item) => {
      item.style.display = "";
    });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    const pagination = document.getElementById("pagination");
    const paginationNumbers = document.getElementById("pagination-numbers");
    paginationNumbers.innerHTML = "";

    if (totalPages <= 1) {
      pagination.style.display = "none";
      return;
    }

    pagination.style.display = "flex";
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = "pagination-link";
      if (i === currentPage) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentPage = i;
        renderNotes();
      });
      paginationNumbers.appendChild(btn);
    }

    document.getElementById("prev-btn").onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        renderNotes();
      }
    };
    document.getElementById("next-btn").onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderNotes();
      }
    };
  }

  // カテゴリクリック
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      selectedCategory = link.dataset.category;
      currentPage = 1;
      renderNotes();
    });
  });

  // 検索入力
  searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderNotes();
  });

  // 1ページ表示数変更
  itemsPerPageSelect.addEventListener("change", () => {
    itemsPerPage = parseInt(itemsPerPageSelect.value, 10);
    currentPage = 1;
    renderNotes();
  });

  // 初期表示
  renderNotes();
});

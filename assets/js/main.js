document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("back-button");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.history.back();
    });
  }
});
// ====================
// パジネーション機能
// ====================

// NotePaginationクラスをここに追加
class NotePagination {
  /**
   * NotePagination - ノート用ページネーションクラス
   * _notesコレクション用のクライアントサイドページネーション機能
   */
  constructor() {
    this.allNotes = Array.from(document.querySelectorAll(".note-item"));
    this.filteredNotes = [...this.allNotes];
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.searchInput = document.getElementById("search-input");
    this.itemsPerPageSelect = document.getElementById("items-per-page");

    this.initializeElements();
    this.bindEvents();
    this.showPage(1);
  }

  /**
   * DOM要素を初期化
   */
  initializeElements() {
    this.container = document.getElementById("notes-container");
    this.pagination = document.getElementById("pagination");
    this.paginationInfo = document.getElementById("pagination-info");
    this.prevBtn = document.getElementById("prev-btn");
    this.nextBtn = document.getElementById("next-btn");
    this.paginationNumbers = document.getElementById("pagination-numbers");
  }

  /**
   * イベントリスナーをバインド
   */
  bindEvents() {
    // 検索機能
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.filterNotes(e.target.value);
      });
    }

    // 表示件数切り替え
    if (this.itemsPerPageSelect) {
      this.itemsPerPageSelect.addEventListener("change", (e) => {
        this.itemsPerPage = parseInt(e.target.value);
        this.currentPage = 1;
        this.showPage(1);
      });
    }

    // 前のページボタン
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        if (this.currentPage > 1) {
          this.showPage(this.currentPage - 1);
        }
      });
    }

    // 次のページボタン
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        const totalPages = this.getTotalPages();
        if (this.currentPage < totalPages) {
          this.showPage(this.currentPage + 1);
        }
      });
    }
  }

  /**
   * ノートをフィルタリング（検索機能）
   * @param {string} searchTerm - 検索キーワード
   */
  filterNotes(searchTerm) {
    const term = searchTerm.toLowerCase().trim();

    if (term === "") {
      this.filteredNotes = [...this.allNotes];
    } else {
      this.filteredNotes = this.allNotes.filter((note) => {
        const title = note.dataset.title || "";
        const tags = note.dataset.tags || "";
        const content = note.dataset.content || "";

        return (
          title.includes(term) ||
          tags.includes(term) ||
          content.toLowerCase().includes(term)
        );
      });
    }

    this.currentPage = 1;
    this.showPage(1);
  }

  /**
   * 総ページ数を取得
   * @returns {number} 総ページ数
   */
  getTotalPages() {
    if (this.itemsPerPage === -1) return 1;
    return Math.ceil(this.filteredNotes.length / this.itemsPerPage);
  }

  /**
   * 指定されたページを表示
   * @param {number} page - 表示するページ番号
   */
  showPage(page) {
    this.currentPage = page;

    // 全ノートを非表示
    this.allNotes.forEach((note) => {
      note.style.display = "none";
    });

    // 全件表示の場合
    if (this.itemsPerPage === -1) {
      this.filteredNotes.forEach((note) => {
        note.style.display = "block";
      });
      if (this.pagination) {
        this.pagination.style.display = "none";
      }
      this.updatePaginationInfo();
      return;
    }

    // ページネーション計算
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const pageNotes = this.filteredNotes.slice(startIndex, endIndex);

    // 該当ページのノートを表示
    pageNotes.forEach((note) => {
      note.style.display = "block";
    });

    this.updatePagination();
    this.updatePaginationInfo();
  }

  /**
   * ページネーションUIを更新
   */
  updatePagination() {
    const totalPages = this.getTotalPages();

    if (!this.pagination) return;

    if (totalPages <= 1) {
      this.pagination.style.display = "none";
      return;
    }

    this.pagination.style.display = "flex";

    // 前へボタンの状態更新
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentPage === 1;
      this.prevBtn.style.opacity = this.currentPage === 1 ? "0.5" : "1";
    }

    // 次へボタンの状態更新
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentPage === totalPages;
      this.nextBtn.style.opacity =
        this.currentPage === totalPages ? "0.5" : "1";
    }

    // ページ番号の更新
    if (this.paginationNumbers) {
      this.updatePageNumbers(totalPages);
    }
  }

  /**
   * ページ番号ボタンを更新
   * @param {number} totalPages - 総ページ数
   */
  updatePageNumbers(totalPages) {
    this.paginationNumbers.innerHTML = "";

    const maxVisiblePages = 5;
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(maxVisiblePages / 2)
    );
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // 最初のページ
    if (startPage > 1) {
      this.addPageButton(1);
      if (startPage > 2) {
        this.addEllipsis();
      }
    }

    // 中間のページ
    for (let i = startPage; i <= endPage; i++) {
      this.addPageButton(i);
    }

    // 最後のページ
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        this.addEllipsis();
      }
      this.addPageButton(totalPages);
    }
  }

  /**
   * ページボタンを追加
   * @param {number} pageNum - ページ番号
   */
  addPageButton(pageNum) {
    const button = document.createElement("button");
    button.textContent = pageNum;
    button.className = "pagination-number";

    if (pageNum === this.currentPage) {
      button.classList.add("pagination-current");
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      this.showPage(pageNum);
    });

    this.paginationNumbers.appendChild(button);
  }

  /**
   * 省略記号を追加
   */
  addEllipsis() {
    const ellipsis = document.createElement("span");
    ellipsis.textContent = "...";
    ellipsis.className = "pagination-ellipsis";
    this.paginationNumbers.appendChild(ellipsis);
  }

  /**
   * ページネーション情報を更新
   */
  updatePaginationInfo() {
    if (!this.paginationInfo) return;

    const totalNotes = this.filteredNotes.length;

    if (totalNotes === 0) {
      this.paginationInfo.textContent = "該当するノートが見つかりません";
      return;
    }

    if (this.itemsPerPage === -1) {
      this.paginationInfo.textContent = `全${totalNotes}件を表示`;
      return;
    }

    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(this.currentPage * this.itemsPerPage, totalNotes);
    const totalPages = this.getTotalPages();

    this.paginationInfo.textContent = `${totalNotes}件中 ${startIndex}～${endIndex}件を表示 (${this.currentPage}/${totalPages}ページ)`;
  }

  /**
   * ページネーションをリセット
   */
  reset() {
    this.filteredNotes = [...this.allNotes];
    this.currentPage = 1;
    if (this.searchInput) {
      this.searchInput.value = "";
    }
    if (this.itemsPerPageSelect) {
      this.itemsPerPageSelect.value = "5";
    }
    this.itemsPerPage = 5;
    this.showPage(1);
  }

  /**
   * 現在の状態を取得
   * @returns {Object} 現在の状態
   */
  getState() {
    return {
      currentPage: this.currentPage,
      itemsPerPage: this.itemsPerPage,
      totalPages: this.getTotalPages(),
      totalNotes: this.filteredNotes.length,
      searchTerm: this.searchInput ? this.searchInput.value : "",
    };
  }
}

// グローバルスコープでインスタンスを保持
let notePagination;

// ページ読み込み完了後に初期化
document.addEventListener("DOMContentLoaded", () => {
  // DOM要素の存在確認
  const notesContainer = document.getElementById("notes-container");
  const noteItems = document.querySelectorAll(".note-item");

  if (notesContainer && noteItems.length > 0) {
    notePagination = new NotePagination();
  } else {
    console.warn("NotePagination: Required DOM elements not found");
  }
});

// デバッグ用（開発環境でのみ使用）
if (typeof window !== "undefined") {
  window.NotePagination = NotePagination;
}

// 既存の初期化処理と統合
document.addEventListener("DOMContentLoaded", () => {
  // 既存の初期化処理...

  // パジネーション初期化
  const notesContainer = document.getElementById("notes-container");
  const noteItems = document.querySelectorAll(".note-item");

  if (notesContainer && noteItems.length > 0) {
    window.notePagination = new NotePagination();
  }
});

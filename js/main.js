/**
 * At Ima ランディングページ JavaScript
 */
document.addEventListener("DOMContentLoaded", function () {
  // 現在の年を表示
  document.getElementById("current-year").textContent = new Date()
    .getFullYear()
    .toString();

  // 画像の遅延読み込み対応
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    });

    // data-src属性を持つ画像を監視
    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // ヒーローセクションの基本的な設定のみ保持
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    // 必要に応じて他の機能を追加する場合はここに記述
  }

  // レスポンシブ画像の最適化
  function optimizeImages() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      // 画像エラー時のフォールバック
      img.addEventListener("error", function () {
        this.style.display = "none";
        console.warn("画像の読み込みに失敗しました:", this.src);
      });

      // 画像読み込み完了時の処理
      img.addEventListener("load", function () {
        this.style.opacity = "1";
      });
    });
  }

  optimizeImages();

  // モバイルメニュートグル
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");

      // アリア属性の更新（アクセシビリティ向上）
      const isExpanded = this.classList.contains("active");
      this.setAttribute("aria-expanded", isExpanded);
    });
  }

  // スクロール時にヘッダーのスタイルを変更
  let ticking = false;
  function updateHeader() {
    const header = document.querySelector("header");
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });

  // FAQアコーディオン
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;

      if (answer.classList.contains("active")) {
        answer.classList.remove("active");
      } else {
        answer.classList.add("active");
      }
    });
  });

  // ステークホルダータブ切り替え
  const stakeholderTabs = document.querySelectorAll(".stakeholder-tab");
  const stakeholderContents = document.querySelectorAll(".stakeholder-content");

  stakeholderTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 全てのタブを非アクティブにする
      stakeholderTabs.forEach((t) => t.classList.remove("active"));
      // クリックされたタブをアクティブにする
      tab.classList.add("active");

      // 全てのコンテンツを非表示にする
      stakeholderContents.forEach((content) =>
        content.classList.remove("active")
      );

      // クリックされたタブに関連するコンテンツを表示する
      const targetId = tab.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // モバイルメニューが開いていたら閉じる
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          mobileMenuBtn.classList.remove("active");
        }
      }
    });
  });
});

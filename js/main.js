/**
 * At Ima ランディングページ JavaScript
 */
document.addEventListener('DOMContentLoaded', function() {
    // 現在の年を表示
    document.getElementById('current-year').textContent = new Date().getFullYear().toString();
    
    // モバイルメニュートグル
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // スクロール時にヘッダーのスタイルを変更
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        }
    });
    
    // FAQアコーディオン
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
            } else {
                answer.classList.add('active');
            }
        });
    });
    
    // ステークホルダータブ切り替え
    const stakeholderTabs = document.querySelectorAll('.stakeholder-tab');
    const stakeholderContents = document.querySelectorAll('.stakeholder-content');
    
    stakeholderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 全てのタブを非アクティブにする
            stakeholderTabs.forEach(t => t.classList.remove('active'));
            // クリックされたタブをアクティブにする
            tab.classList.add('active');
            
            // 全てのコンテンツを非表示にする
            stakeholderContents.forEach(content => content.classList.remove('active'));
            
            // クリックされたタブに関連するコンテンツを表示する
            const targetId = tab.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // モバイルメニューが開いていたら閉じる
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });
});
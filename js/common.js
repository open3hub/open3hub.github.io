/**
 * Open2Hub 公共模块
 * - 站点配置（修改此处即全站生效）
 * - Header / Footer 公共组件渲染
 * - 公共工具函数：时间、搜索、站点卡片
 */

/* ===== 站点配置 ===== */
var SITE_CONFIG = {
    name: 'Open2Hub',
    fullName: 'Open2Hub - 极简导航',
    tagline: '极简导航',
    copyright: '2026',
    themeColor: '#f2f2f7',
    favicon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧭</text></svg>"
};

/* ===== 公共组件渲染 ===== */

function initCommon() {
    renderBackground();
    renderHeader();
    renderFooter();
    renderBackToTop();
    updateTime();
    setInterval(updateTime, 1000);
    bindGlobalSearch();
}

/**
 * 渲染 iOS 风格背景
 */
function renderBackground() {
    var el = document.getElementById('bgContainer');
    if (!el) return;
    el.innerHTML = '<div class="ios-bg" aria-hidden="true"></div>';
}

/**
 * 渲染置顶按鈕
 */
function renderBackToTop() {
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', '返回顶部');
    btn.innerHTML = '&#8593;';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * 渲染公共 Header
 * - 首页：仅 Logo + 时间（搜索框在 Hero 区域）
 * - 子页面：Logo + 搜索框 + 时间
 */
function renderHeader() {
    var el = document.getElementById('headerContainer');
    if (!el) return;
    var isHome = window.location.pathname.endsWith('index.html')
        || window.location.pathname === '/'
        || window.location.pathname.endsWith('/');

    var searchHtml = '';

    el.innerHTML =
        '<header class="header" role="banner">' +
            '<div class="logo">' +
                '<a href="index.html" title="' + SITE_CONFIG.name + ' 首页">' + SITE_CONFIG.name + '</a>' +
            '</div>' +
            searchHtml +
            '<time class="time-display" id="timeDisplay" aria-label="当前时间"></time>' +
        '</header>';
}

/**
 * 渲染公共 Footer
 */
function renderFooter() {
    var el = document.getElementById('footerContainer');
    if (!el) return;
    el.innerHTML =
        '<footer class="footer" role="contentinfo">' +
            '<p>' +
                '<a href="index.html">' + SITE_CONFIG.name + '</a>' +
                ' &nbsp;·&nbsp; <a href="index.html">首页</a>' +
            '</p>' +
            '<p style="margin-top:8px;">' +
                'Copyright &copy; ' + SITE_CONFIG.copyright + ' ' + SITE_CONFIG.name +
                '. All rights reserved.' +
            '</p>' +
        '</footer>';
}

/* ===== 公共工具函数 ===== */

/**
 * 时钟更新
 */
function updateTime() {
    var el = document.getElementById('timeDisplay');
    if (!el) return;
    var now = new Date();
    el.textContent = now.toLocaleString('zh-CN', {
        month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
    });
}

/**
 * 全局搜索（仅在非首页生效，首页由 main.js 本地搜索处理）
 */
function bindGlobalSearch() {
    // 首页有自己的搜索过滤逻辑，此处仅在子页面绑定 Enter 跳转
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        return;
    }
    var input = document.getElementById('searchInput');
    if (!input) return;
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            var kw = this.value.trim();
            if (kw) {
                window.location.href = 'index.html?search=' + encodeURIComponent(kw);
            }
        }
    });
}

/**
 * 渲染站点卡片（公共版本，首页和详情页推荐均可复用）
 */
function renderSiteCard(site, options) {
    options = options || {};
    var url = siteDetailUrl(site);
    var tagsHtml = '';
    if (!options.hideTags && site.tags && site.tags.length) {
        tagsHtml = '<div class="site-tags">' +
            site.tags.slice(0, 2).map(function(t) {
                return '<span class="site-tag">' + t + '</span>';
            }).join('') +
        '</div>';
    }
    var dataAttrs = options.withDataAttrs
        ? ' data-name="' + site.name + '" data-desc="' + site.desc + '" data-tags="' + (site.tags || []).join(',') + '"'
        : '';
    return '<a class="site-card" href="' + url + '"' + dataAttrs + '>' +
        '<div class="site-icon" style="background:' + site.color + '18;color:' + site.color + ';">' + site.icon + '</div>' +
        '<div class="site-card-info">' +
            '<div class="site-name">' + site.name + '</div>' +
            '<div class="site-desc">' + site.desc + '</div>' +
        '</div>' +
    '</a>';
}

/* ===== 自动初始化公共组件 ===== */
document.addEventListener('DOMContentLoaded', initCommon);

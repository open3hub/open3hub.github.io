/**
 * 首页逻辑 - 分类筛选 + 显示全部网站 + 搜索
 */

var currentFilter = '全部';

function initHome() {
    renderHeroStats();
    renderFilterTabs();
    renderAllSites();
    bindSearch();
    handleSearchParam();
}

/**
 * 渲染 Hero 统计数字
 */
function renderHeroStats() {
    var el = document.getElementById('heroStats');
    if (!el) return;
    var allSites = getAllSites();
    var cats = getCategories();
    el.innerHTML =
        '<div class="hero-stat"><div class="hero-stat-num">' + allSites.length + '</div><div class="hero-stat-label">收录网站</div></div>' +
        '<div class="hero-stat"><div class="hero-stat-num">' + cats.length + '</div><div class="hero-stat-label">网站分类</div></div>' +
        '<div class="hero-stat"><div class="hero-stat-num">100%</div><div class="hero-stat-label">精选推荐</div></div>';
}

/**
 * 渲染分类筛选标签（iOS Segmented Control 风格）
 */
function renderFilterTabs() {
    var container = document.getElementById('filterTabs');
    if (!container) return;

    var categories = ['全部'].concat(getCategories());
    container.innerHTML = categories.map(function(cat) {
        var isActive = cat === currentFilter;
        var catData = cat === '全部' ? null : getCategoryData(cat);
        var count = cat === '全部' ? getAllSites().length : catData.sites.length;
        return '<button class="filter-tab' + (isActive ? ' active' : '') + '" role="tab" aria-selected="' + isActive + '" onclick="switchFilter(\'' + cat + '\')">' +
            cat +
        '</button>';
    }).join('');
}

/**
 * 切换分类筛选
 */
function switchFilter(category) {
    currentFilter = category;
    renderFilterTabs();
    applyFilter();
}

/**
 * 应用筛选（显示/隐藏分类区块）
 */
function applyFilter() {
    var container = document.getElementById('sitesContainer');
    if (!container) return;

    var sections = container.querySelectorAll('.category-section');
    sections.forEach(function(section) {
        var sectionCat = section.dataset.category;
        if (currentFilter === '全部' || sectionCat === currentFilter) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
}

/**
 * 渲染所有分类区块 - 显示全部网站
 */
function renderAllSites() {
    var container = document.getElementById('sitesContainer');
    if (!container) return;

    var html = '';
    var categories = getCategories();

    categories.forEach(function(category) {
        var catData = getCategoryData(category);
        var sites = catData.sites;

        html +=
        '<section class="category-section" data-category="' + category + '" id="section-' + encodeURIComponent(category) + '">' +
            '<div class="category-header">' +
                '<h2 class="category-title">' + category + '</h2>' +
            '</div>' +
            '<div class="sites-grid">' +
                sites.map(function(s) { s.category = category; return renderSiteCardLocal(s); }).join('') +
            '</div>' +
        '</section>';
    });

    container.innerHTML = html;
}

/**
 * 渲染单个网站卡片（使用公共 renderSiteCard，附加搜索数据属性）
 */
function renderSiteCardLocal(site) {
    return renderSiteCard(site, { withDataAttrs: true });
}

/**
 * 处理 URL 搜索参数
 */
function handleSearchParam() {
    var params = new URLSearchParams(window.location.search);
    var q = params.get('search') || params.get('q');
    if (q) {
        var input = document.getElementById('searchInput');
        if (input) {
            input.value = q;
            filterSites(q);
        }
    }
}

/**
 * 绑定搜索事件
 */
function bindSearch() {
    var searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    searchInput.addEventListener('input', function() {
        filterSites(this.value.trim());
    });
}

/**
 * 搜索过滤（同时尊重分类筛选）
 */
function filterSites(keyword) {
    var container = document.getElementById('sitesContainer');
    var noResults = document.getElementById('noResults');
    if (!container) return;

    if (!keyword) {
        container.querySelectorAll('.category-section').forEach(function(s) {
            s.style.display = (currentFilter === '全部' || s.dataset.category === currentFilter) ? '' : 'none';
        });
        container.querySelectorAll('.site-card').forEach(function(c) { c.style.display = ''; });
        if (noResults) noResults.style.display = 'none';
        return;
    }

    var results = searchSites(keyword);
    var matchedNames = {};
    results.forEach(function(r) { matchedNames[r.name] = true; });
    var hasAny = false;

    container.querySelectorAll('.category-section').forEach(function(section) {
        var sectionCat = section.dataset.category;
        var sectionVisible = (currentFilter === '全部' || sectionCat === currentFilter);

        if (!sectionVisible) {
            section.style.display = 'none';
            return;
        }

        var sectionHasMatch = false;
        section.querySelectorAll('.site-card').forEach(function(card) {
            var name = card.dataset.name;
            var match = !!matchedNames[name];
            card.style.display = match ? '' : 'none';
            if (match) sectionHasMatch = true;
        });
        section.style.display = sectionHasMatch ? '' : 'none';
        if (sectionHasMatch) hasAny = true;
    });

    if (noResults) noResults.style.display = hasAny ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', initHome);

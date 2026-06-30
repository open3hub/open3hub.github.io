/**
 * 网站详情页逻辑 - 根据 cat + name 参数渲染单个网站的完整详情
 */

function initSiteDetail() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    const name = params.get('name');

    if (!cat || !name) {
        window.location.href = 'index.html';
        return;
    }

    const site = getSiteByName(cat, name);
    if (!site) {
        window.location.href = 'index.html';
        return;
    }

    // 更新 SEO
    updateSiteSEO(site);

    // 渲染面包屑
    renderSiteBreadcrumb(site);

    // 渲染详情卡片
    renderSiteDetail(site);

    // 渲染相关推荐
    renderRelated(site);
}

/**
 * 更新 SEO meta
 */
function updateSiteSEO(site) {
    document.title = site.name + ' - ' + site.desc + ' | Open2Hub 极简导航';

    var descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
        descMeta.content = site.name + '：' + (site.detail || site.desc) + '。所属分类：' + site.category + '，标签：' + (site.tags || []).join('、') + '。';
    }

    var kwMeta = document.querySelector('meta[name="keywords"]');
    if (kwMeta) {
        kwMeta.content = [site.name, site.category, site.desc, ...(site.tags || [])].join(', ');
    }

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = site.name + ' - ' + site.desc + ' | Open2Hub';

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = site.detail || site.desc;

    // JSON-LD
    var ld = document.getElementById('jsonLd');
    if (ld) ld.remove();
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'jsonLd';
    script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': site.name,
        'description': site.detail || site.desc,
        'url': site.url,
        'inLanguage': 'zh-CN',
        'isPartOf': { '@type': 'WebSite', 'name': 'Open2Hub - 极简导航' },
        'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': location.origin + location.pathname.replace('site.html', 'index.html') },
                { '@type': 'ListItem', 'position': 2, 'name': site.category },
                { '@type': 'ListItem', 'position': 3, 'name': site.name }
            ]
        }
    });
    document.head.appendChild(script);
}

/**
 * 渲染面包屑
 */
function renderSiteBreadcrumb(site) {
    var el = document.getElementById('breadcrumb');
    if (!el) return;
    el.innerHTML =
        '<a href="index.html">首页</a>' +
        '<span class="separator">/</span>' +
        '<span>' + site.category + '</span>' +
        '<span class="separator">/</span>' +
        '<span>' + site.name + '</span>';

    // 更新返回按钮
    var backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.href = 'index.html';
        backBtn.textContent = '返回首页';
    }
}

/**
 * 渲染网站详情卡片
 */
function renderSiteDetail(site) {
    var container = document.getElementById('siteDetailContainer');
    if (!container) return;

    var colorAlpha = site.color + '10';

    container.innerHTML =
    '<article class="site-detail-card" style="--site-color:' + site.color + ';--site-color-alpha:' + colorAlpha + ';">' +
        '<div class="site-detail-top">' +
            '<div class="site-detail-icon" style="background:' + site.color + '18;color:' + site.color + ';">' +
                site.icon +
            '</div>' +
            '<div class="site-detail-meta">' +
                '<h1>' + site.name + '</h1>' +
                '<a class="site-url" href="' + site.url + '" target="_blank" rel="noopener noreferrer">' + site.url + '</a>' +
            '</div>' +
        '</div>' +

        '<div class="site-detail-body">' +
            '<div class="site-detail-tags">' +
                (site.tags || []).map(function(t) {
                    return '<span class="detail-tag">' + t + '</span>';
                }).join('') +
            '</div>' +

            '<div class="site-info-grid">' +
                '<div class="info-item">' +
                    '<div class="info-item-label">分类</div>' +
                    '<div class="info-item-value">' + site.category + '</div>' +
                '</div>' +
                '<div class="info-item">' +
                    '<div class="info-item-label">状态</div>' +
                    '<div class="info-item-value" style="color:#34d399;">可访问</div>' +
                '</div>' +
            '</div>' +

            '<div class="desc-section">' +
                '<h2>网站介绍</h2>' +
                '<p>' + (site.detail || site.desc) + '</p>' +
            '</div>' +

        '</div>' +
    '</article>';
}

/**
 * 渲染同分类推荐
 */
function renderRelated(site) {
    var related = getRelatedSites(site.category, site.name, 6);
    if (!related.length) return;

    var section = document.getElementById('relatedSection');
    var grid = document.getElementById('relatedGrid');
    if (!section || !grid) return;

    section.style.display = '';
    grid.innerHTML = related.map(function(s) {
        s.category = site.category;
        return renderSiteCard(s, { hideTags: true });
    }).join('');
}

document.addEventListener('DOMContentLoaded', initSiteDetail);

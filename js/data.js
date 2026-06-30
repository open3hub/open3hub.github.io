/**
 * 导航站网站数据
 * 每个分类包含：name（分类名）、desc（分类描述）、icon（分类图标）、sites（网站列表）
 * 每个网站包含：name, url, desc, icon, color, tags, detail
 */
const sitesData = {
    "常用": {
        desc: "日常使用频率最高的网站，快速访问常用工具",
        icon: "⭐",
        sites: [
            { name: "Google", url: "https://www.google.com", desc: "全球最大的搜索引擎", icon: "G", color: "#4285F4", tags: ["搜索", "引擎"], detail: "Google 是全球最大的搜索引擎，提供网页搜索、图片搜索、视频搜索等多种搜索服务。" },
            { name: "GitHub", url: "https://github.com", desc: "全球最大的代码托管平台", icon: "GH", color: "#333", tags: ["代码", "开源", "Git"], detail: "GitHub 是全球最大的代码托管和协作开发平台，支持 Git 版本控制，汇聚了数百万开发者。" },
            { name: "YouTube", url: "https://www.youtube.com", desc: "全球最大视频分享平台", icon: "YT", color: "#FF0000", tags: ["视频", "娱乐", "学习"], detail: "YouTube 是全球最大的视频分享平台，用户可以上传、观看和分享各种视频内容。" },
            { name: "知乎", url: "https://www.zhihu.com", desc: "高质量问答社区", icon: "知", color: "#0066FF", tags: ["问答", "知识", "社区"], detail: "知乎是中国最大的知识问答社区，汇聚了各行各业的专业人士分享知识与见解。" },
            { name: "Bilibili", url: "https://www.bilibili.com", desc: "弹幕视频网站", icon: "B", color: "#00A1D6", tags: ["视频", "弹幕", "ACG"], detail: "Bilibili（B站）是中国知名的弹幕视频网站，以 ACG 内容起家，现已发展为综合性视频平台。" },
            { name: "微信读书", url: "https://weread.qq.com", desc: "在线阅读平台", icon: "读", color: "#37C700", tags: ["阅读", "书籍", "微信"], detail: "微信读书是腾讯推出的在线阅读平台，拥有丰富的正版图书资源，支持社交化阅读体验。" }
        ]
    },
    "开发工具": {
        desc: "程序员开发必备工具与平台，提升开发效率",
        icon: "🛠️",
        sites: [
            { name: "VS Code", url: "https://code.visualstudio.com", desc: "微软出品的免费代码编辑器", icon: "VS", color: "#007ACC", tags: ["编辑器", "IDE", "微软"], detail: "Visual Studio Code 是微软出品的免费开源代码编辑器，支持多种编程语言和丰富的插件生态。" },
            { name: "Stack Overflow", url: "https://stackoverflow.com", desc: "全球最大的开发者问答社区", icon: "SO", color: "#F48024", tags: ["问答", "编程", "社区"], detail: "Stack Overflow 是全球最大的程序员问答社区，几乎所有编程问题都能在这里找到答案。" },
            { name: "MDN", url: "https://developer.mozilla.org", desc: "Mozilla Web 开发者文档", icon: "MD", color: "#000", tags: ["文档", "Web", "HTML", "CSS"], detail: "MDN Web Docs 是 Mozilla 维护的 Web 开发权威文档，涵盖 HTML、CSS、JavaScript 等 Web 技术标准。" },
            { name: "CodePen", url: "https://codepen.io", desc: "在线前端代码编辑与分享", icon: "CP", color: "#47CF73", tags: ["在线编辑", "前端", "分享"], detail: "CodePen 是一个在线代码编辑平台，支持 HTML/CSS/JS 实时预览，方便分享和学习前端代码。" },
            { name: "NPM", url: "https://www.npmjs.com", desc: "Node.js 包管理器", icon: "NP", color: "#CB3837", tags: ["Node.js", "包管理", "JavaScript"], detail: "NPM 是全球最大的 JavaScript 包管理器，拥有超过百万的开源包，是 Node.js 生态的核心工具。" },
            { name: "Can I Use", url: "https://caniuse.com", desc: "浏览器兼容性查询工具", icon: "CI", color: "#E45434", tags: ["兼容性", "浏览器", "查询"], detail: "Can I Use 提供前端 Web 技术在各大浏览器中的兼容性数据，帮助开发者了解特性支持情况。" }
        ]
    },
    "设计资源": {
        desc: "设计师必备工具与灵感来源，激发创意灵感",
        icon: "🎨",
        sites: [
            { name: "Dribbble", url: "https://dribbble.com", desc: "全球设计师作品展示平台", icon: "Dr", color: "#EA4C89", tags: ["设计", "作品", "灵感"], detail: "Dribbble 是全球知名的设计师社区平台，展示 UI/UX、插画、品牌等各类设计作品。" },
            { name: "Figma", url: "https://www.figma.com", desc: "在线协作设计工具", icon: "Fi", color: "#F24E1E", tags: ["设计工具", "协作", "UI"], detail: "Figma 是基于浏览器的在线设计工具，支持实时多人协作，是 UI/UX 设计师的首选工具。" },
            { name: "Unsplash", url: "https://unsplash.com", desc: "免费高清图片素材库", icon: "Un", color: "#000", tags: ["图片", "素材", "免费"], detail: "Unsplash 提供大量免费可商用的高清图片，是设计师和内容创作者的常用素材来源。" },
            { name: "Coolors", url: "https://coolors.co", desc: "智能配色方案生成器", icon: "Co", color: "#0066FF", tags: ["配色", "色彩", "工具"], detail: "Coolors 是一个智能配色方案生成工具，可以快速生成和谐的配色组合，支持多种导出格式。" },
            { name: "IconFont", url: "https://www.iconfont.cn", desc: "阿里巴巴矢量图标库", icon: "IC", color: "#E8552A", tags: ["图标", "SVG", "阿里"], detail: "IconFont 是阿里巴巴旗下的矢量图标库，提供海量免费图标，支持 SVG、PNG 等多种格式下载。" },
            { name: "花瓣网", url: "https://huaban.com", desc: "设计灵感收集平台", icon: "花", color: "#FF2E4D", tags: ["灵感", "收集", "设计"], detail: "花瓣网是中国知名的设计灵感收集平台，设计师可以在这里创建画板、采集灵感素材。" }
        ]
    },
    "AI 工具": {
        desc: "人工智能工具与平台，探索 AI 技术前沿",
        icon: "🤖",
        sites: [
            { name: "ChatGPT", url: "https://chat.openai.com", desc: "OpenAI 智能对话助手", icon: "AI", color: "#10A37F", tags: ["AI", "对话", "OpenAI"], detail: "ChatGPT 是 OpenAI 开发的 AI 对话模型，能够进行自然语言对话、写作、编程辅助等多种任务。" },
            { name: "Midjourney", url: "https://www.midjourney.com", desc: "AI 艺术图像生成工具", icon: "MJ", color: "#000", tags: ["AI绘画", "图像", "艺术"], detail: "Midjourney 是一款 AI 图像生成工具，通过文字描述即可生成高质量的艺术图像和插画。" },
            { name: "Hugging Face", url: "https://huggingface.co", desc: "AI 模型开源社区", icon: "HF", color: "#FFD21E", tags: ["模型", "开源", "NLP"], detail: "Hugging Face 是 AI 领域的开源社区平台，提供大量预训练模型、数据集和 AI 应用。" },
            { name: "Perplexity", url: "https://www.perplexity.ai", desc: "AI 驱动的智能搜索引擎", icon: "Px", color: "#20808D", tags: ["搜索", "AI", "问答"], detail: "Perplexity 是 AI 驱动的搜索引擎，能够直接给出带有引用来源的准确答案，革新搜索体验。" },
            { name: "Claude", url: "https://claude.ai", desc: "Anthropic 出品的 AI 助手", icon: "Cl", color: "#CC785C", tags: ["AI", "对话", "Anthropic"], detail: "Claude 是 Anthropic 公司开发的 AI 助手，擅长长文本理解、分析和安全的对话交互。" },
            { name: "Stable Diffusion", url: "https://stability.ai", desc: "开源 AI 图像生成模型", icon: "SD", color: "#A855F7", tags: ["AI绘画", "开源", "图像"], detail: "Stable Diffusion 是开源的 AI 图像生成模型，可以在本地运行，支持高度自定义的图像生成。" }
        ]
    },
    "学习": {
        desc: "在线学习平台与技术社区，持续提升自我",
        icon: "📚",
        sites: [
            { name: "MDN Web Docs", url: "https://developer.mozilla.org", desc: "权威的 Web 技术文档", icon: "MD", color: "#000", tags: ["文档", "Web", "学习"], detail: "MDN Web Docs 提供最权威的 Web 技术文档和教程，是前端开发者必读的参考资料。" },
            { name: "LeetCode", url: "https://leetcode.cn", desc: "算法刷题练习平台", icon: "LC", color: "#FFA116", tags: ["算法", "刷题", "面试"], detail: "LeetCode 是全球知名的算法刷题平台，提供数千道编程题目，是技术面试准备的必备工具。" },
            { name: "Coursera", url: "https://www.coursera.org", desc: "全球知名在线课程平台", icon: "Co", color: "#0056D2", tags: ["课程", "大学", "证书"], detail: "Coursera 与全球顶尖大学合作，提供在线课程、专业证书和学位项目，涵盖各领域。" },
            { name: "freeCodeCamp", url: "https://www.freecodecamp.org", desc: "免费的编程学习平台", icon: "FC", color: "#0A0A23", tags: ["免费", "编程", "证书"], detail: "freeCodeCamp 是完全免费的编程学习平台，通过项目驱动的方式学习 Web 开发和数据科学。" },
            { name: "掘金", url: "https://juejin.cn", desc: "中文技术开发者社区", icon: "掘", color: "#1E80FF", tags: ["技术", "博客", "社区"], detail: "掘金是面向开发者的中文技术社区，提供高质量的技术文章、教程和开发工具分享。" },
            { name: "CSDN", url: "https://www.csdn.net", desc: "中文技术博客平台", icon: "CS", color: "#FC5531", tags: ["博客", "技术", "教程"], detail: "CSDN 是中国最大的技术博客平台，拥有海量的技术文章、教程和开发者资源。" }
        ]
    },
    "社交媒体": {
        desc: "热门社交平台与社区，了解最新资讯动态",
        icon: "💬",
        sites: [
            { name: "Twitter/X", url: "https://x.com", desc: "全球即时信息社交平台", icon: "X", color: "#000", tags: ["社交", "新闻", "国际"], detail: "Twitter（现 X）是全球知名的即时信息平台，用户可以发布短文、图片和视频，是获取实时资讯的重要渠道。" },
            { name: "Reddit", url: "https://www.reddit.com", desc: "全球最大社区论坛", icon: "Re", color: "#FF4500", tags: ["论坛", "社区", "国际"], detail: "Reddit 是全球最大的社区论坛，拥有数以万计的兴趣板块（subreddit），几乎涵盖所有话题。" },
            { name: "微博", url: "https://weibo.com", desc: "中文社交媒体平台", icon: "微", color: "#E6162D", tags: ["社交", "新闻", "中文"], detail: "微博是中国最大的社交媒体平台之一，用户可以发布文字、图片和视频，是获取中文资讯的重要渠道。" },
            { name: "豆瓣", url: "https://www.douban.com", desc: "书影音文化社区", icon: "豆", color: "#00B51D", tags: ["文化", "书评", "影评"], detail: "豆瓣是以书影音为核心的文化社区，用户可以评分和评论书籍、电影、音乐，也有活跃的小组讨论。" },
            { name: "小红书", url: "https://www.xiaohongshu.com", desc: "生活方式分享社区", icon: "红", color: "#FE2C55", tags: ["生活", "种草", "分享"], detail: "小红书是中国知名的生活方式分享社区，用户分享购物、旅行、美食、穿搭等各类生活经验。" },
            { name: "即刻", url: "https://jike.city", desc: "兴趣圈子社交应用", icon: "即", color: "#FFE411", tags: ["兴趣", "社区", "话题"], detail: "即刻是基于兴趣圈子的社交应用，用户可以加入各种主题圈子，发现有趣的内容和志同道合的人。" }
        ]
    }
};

/**
 * 获取所有分类名称
 */
function getCategories() {
    return Object.keys(sitesData);
}

/**
 * 获取指定分类的数据
 */
function getCategoryData(category) {
    return sitesData[category] || null;
}

/**
 * 获取所有网站的扁平数组
 */
function getAllSites() {
    const all = [];
    for (const cat of Object.keys(sitesData)) {
        sitesData[cat].sites.forEach(site => {
            all.push({ ...site, category: cat });
        });
    }
    return all;
}

/**
 * 搜索网站
 */
function searchSites(keyword) {
    if (!keyword) return [];
    const kw = keyword.toLowerCase();
    return getAllSites().filter(site =>
        site.name.toLowerCase().includes(kw) ||
        site.desc.toLowerCase().includes(kw) ||
        (site.tags && site.tags.some(t => t.toLowerCase().includes(kw)))
    );
}

/**
 * 根据分类和名称获取单个网站
 */
function getSiteByName(category, name) {
    const catData = getCategoryData(category);
    if (!catData) return null;
    const site = catData.sites.find(s => s.name === name);
    if (!site) return null;
    return { ...site, category };
}

/**
 * 获取同分类的其他网站（推荐）
 */
function getRelatedSites(category, currentName, count) {
    count = count || 6;
    const catData = getCategoryData(category);
    if (!catData) return [];
    return catData.sites.filter(s => s.name !== currentName).slice(0, count);
}

/**
 * 生成站点详情页 URL
 */
function siteDetailUrl(site) {
    const cat = site.category || '';
    return 'site.html?cat=' + encodeURIComponent(cat) + '&name=' + encodeURIComponent(site.name);
}

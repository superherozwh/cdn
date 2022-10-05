//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/0.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/1.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/2.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/3.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/4.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/5.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/6.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/7.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/8.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/9.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/10.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex = Math.ceil(Math.random() * (backimg.length - 1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg = [
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/0.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/1.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/2.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/3.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/4.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/5.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/6.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/7.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/8.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/9.jpg)",
    "url(http://fastly.jsdelivr.net/gh/superentropy/cdn/img/wallpaper/10.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex = Math.ceil(Math.random() * (bannerimg.length - 1));
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];

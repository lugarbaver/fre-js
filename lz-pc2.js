document.getElementById('jingshi').innerHTML = '温馨提示：卡顿加载，请清理缓存，关闭手机屏幕，刷新网页，重新登录等均为常规现象，请耐心等待';
document.getElementById('pcode').innerHTML = '手机下载请扫码获取';
document.getElementById('n_foot').innerHTML = '<div class="n_copy">版权声明：请勿非法使用储存分享、存储、传播等涉黄内容。</div>&copy; 2025 Alipan';
document.getElementById('rpt').innerHTML = '举报';

var urls = window.location.href + '?<?=$codepost?>';
var qrcode = new QRCode('code', {
    text: urls,
    width: 190,
    height: 190,
    colorDark : '#3f3f3f',
    colorLight : '#ffffff',
    correctLevel : QRCode.CorrectLevel.H
});

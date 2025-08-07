document.getElementById('jingshi').innerHTML = '反诈提示：刷单兼职，冒充公检法，共享手机屏幕，裸聊敲诈，赌博等都是诈骗，请立即举报';
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

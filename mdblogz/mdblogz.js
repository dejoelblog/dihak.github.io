var postperpage=6;
var numshowpage=4;
var upPageWord=" &#9668; ";
var downPageWord=" &#9658; ";
var home_page="/";
var urlactivepage=location.href;
var Script = function() {
    jQuery('.sidebar .sub-menu > a').click(function() {
        var last = jQuery('.sub-menu.open', $('.sidebar'));
        last.removeClass("open");
        jQuery('.arrow', last).removeClass("open");
        jQuery('.collapse', last).slideUp(500);
        var sub = jQuery(this).next();
        if (sub.is(":visible")) {
            jQuery('.arrow', jQuery(this)).removeClass("open");
            jQuery(this).parent().removeClass("open");
            sub.slideUp(500)
        } else {
            jQuery('.arrow', jQuery(this)).addClass("open");
            jQuery(this).parent().addClass("open");
            sub.slideDown(500)
        }
    })
}();
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 I;6 i;6 f;6 n;1f();C 1g(15){6 5=\'\';J=K(N/2);4(J==N-J){N=J*2+1}A=f-J;4(A<1)A=1;d=K(15/j)+1;4(d-1==15/j)d=d-1;D=A+N-1;4(D>d)D=d;5+="<3 7=\'1y\'>1z "+f+\' 1A \'+d+"</3>";6 16=K(f)-1;4(f>1){4(f==2){4(i=="o"){5+=\'<3 7="1B"><a 9="\'+B+\'">\'+O+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="/r/s/\'+n+\'?&c-k=\'+j+\'">\'+O+\'</a></3>\'}}b{4(i=="o"){5+=\'<3 7="g"><a 9="#" v="L(\'+16+\');w x">\'+O+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="#" v="M(\'+16+\');w x">\'+O+\'</a></3>\'}}}4(A>1){4(i=="o"){5+=\'<3 7="g"><a 9="\'+B+\'">1</a></3>\'}b{5+=\'<3 7="g"><a 9="/r/s/\'+n+\'?&c-k=\'+j+\'">1</a></3>\'}}4(A>2){5+=\' ... \'}1h(6 l=A;l<=D;l++){4(f==l){5+=\'<3 7="1C">\'+l+\'</3>\'}b 4(l==1){4(i=="o"){5+=\'<3 7="g"><a 9="\'+B+\'">1</a></3>\'}b{5+=\'<3 7="g"><a 9="/r/s/\'+n+\'?&c-k=\'+j+\'">1</a></3>\'}}b{4(i=="o"){5+=\'<3 7="g"><a 9="#" v="L(\'+l+\');w x">\'+l+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="#" v="M(\'+l+\');w x">\'+l+\'</a></3>\'}}}4(D<d-1){5+=\'...\'}4(D<d){4(i=="o"){5+=\'<3 7="g"><a 9="#" v="L(\'+d+\');w x">\'+d+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="#" v="M(\'+d+\');w x">\'+d+\'</a></3>\'}}6 17=K(f)+1;4(f<d){4(i=="o"){5+=\'<3 7="g"><a 9="#" v="L(\'+17+\');w x">\'+1i+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="#" v="M(\'+17+\');w x">\'+1i+\'</a></3>\'}}6 E=y.1D("E");6 18=y.1E("1F-1G");1h(6 p=0;p<E.P;p++){E[p].1j=5}4(E&&E.P>0){5=\'\'}4(18){18.1j=5}}C 1a(Q){6 R=Q.R;6 1k=K(R.1H$1I.$t,10);1g(1k)}C 1f(){6 h=u;4(h.e("/r/s/")!=-1){4(h.e("?S-c")!=-1){n=h.F(h.e("/r/s/")+14,h.e("?S-c"))}b{n=h.F(h.e("/r/s/")+14,h.e("?&c"))}}4(h.e("?q=")==-1&&h.e(".5")==-1){4(h.e("/r/s/")==-1){i="o";4(u.e("#G=")!=-1){f=u.F(u.e("#G=")+8,u.P)}b{f=1}y.1l("<m T=\\""+B+"U/V/W?c-k=1&X=Y-Z-m&11=1a\\"><\\/m>")}b{i="s";4(h.e("&c-k=")==-1){j=1J}4(u.e("#G=")!=-1){f=u.F(u.e("#G=")+8,u.P)}b{f=1}y.1l(\'<m T="\'+B+\'U/V/W/-/\'+n+\'?X=Y-Z-m&11=1a&c-k=1" ><\\/m>\')}}}C L(H){12=(H-1)*j;I=H;6 13=y.1m(\'1n\')[0];6 z=y.1o(\'m\');z.1p=\'1q/1r\';z.1s("T",B+"U/V/W?1t-1u="+12+"&c-k=1&X=Y-Z-m&11=1b");13.1v(z)}C M(H){12=(H-1)*j;I=H;6 13=y.1m(\'1n\')[0];6 z=y.1o(\'m\');z.1p=\'1q/1r\';z.1s("T",B+"U/V/W/-/"+n+"?1t-1u="+12+"&c-k=1&X=Y-Z-m&11=1b");13.1v(z)}C 1b(Q){1c=Q.R.1K[0];6 1w=1c.1x.$t.F(0,19)+1c.1x.$t.F(1L,1M);6 1d=1N(1w);4(i=="o"){6 1e="/r?S-c="+1d+"&c-k="+j+"#G="+I}b{6 1e="/r/s/"+n+"?S-c="+1d+"&c-k="+j+"#G="+I}1O.9=1e}',62,113,'|||span|if|html|var|class||href||else|max|maksimal|indexOf|nomerhal|showpageNum|thisUrl|jenis|postperpage|results|jj|script|lblname1|page|||search|label||urlactivepage|onclick|return|false|document|newInclude|mulai|home_page|function|akhir|pageArea|substring|PageNo|numberpage|nopage|nomerkiri|parseInt|redirectpage|redirectlabel|numshowpage|upPageWord|length|root|feed|updated|src|feeds|posts|summary|alt|json|in||callback|jsonstart|nBody||banyakdata|prevnomer|nextnomer|blogPager||hitungtotaldata|finddatepost|post|timestamp|alamat|halamanblogger|loophalaman|for|downPageWord|innerHTML|totaldata|write|getElementsByTagName|head|createElement|type|text|javascript|setAttribute|start|index|appendChild|timestamp1|published|showpageOf|Page|of|showpage|showpagePoint|getElementsByName|getElementById|blog|pager|openSearch|totalResults|20|entry|23|29|encodeURIComponent|location'.split('|'),0,{}));
$('.post').each(function() {
    if ($(this).find('.post-label').length) {     
        var cl = $(this).find('.post-label').text();
        $(this).find('.card-title').addClass(cl);
		$(this).find('.card-content').addClass(cl);
    }
});
var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};
function resizeThumb(parentID, size, size2) {
    var parent = document.getElementById(parentID),
        image = parent.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].src = image[i].src.replace(/\/s72\-c/, "/s" + size + "");
        image[i].width = size;
        image[i].height = size2;
    }
}
resizeThumb('PopularPosts1', 100, 70);
resizeThumb('Blog1', 306, 180);

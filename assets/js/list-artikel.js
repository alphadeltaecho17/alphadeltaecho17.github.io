var list=['Trailer Game','index'];
function listArtikel(page){
	for (var i = 0; i < list.length; i++) {
		if(list[i]!=page){
		    var text=list[i].split('.');
		    var h=text[0];
		    if(h.length>20)
		    	h=text[0].substring(0,20)+'...';
		    var html='<li><a href="'+list[i]+'.html'+'"><h3>'+h+'</h3></a></li><hr>';
		    $('#list-artikel').append(html);
    	}
    }
}
<?php
$dir    = '../';
$open=$_GET["page"];
$files = array_diff(scandir($dir), array('..', '.'));
$pages = array();
foreach ($files as $f) {
	$split=explode('.', $f);
	if(count($split)==2){
		if($split[1]=='html'&&$split[0]!=$open)
			$pages[]=$f;
	}
}
echo json_encode($pages);
// 
?>

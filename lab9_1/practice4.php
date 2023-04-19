<?php 
	$size = $_POST['table_size'];
	echo "<table border = 1>";
	for ($i = 0; $i <= $size; $i++){
		echo "<tr>\n";
		for ($j = 0; $j <= $size; $j++){
			if ($i == 0 && $j == 0){
				echo "\t<td></td>";
			}
			else if ($i == 0){
				echo "\t<td>$j</td>";
			}
			else if ($j == 0){
				echo "\t<td>$i</td>";
			}
			else {
				$product = $j * $i;
				echo "\t<td>$product</td>";
			}
		}
		echo "</tr>\n";
	}
	echo "</table>";
?>

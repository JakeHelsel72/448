<?php
$username = $_POST["username"];
$password = $_POST["password"];
$prices = [799, 999, 2099];
$shipping = $_POST["shipping"];
$subtotal = 0;
echo '<link href="storestyle.css" rel="stylesheet" type="text/css">';
echo '<body><table border=" 1" align="center"><tbody>';
echo "<tr align=\"center\"><td colspan=\"4\">Welcome Dear User [$username] with password [$password]</td></tr>";
echo "<tr><td></td><td>Quantity</td><td>Cost Per Item</td><td>Sub Total</td></tr>";
for ($i = 0; $i < 3; $i++){
    $plus = $i+1;
    $quantity = $_POST["item$plus"];
    $subtotal += $prices[$i]*$quantity;
    echo "<tr><td>Item ",$plus,"</td><td>",$quantity,"</td><td style=\"background-color:darkcyan\">$", $prices[$i], ".00</td><td style=\"background-color:darkcyan\">$", $prices[$i]*$quantity ,".00</td></tr>";
}
if ($shipping == "Free seven days"){
    $shipping_price = 0;
} else if ($shipping == "$50.00 overnight") {
    $shipping_price = 50;
} else if ($shipping == "$5.00 three days") {
    $shipping_price = 5;
}
echo '<tr><td>Shipping</td><td colspan="2">',$shipping,'</td><td style="background-color:darkcyan">$',$shipping_price,'.00</td></tr><tr style="background-color:yellow"><td colspan="3">';
$total = $subtotal + $shipping_price;
echo 'Total Cost</td><td>$',$total,'.00</td></tr></tbody></table></body></html>';
?>
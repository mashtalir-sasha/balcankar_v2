<?
	if(isset ($_POST['title'])) {$title=$_POST['title'];}
	if(isset ($_POST['phone'])) {$phonenum=$_POST['phone'];}
	if(isset ($_POST['weight'])) {$weight=$_POST['weight'];}
	if(isset ($_POST['height'])) {$height=$_POST['height'];}
	if(isset ($_POST['price'])) {$price=$_POST['price'];}

	$to = "elhim-kiev@ukr.net";

	$message = "Форма: $title <br>";

	if ( $phonenum || $weight || $height || $price ) {
		$message .= ""
			. ( $phonenum ?" Телефон:  $phonenum <br><br>" : "")
			. ( $weight  ? " Грузоподъемность, т: $weight <br>" : "")
			. ( $height  ? " Высота подъема, м: $height <br>" : "")
			. ( $price  ? " Стоимость, €: $price <br>" : "");
	}

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: no-reply@elhim-service.com.ua"; 

	if (!$title && !$phonenum) {
	} else {
		mail($to,"New lead(elhim-service.com.ua)",$message,$headers);

		// Отправка СМС
		$fulldata = "elhim-service\n$title\n$phonenum";
		function send($host, $port, $login, $password, $phone, $text, $sender = false, $wapurl = false )
		{
		    $fp = fsockopen($host, $port, $errno, $errstr);
		    if (!$fp) {
		        return "errno: $errno \nerrstr: $errstr\n";
		    }
		    fwrite($fp, "GET /messages/v2/send/" .
		        "?phone=" . rawurlencode($phone) .
		        "&text=" . rawurlencode($text) .
		        ($sender ? "&sender=" . rawurlencode($sender) : "") .
		        ($wapurl ? "&wapurl=" . rawurlencode($wapurl) : "") .
		        "  HTTP/1.0\n");
		    fwrite($fp, "Host: " . $host . "\r\n");
		    if ($login != "") {
		        fwrite($fp, "Authorization: Basic " . 
		            base64_encode($login. ":" . $password) . "\n");
		    }
		    fwrite($fp, "\n");
		    $response = "";
		    while(!feof($fp)) {
		        $response .= fread($fp, 1);
		    }
		    fclose($fp);
		    list($other, $responseBody) = explode("\r\n\r\n", $response, 2);
		    return $responseBody;
		}
		send("api.smsfeedback.ru", 80, "mastercar", "mastercar7", 
		          "380671032080", "$fulldata", "Master Kar");
	}
?>
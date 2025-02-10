<?php
if(isset($_GET['imie']) &&
isset($_GET['nazwisko'])){
  echo  $imie =
    ($_GET['imie']);
  echo  $nazwisko =
    ($_GET['nazwisko']);
} else {
  echo  $imie = $nazwisko ="blad";
}
?>
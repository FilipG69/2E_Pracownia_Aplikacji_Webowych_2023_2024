function licz(nr) {
    lmpp = 1000000; 
    a = eval(document.form1.a.value);
    b = eval(document.form1.b.value);
  
    if (nr=="+") wynik = a+b;
    if (nr=="-") wynik = a-b;
    if (nr=="*") wynik = a*b;
    if (nr=="/") wynik = a/b;
    if (nr=="^") wynik = Math.pow(x,y);
  
    document.form1.operacja.value=nr;
    document.form1.wynik.value=Math.round(wynik*lmpp)/lmpp;
  }
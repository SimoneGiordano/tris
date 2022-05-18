var riga
var colonna
var x
var n
var turno
   var i
   var a=[3]
   for(i=0;i<3;i++)  
   a[i]=[3]

  function gioca()
  {  
for(i=0; i<9; i++)
{
document.images[i].src="nothing.gif"
a[i]=-1
turno==true
}
  }


function cliccato(n)
  {  
riga=Math.floor((n)/3)
colonna=n%3
if(turno==true)
{
a[riga][colonna]=0
a[n]=0
document.images[n].src="cerchio.gif"
controlla(0)
}

else
{
a[riga][colonna]=1
a[n]=1
document.images[n].src="x.gif"
controlla(1)
}
turno=!turno    
}


  function controlla(x)
{
    if ((a[0]==0)&&(a[1]==0)&&(a[2]==0))
{
    alert("ha vinto il cerchio")
}

if ((a[3]==0)&&(a[4]==0)&&(a[5]==0))
{
    alert ("ha vinto il cerchio")
}

if ((a[6]==0)&&(a[7]==0)&&(a[8]==0))
{
    alert ("ha vinto il cerchio")
}

if ((a[0]==0)&&(a[3]==0)&&(a[6]==0))
{
    alert ("ha vinto il cerchio")
}

if ((a[1]==0)&&(a[4]==0)&&(a[7]==0))
{
    alert ("ha vinto il cerchio")
}

if ((a[2]==0)&&(a[5]==0)&&(a[8]==0))
{
    alert ("ha vinto il cerchio")
}

if ((a[0]==0)&&(a[4]==0)&&(a[8]==0))
{
    alert ("ha vinto il cerchio")
}

if ((a[2]==0)&&(a[4]==0)&&(a[6]==0))
{
    alert ("ha vinto il cerchio")
}




if ((a[0]==1)&&(a[1]==1)&&(a[2]==1))
{
    alert ("ha vinto la croce")
}


if ((a[3]==1)&&(a[4]==1)&&(a[4]==1))
{
    alert ("ha vinto la croce")
}


if ((a[6]==1)&&(a[7]==1)&&(a[8]==1))
{
    alert ("ha vinto la croce")
}


if ((a[0]==1)&&(a[3]==1)&&(a[6]==1))
{
   alert ("ha vinto la croce")
}

if ((a[1]==1)&&(a[4]==1)&&(a[7]==1))
{
    alert ("ha vinto la croce")
}


if ((a[2]==1)&&(a[5]==1)&&(a[8]==1))
{
    alert ("ha vinto la croce")
}


if ((a[2]==1)&&(a[4]==1)&&(a[8]==1))
{
    alert ("ha vinto la croce")
}

if ((a[2]==1)&&(a[4]==1)&&(a[6]==1))
{
    alert ("ha vinto la croce")
}
}  
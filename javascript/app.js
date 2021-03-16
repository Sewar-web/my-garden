'use strict';

let arr=[];
function Flowers( name , image , season )
{
  this.name=name;
  this.image=image;
  this.season=season;
  this.pic;
}
let arrImg=
[
  'alstroemerias',
  'gardenias',
  'orchids',
  'peonies',
  'roses',
  'sunflowers',
  'tulips',
];

Flowers.prototype.getImage=function()
{
  for( let i=0 ;i<arrImg; i++ )
  {
    this.pic = `./img/${this.name}.jpeg`;
  }
};
let form=document.getElementById( 'form' );
save();
remove();
form.addEventListener( 'submit' , function( event )
{
  event.preventDefault();
  const name=event.target.fname.value;
  const catogry= event.target.image.value;
  const season=event.target.fseason.value;
  let newFlowers= new Flowers( name , catogry , season );
  arr.push( newFlowers );
  save();
  remove();
  render();
  form.reset();

} );

function render()
{
  let unOrder =document.getElementsByTagName ( 'ul' );
  //   let ul=document.createElement( 'ul' );
  //   unOrder.appendChild( ul );
  unOrder.textContent='Image';


  let ul2=document.getElementsByTagName( 'ul' );
  //   unOrder.appendChild( ul2 );
  ul2.textContent='name';

  let ul3=document.getElementsByTagName( 'ul' );
  //   unOrder.appendChild( ul3 );
  ul3.textContent='season';


  for( let t=0 ;t<arr.length ; t++ )
  {
    let li1=document.createElement( 'li' );
    this.unOrder.appendChild( li1 );
    li1.textContent=arr[t].pic;

    let li2=document.createElement( 'li' );
    this.ul2.appendChild( li2 );
    li2.textContent=arr[t].name;

    let li3=document.createElement( 'li' );
    this.ul3.appendChild( li3 );
    li3.textContent=arr[t].season;
  }
}

function save()
{
  let saved=getdata();
  if( arr.length===0 || arr.length===1 )
  {
    for( let i=0 ;i<arr.length; i++ )
    { arr.push( saved[i] );
    }
  }
  localStorage.setItem( 'formFlowes', JSON.stringify( arr ) );

}
function getdata()
{
  let data =localStorage.getItem( 'formFlowes' );
  if( data )
  {
    data=JSON.parse( data );
    return data;
  }
  else
  {
    return [];
  }
}
function remove()
{
  const ul =document.getElementById( 'ul' );
  while( ul.firstChild )
  {
    ul.removeChild( ul.firstChild );
  }
}


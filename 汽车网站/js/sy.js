window.onload=function(){
	var aImg=document.getElementsByClassName('img-responsive');
	var aJpg=document.getElementsByClassName('jpg');
	var arry=[-6,10,-6,10,-6,10,-6,10,-6,10,-6,10,-6,10,-6,10,-6,10,0];
	var num=0;
	for (var i = 0; i < aImg.length; i++) {
		aImg[i].index=i;
		aImg[i].onmousedown=function(){

			var a=this.index;
			clearInterval(aImg[a].timer);//清除定时器
			aImg[a].timer=setInterval(function(){//定时器
				aImg[a].style.left=arry[num]+'px';
				num++;
				if (num>arry.length-1) {
					clearInterval(aImg[a].timer);
					num=0;
				}
			},50);
		}
	}
   //跳转页面加载图片	
	var oDi=document.getElementById('a-lef')
	var aL=document.getElementsByClassName('jpg');
	var aR=document.getElementsByClassName('jpg2');
		for (var i = 0; i < aL.length; i++) {
			aL[i].index=i;
			// console.log(aL.length)
			aL[i].style.left="0"
		}
		for (var j = 0; j < aR.length; j++) {
				aR[j].index=j
				aR[j].style.left='0';
			}

			
			var oA=document.getElementsByClassName('li-a');
				for (var i = 0; i < oA.length; i++) {
					oA[i].index=i;
					oA[i].onmouseover=function(){
						this.style.left="10px"
					}
					oA[i].onmouseout=function(){
						this.style.left="0";
						// console.log(this)
					}
				}
}
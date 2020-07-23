onload = function(){
    $.ajax({
        url:"http://192.168.1.103/w/website/bannerList",
        type:"get",
        success:function(res){
            console.log(res)
        }
    })
}
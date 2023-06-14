var setColor = {
    ModeSetColor:function (text_c,back_c,link_c){
//        document.querySelector('body').style.color = text_c;
//        document.querySelector('body').style.backgroundColor = back_c;
        $('body').css('color', text_c);
        $('body').css('backgroundColor', back_c);
//        var alist = document.querySelectorAll('a');
//            var i = 0;
//            while(i<alist.length){
//                alist[i].style.color = link_c;
//                i = i+1;
//            }
        $('a').css('color',link_c);
    }  
}
// function ModeSetColor(text_c,back_c,link_c){
//     document.querySelector('body').style.color = text_c;
//     document.querySelector('body').style.backgroundColor = back_c;

//     var alist = document.querySelectorAll('a');
//         var i = 0;
//         while(i<alist.length){
//             alist[i].style.color = link_c;
//             i = i+1;
//         }
// }

function modeChange(self){
    var target = document.querySelector('body');
    if( self.value === 'day' ){
        self.value = 'night';
        setColor.ModeSetColor('white','black','white');
        // ModeSetColor('white','black','white');
    }else{
        self.value = 'day';
        setColor.ModeSetColor('black','white','black');
        // ModeSetColor('black','white','black');
    }
}
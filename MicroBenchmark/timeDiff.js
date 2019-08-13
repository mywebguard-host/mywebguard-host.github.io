var timeDiff  =  {
    var d;
    setStartTime:function (){
        d = new Date();
        time  = d.getTime();
    },
    getDiff:function (i){
        d = new Date();
        var rendertime = document.createTextNode('Execution time:'+ 
                        (d.getTime()-time)+ 'ms. Iterations: ' + i);
        document.lastChild.appendChild(rendertime);
    }
}
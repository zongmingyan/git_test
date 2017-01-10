var start = new Date();
setTimeout(function () {
    console.log(new Date()-start);
}, 500);
while(new Date()-start<=100){};
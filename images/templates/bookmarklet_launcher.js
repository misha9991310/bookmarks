(function(){
    if (window.myBookmarklet !== undefined){
        myBookmarklet();
    }
    else {
        document.body.appendChild(
            document.createElement('script')
        ).src='https://9325-31-173-241-47.ngrok-free.app/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
})();
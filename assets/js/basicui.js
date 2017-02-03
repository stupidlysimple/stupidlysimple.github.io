function BasicUI () {
    this.show = function (selector) {
        var selector = $(selector);
        if(selector.parent().attr('data-active') == 'true'){
            selector.hide();
            selector.parent().removeClass('tab-active');
            selector.parent().attr('data-active', false);
        }else{
            selector.show();
            selector.parent().addClass('tab-active');
            selector.parent().attr('data-active', true);
        }
    }
}

BasicUI = new BasicUI;
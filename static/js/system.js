function alignVertical(item, reference) {
    var item_height = parseInt(item.css("height").replace("px", ""));
    var reference_height = parseInt(reference.css("height").replace("px", ""));
    item.css("margin-top", (reference_height - item_height) / 2);
}
function initYueButton(){
    var yue_img = $("#yue-img");
    var body = $("body");
    var footer = $("footer");
    var body_width = parseInt(body.css("width").replace("px", ""));
    var yue_width = parseInt(yue_img.css("width").replace("px", ""));
    var footer_height = parseInt(footer.css("height").replace("px", ""));
    yue_img.css("left",(body_width-yue_width)/2);
    yue_img.css("bottom",footer_height-(yue_width/2));
    body.css("margin-bottom",100);
}
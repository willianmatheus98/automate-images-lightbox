//AUTOMATE IMAGES
function automate_images(folder, archive, limit){
    var content = $('#content');
    for (var i = 1; i <= limit; i++) {

    //CREATION OF ELEMENTS
    var div = $("<div></div>");
    var figure = $("<figure></figure>");
    var a = $("<a></a>"); 
    var img = $("<img></img>");
    var href = 'img/'+folder+'/'+archive+' ('+ i +').jpg'; // OR PNG

    //ATTRIBUITION OF CLASS
    div.addClass('col-md-4 col-sm-6 col-lg-3');
    figure.addClass('thumbnail');
    a.addClass('example-image-link');
    img.addClass('img-responsive');

    //ATTRIBUITION OF ATTRIBUTES
    a.attr('href', href);
    a.attr('data-lightbox', 'example-1');
    img.attr('alt', 'galery');
    img.attr('src', href);

    //APPEND ON PAGE
    a.append(img);
    figure.append(a);
    div.append(figure);
    content.append(div);
}
}
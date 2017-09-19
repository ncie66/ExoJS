Date.prototype.formatFR = function(){
        return this.getDate() + "/" + ( this.getMonth() + 1 ) + "/" + this.getFullYear();
}

var app = new App();
app.reinit();

app.$date_fin.change(function(){

    var dateSelectedStart = app.$date_debut.datepicker( "getDate" );
    var dateSelectedEnd = app.$date_fin.datepicker( "getDate" );
    // console.log( dateSelectedStart, dateSelectedEnd );

});

app.$add.click(".close", function(){

        app.$form.slideDown(500);

});

app.$form.submit(function( event ){

event.preventDefault(); // Empeche le rechargement

        var title =app.$title.val();
        var date1 = app.$date_debut.datepicker("getDate");
        var date2 = app.$date_fin.datepicker("getDate");
        var description = app.$description.val();

        var date = new Date();
        
        var rappel = new Rappel( title, date, date1, date2, description);
        rappel.display();
        app.addRappel( rappel );

        app.reinit();

});

window.onbeforeunload = function(){ 
app.saveRappel();
}

$(document).on("click", ".close", function(){

        var index = $(".close").index($(this) ); 
        app.removeRappel( index );

});
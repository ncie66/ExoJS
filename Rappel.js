class Rappel{

        constructor( titre, date, date_debut, date_fin, description){
            this.title = titre;
            this.date = date;
            this.date1 = date_debut;
            this.date2 = date_fin;
            this.description = description;
            this.$dom = null;
        }

        display(){
            var div = "<div class='rappel-it' id='div'>"
            div += '<h2><label><input type="text" placeholder="Titre" id="titre" value="' + this.title + '" >   <label></h2>';
            div += '<label><input id="date" type="text" placeholder="date début de rappel" value="' + 'Rappel créer le ' + this.date.formatFR() + '" >  <label><br><br>';
            div += '<label><input id="date_debut" type="text" placeholder="date début de rappel" value="' + this.date1.formatFR() + '" >  <label>';
            div += '<label><input id="date_fin" type="text" placeholder="date fin de rappel" value="' + this.date2.formatFR() + '" >  </label><br><br>';
            div += '<label><textarea id="description" type="text" placeholder="description" rows="7" cols="41">'+ this.description +  '</textarea></label><br><br>';
            div += '</form>';
            div += "<div class='close'>X </div>";
            div += "<div>";
            this.$dom = $(div); 
            $("body").append(this.$dom);
        }

        destroy(){
            this.$dom.remove();
        }

}
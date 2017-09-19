class App{

    constructor(){

        this.$form = $("form");
        this.$title = $("#title");
        this.$add = $("#add");
        this.$content = $("#content");  
        this.$date_debut = $("#date_debut");
        this.$date_fin = $("#date_fin");
        this.$description = $("#description");

        this.rappels = [];

        // this.readRappel();
        // this.displayRappels();
        this.reinit();
        this.datepicker();
        this.readRappels();
        this.eventRappel();

    }
    reinit(){
        this.$form.slideUp(0);
        this.$title.val("");
        this.$content.val("");
    }

    datepicker(){

        var ordreDate = {

            dayNames : [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
            dayNamesMin : [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
            monthNames : [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre" ],
            monthNamesShort : [ "Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec" ],
            firstDay : 1,
            dateFormat : "dd/mm/yy",
            minDate : new Date (2017, 8, 18),
            maxDate : new Date (2019, 1, 0)

        };

        this.$date_debut.datepicker( ordreDate );
        this.$date_fin.datepicker( ordreDate );
    }

    addRappel( rappel ){
        this.rappels.push( rappel );
    }

    displayRappels(){

        for( var rappel of this.rappels ){
            rappel.display(); 

        }
    }

    saveRappel(){
       var rappelsString = JSON.stringify( this.rappels );
       localStorage.setItem("rappels", rappelsString );
    }

    removeRappel(index){
        var rappel = this.rappels[index];
        rappel.destroy();
        this.rappels.splice(index, 1);

    }

    readRappels(){
        var rappelsString = localStorage.getItem("rappels");

        if(rappelsString == null){
            return;
        }

        var arrayRappels = JSON.parse(rappelsString)
        for(var rappelObjet of arrayRappels){
            var title = rappelObjet.title
            var date = new Date(rappelObjet.date)
            var date1 = new Date(rappelObjet.date1)
            var date2 = new Date(rappelObjet.date2)
            var description = rappelObjet.description
            var rappel = new Rappel (title, date, date1, date2, description )
            rappel.display()
            this.addRappel( rappel )
        }

    }

    eventRappel(){
        var date1 = new Date();
        var today = date1.getTime()

        for( var rappel of this.rappels){
            if( rappel.date1.toLocaleDateString() == date1.toLocaleDateString() ){
                document.getElementById("div").style.backgroundColor="red";
                alert("Rappel aujourd\'hui : " + rappel.title)
            }
            
            if(rappel.date1.getTime() > (today + 172800000) && rappel.date1.getTime() < (today + 259200000)){
                alert("N\'oubliez pas " +rappel.title + ' dans 3 jours')

            }
        }
    }
}
 
    $( function() {
     $( "#draggable1" ).draggable({ scroll: true });
    $( "#draggable2" ).draggable({ scroll: true, scrollSensitivity: 100 });
    $( "#draggable3" ).draggable({ scroll: true, scrollSpeed: 100 });
    } );
     // dropable
     $( function() {
     $( "#draggable, #draggable-nonvalid" ).draggable();
     $( "#droppable" ).droppable({
      accept: "#draggable",
      classes: {
         "ui-droppable-active": "ui-state-active",
         "ui-droppable-hover": "ui-state-hover"
       },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
           .find( "p" )
            .html( "Dropped!" );
       }
     });
   });
     // dropable
// // // resizable
       $( function() {
       $( "#resizable" ).resizable({
        containment: "#container"
   });
  } );
// resizable
// // // selectable
       $( function() {
        $( "#selectable" ).selectable();
   } );
// // // selectable
// // // sortable
     $( function() {
      $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
   });
// // // sortable
// //    // accordion
     $( function() {
     $( "#accordion" ).accordion();
   } );
     // accordion

// Autocomplete_default
     $( function() {
  
               var availableTags = [

                "ActionScript",
       
               "AppleScript",
      
                    "Asp",
      
                   "BASIC",
      
                      "C",
                  "Clojure",
                   "COBOL",
                   "ColdFusion",
                  "Erlang",
                   "Fortran",
                  "Groovy",
                  "Haskell",
                 "Java",
                  "JavaScript",
                  
     ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
   });
       
// // // Autocomplete_default
// // // button
   $( function() {
     $( ".widget input[type=submit], .widget a, .widget button" ).button();
     $( "button, input, a" ).click( function( event ) {
       event.preventDefault();
     });
  });
// // // button
// // // checkradiobox
        $( function() {
          $( "input" ).checkboxradio();
          $( "fieldset" ).controlgroup();
  } );
// checkradiobox
// controlgroup
    $( function() {
    var page = $( "#page" );
     var basicControls = [ "#print", "#bold", "#italic", "#undo", "#redo" ];
     var valueControls = [ "#fontsize", "#forecolor", "#hilitecolor", "#backcolor", "fontname" ];
 
     $( "#print" ).button({
      "icon": "ui-icon-print",
      "showLabel": false
    });
     $( "#redo" ).button({
      "icon": "ui-icon-arrowreturnthick-1-e",
      "showLabel": false
     });
     $( "#undo" ).button({
       "icon": "ui-icon-arrowreturnthick-1-w",
       "showLabel": false
    });
 
    $( ".toolbar" ).controlgroup();
   $( "#zoom" ).on( "selectmenuchange", function() {
       page.css({ "zoom": $( this ).val() });
     })
     $( basicControls.concat( valueControls ).join( ", " ) ).on( "click change selectmenuchange",
       function() {
         document.execCommand(
          this.id,
          false,
           $( this ).val()
         );
       } );
    $( "form" ).on( "submit", function( event ) {
      event.preventDefault();
     });
   } );
// controlgroup
// datepicker
    $( function() {
    $( "#date" ).datepicker();
  });
// datepicker
// dialog
   $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  });
  // dialog
  // menu start
    $( function() {
    $( "#menu" ).menu();
  } );
   // menu end
     $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );

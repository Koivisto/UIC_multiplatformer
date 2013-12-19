var value;

$( "input" )
  .keyup(function() {
    value = $( textarea ).val();
    alert(value);
  })
  .keyup();
};
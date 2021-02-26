$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devouredBurger = $(this).data("id");
  
      var burgerUpdate = {
        devoured: devouredBurger
      };

      console.log(id);
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerUpdate
      }).then(
        function() {
          console.log("Burger Eaten");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
      };
  
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger");
          location.reload();
        }
      );
    });
  });
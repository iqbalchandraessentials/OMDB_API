function searchMovies() {
  $("#movie-list").html("");

  $.ajax({
    url: "http://www.omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "7255f1ed",
      s: $("#search-input").val(),
    },
    success: function (res) {
      console.log(res);
      if (res.Response == "True") {
        let movies = res.Search;
        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `
          <div class="container">
          <div class="col-12">
          <div class="row">

            <div class="col-sm-6 col-lg-4 mt-3">
            <div class="card mb-5 " style="width: 18rem;">
            <img src="` +
              data.Poster +
              `" class="card-img-top" alt="...">
            <div class="card-body">
                      <h5 class="card-title">` +
              data.Title +
              `</h5>
                      
              <h6 class="card-subtitle mb-2 text-muted>
              <span class="type">` +
              data.Type +
              `</span>
                      <span class="year">` +
              data.Year +
              `</span>
                </h6>

                <a href="" class="see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` +
              data.imdbID +
              `">View Details</a>
            </div>
            </div>
            </div>

          </div>
          </div>
          </div>
                
                    `
          );
        });

        $("#search-input").val("");
      } else {
        $("#movie-list").html(
          `
                <div class="col">
                <h2 class="text-center">` +
            res.Error +
            ` </h2>
                </div>
                `
        );
      }
    },
  });
}

$("#search-button").on("click", function () {
  searchMovies();
});

$("#search-input").on("keyup", function (e) {
  if (e.keyCode === 13) {
    searchMovies();
  }
});

$("#movie-list").on("click", ".see-detail", function () {
  // console.log($(this).data('id'));
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "7255f1ed",
      i: $(this).data("id"),
    },
    success: function (res) {
      if (res.Response === "True") {
        $(".modal-body").html(
          `
                <div class="container-fluid">
                <div class="row">
                <div class="col-md-4">
                <img src="` +
            res.Poster +
            `" class="img-fluid">                
                </div>
                <div class="col-md-8">
                <ul class="list-group">
                <li class="list-group-item"><b>` +
            res.Title +
            `</b></li>
                <li class="list-group-item"><b>Released : </b>` +
            res.Released +
            `</li>
                <li class="list-group-item"><b>Director : </b>` +
            res.Director +
            `</li>
                <li class="list-group-item"><b>Genre : </b>` +
            res.Genre +
            `</li>
                <li class="list-group-item"><b>Country : </b>` +
            res.Country +
            `</li>
              </ul>
              </div>
              
              <p class="text-muted mt-2">
              ` +
            res.Plot +
            `
              </p>


                </div>
                `
        );
      }
    },
  });
});

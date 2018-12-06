//susan added some code here just to be able to test the navbar link to this page; the javascript may need to be updated

$("#find-animal").on("click", (load()) {
  event.preventDefault()
}

const animal = $("#animal-input").val();
const queryURL = "https://www.pixabay.com/api/animals?q=" + type +
  "&apikey=10803476-df1ba506200da6c7fb26617df";

$.ajax({
  url:
    "https://www.pixabay.com/api/animals?q=" + type +
    "&apikey=10803476-df1ba506200da6c7fb26617df",

  method: "GET"
}).then(function (response) {
  $("display").empty();

  for (var i = 0; i <
    response.Search.length; i++) {

   const animal = $("").text(response.Search[i].Animal);
   const myNewImage = $("img srce='../assets/animalpics/.. " + response);

    $("display").append(animal);
    $("display").append(myNewImage);

    $.ajax({
      type: "POST",
      url: "https://www.pixabay.com/api/animals?q=" + type +
        "&apikey=10803476-df1ba506200da6c7fb26617df",
      data: data,
      success: success,
      dataType: dataType
    })}});
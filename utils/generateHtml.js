//called to get specific info
function cards (data){
    if (data.role == 'Manager'){
        return 'office :#'+data.office
    }
    else if (data.role == 'Engineer'){
        return '<p> Github:<a href="https://github.com/'+data.github+'" target="_blank">'+data.github+'</a></p>'
    }
    else if (data.role == 'Intern'){
        return 'School of Attendance: '+ data.school
    }
}
//called to get the teams info
function count (data){
    var file = ``;
    for (var i = 0; i < data.length; i++){
          file = file + `<div id="" class = "col-sm">
          <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">
            <h2> ${data[i].name} </h2>
            <h4> ${data[i].role} </h4>
          
            </div>
            <div class="card-body">
              <h5 class="card-title">ID:${data[i].id} </h5>
              <p class="card-text">email:<a href="mailto:${data[i].email} "target="_blank"> ${data[i].email}</a> </p>
              <p"card-text"> ${cards(data[i])}</p>
            </div>
          </div>
          </div>`;
    }
    return file
}






function generateHtml(data){
return `
<!DOCTYPE html>
<html class="bg-secondary" lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
</head>
<body>
<header class = "bg-dark text-light" >
<h1>Employee Lookup
<i class="fas fa-users"></i>
</h1>

</header>

<div  id="container" class=" bg-secondary"> 
<div id="row" class="row">

${count(data)}
</div>

</div>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="./utils/generateHtml.js"></script>
</body>
</html>
`
}

module.exports = generateHtml;

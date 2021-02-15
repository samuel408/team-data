function generateHtml(data){
return `
<!DOCTYPE html>
<html lang="en">
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
</head>
<body>

<h1>This is a ${data[0].name} </h1>
<p>This is a paragraph.</p>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="./index.js"></script>
</body>
</html>
`
}

module.exports = generateHtml;

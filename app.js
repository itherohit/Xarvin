const express = require("express");
const ejs = require("ejs");
const helmet = require("helmet");
const { urlencoded } = require("body-parser");
const products = require("./products.json");

const app = express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(helmet());
app.use(express.json());
app.use(urlencoded({ extended: true}));

app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "script-src": ["'self'","fontawesome.com","*","code.jquery.com","unpkg.com", "'unsafe-inline'"],
        "img-src": ["'self'","drive.google.com", "*"]
      },
    })
  );

app.get("/", function(req, res) {
    res.render("index",{products: products});
})

app.get("/products/:id", function(req, res) {
    var product;
    for(var i=0;i<products.length;i++){
        if(req.params.id == products[i].id){
            product = products[i];
            break;
        }
    }
    res.render("product", {product: product});
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is Running!");
});
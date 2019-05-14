class App
{
    public Log(){
        var element = document.getElementById("app");
        if(element)
        {
            element.innerText = "Hello Webpack Starter";
        }
    }
};

var app = new App();
app.Log();
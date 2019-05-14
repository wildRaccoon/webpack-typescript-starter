import { Configuration } from "webpack";
import { join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export = function(args:any): Configuration {

    return {
        target: "web",
        devtool:"source-map",
        mode: "development",

        entry: {
            app:[
                "./src/index.ts"
            ]
        },

        module:{
            rules: [
                {
                  include : join(__dirname,"./src"),
                  test: /\.tsx?$/,
                  use: 'ts-loader',
                  exclude: /node_modules/
                }
            ]
        },

        plugins:[
            new HtmlWebpackPlugin(
                {
                    inject:"body",
                    template: join(__dirname, "./src/index.html")
                }
            )
        ],


        output:{
            path: join(__dirname,"./dist"),
            filename:"[name].js"                        
        },

        devServer:{
            port:8080
        }
    };

}
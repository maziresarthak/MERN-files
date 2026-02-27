// Again piyush garg's node js playlist is very good to understand about http, fs....
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000; // There are many ports in computer approx above 65000, we can use any port for now doing same as video
// Make sure to use the port which is not used by the computer

// Now piyush has covered goood about httpbut still http module helps to make sure that we are listeneing to some requests and probably acting as a server aswell
// http tells how to communicate with the server, it just tells the rules to be followed to communicate with the server
// This create server always listen on the port for some of the incoming traffic. Now the image we have in the folder which is basic wroking/structure of ngnix, now for that port in image we can actually create a server, bind that port that always and always as soon ad the file is running is listening to this port
const server = http.createServer((req, res) => {
  // So as we saw piyush video on url, slash(/) bascially is the rootpath/home path so basically the url has protocol, domain and after domain slash(/) is the path, so we want when user what we want to do is now when user only uses / we want to redirect him to index.html which is home page/ root page for this porjct, and if user provides proper path after slash(/) like /about.html then he will be redirected to ofc that page
  // req.url === '/' => 'index.html' This is not the correct syntax this is just vague code but yeah what we want is that if request url is equal to / then redirect me to index.html
  // First we need to find the path of index.html which can be done by path.join()
  const filePath = path.join(
    __dirname,
    // req.url === "/" ? "index.html" : "req.url", //Actually req.url should not be under double quoter ofc its not a string we want to redirect the user to the requested url
    req.url === "/" ? "index.html" : req.url,
  );
  // console.log(filePath); This log was just to debug the code to know the exact path bcoz we wrote req.url in double qoutes so yeah let me check the file path thats why we used it

  // THe whole idea behind the join method is to get an absolute path of wherever the files are and __dirname is basically current directory
  // So __dirname will give me the current directory and yeah the '? :' is also a ternary operator this is nothing just if else only just in one line its like ? is if(true) part and : is else(false) let me show you
  `
  if(condition) {
  }else {
  }

  condition ?{
  }: {
  }
  So yeah both are like same like I just want to explain that ? : are if else just in one line
  `;
  // SO bacsically if its / I will serve you index.html and in all other cases I will server you the request path and requested url.

  // Its also a good practise to get the extension in loewercase as sometime people write html in uppercase
  // So yeah its understanble by the defination of extname : Return the extension of the path, from the last '.' to end of string in the last portion of the path
  const extName = String(path.extname(filePath)).toLowerCase(); // We also convert it to string befoe lowercase bcoz sometimes the slasehse provide issues so just for safety purpose

  // Now this is totally toally optional I can allow what type of file type I am supporting
  // mimeTypes is nothing but what types of file I am supporting like js,html,css,png,etc.
  const mimeTypes = {
    // I have to provie the value for all the extensions , automatically server cannot support every file, we have to explicitly mention it and then the nodejs and libuv have to support that
    // Sometimes browser doesn't support json file now we know why
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
  };
  // if you have confusion in what text/html really means go thorughthi chatgpt chat https://chatgpt.com/share/699f2d72-e5e4-8004-9596-6c14e56466f0

  // Now we have to define contenType which is supported, so basically the contentType can be mimeTypes[extName] like the extention type(extName) whatevrer you are looking for  is inside the mimeTypes object and if it is supported then I will return that OR if we have not mentioned the contetnType in mimetypes then browser knows that this contentType is not familiar and its unkwon to me thus the browserusucally downloads that file. Application mean normal random application data, octet means group of 8bits ie random bytes and stream means continous flow of these random bytes, basically in all it means here is a flow of raw byte which I don't know thus it usually downloads it instead of opening it
  // Refer chatgpt and claude for best understanding of this concept : https://chatgpt.com/share/699f2d72-e5e4-8004-9596-6c14e56466f0 and https://claude.ai/share/a1cfbf98-c0d5-4b09-90e6-81c58eb2ed74
  const contentType = mimeTypes[extName] || "application/octet-stream";

  // Now up until now we have grabbed everything but we haven't served anything yet
  // So first now we read the files
  fs.readFile(filePath, (err, content) => {
    // First I wrote the false part and then true so yeah first else part then if part
    if (err) {
      // ENOENT code error in simple terms is file / dir not found error refer this if you want : https://stackoverflow.com/questions/19902828/why-does-enoent-mean-no-such-file-or-directory
      if (err.code === "ENOENT") {
        // Btw its possible to customize alll error codes like 500 .. etc but for now only this
        res.writeHead(404, { "Content-Type": "text/html" }); // Here I can send basic text also but yeah /html is also fine
        res.end("404 : FILE NOT FOUND BROOOO");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType }); // As per the dia and hitesh, head is like meta data  kind of info like status code, what type of datatype you are containing, is it json file? is it html file?, etc that whole particular info is actually in your head and then the body contains the content
      // To know which status code for what it is generalised click here to look at it : https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
      // And the second param ofc whats the content, it knows what type of content is coming either it is from our mimeTypes list OR is it going to be application/octet-stream(generic binary file) so basically this helps the user to actually evaluate that whats comming in and ik what type of data to expect there, yeah as we discusses head its just kind off meta data. So we are done with head part now the body one
      res.end(content, "utf-8"); // We use end bcox we need to end the connection after that, so end connection with content, and utf-8 is the encoding type that I am using, we can use utf-16le too which suports all these japneese and chinese, eng is utf-8 more than enough
    }
  });
}); // So 2 parameters request and response, so any req coming up will be binded to the req
// JS actually is not capable of listening the http event, this whole functionality of server is dependent on libuv and libuv is truely responsible for binding all that requessts and gives an object of requests and we can do whatever with that

// So now this listen method takes two parameter one is the port and calll back function that what shoul I do with this port
server.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
  // So here my sever is created and its listening but we didn't mention what should it do once its listening. So to work on the functionality what we want to do we create a callback inside http.createServer(() => {}) on line 13
});

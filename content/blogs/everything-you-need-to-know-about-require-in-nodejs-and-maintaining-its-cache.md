---
title: "Everything you need to know about \"require\" in NodeJS and maintaining it’s cache."
description: "This article explores how the Node.js module system & CommonJS works and how to effectively require files in a server running on Node JS"
date: "2020-01-01"
---
<p>I got into studying the Node JS module system to solve the problem of reducing the 5XX count on the company’s mobile website(<a href="/aboutMe">Click to learn more about what I do</a>), this count used to shoot up on every release which required restarting of our NodeJS servers. We all have faced this issue of restarting the node JS server for reflecting our changes in the server code and a popular workaround is to use npm packages such as <a href="https://www.npmjs.com/package/daemon" target="_blank">daemon - npm</a>  or <a href="https://www.npmjs.com/package/forever" target="_blank">forever - npm</a> and that's all great but only during development as in a production environment this would eat up a lot of memory and would generate a lot of 5XXs if you have a large user base.</p><p><span class="highlight">So, the problem was simple, to push code changes on a node server running in a production environment without restarting it...</span>sounds like a solution for this should already exist, well it kind of does but you need to dig deep into the <a href="https://nodejs.org/en/docs/" target="_blank">NodeJS docs</a>.I'll be sharing my solution to this and some statistics of what change it brought to the overall 5XX count after going through a series of concepts about the module management system in NodeJS. Let’s start with CommonJS… </p><div><h2>CommonJS what, why and the how?</h2><p><strong>What is it? </strong>CommonJS is a module formatting system. It is a standard for structuring and organizing the JavaScript code and the reason why I was concerned with it was because CJS has heavy influence on <strong>NodeJS’s module management.</strong><p class="tc"><img class="blogImg" src="/assets/images/confused.gif" alt="A confused gif did not load:("></p></p></div><p><strong>What's that...a module?</strong> Well a module is just a bit of code encapsulated in a file and exported to another file. Modules focus on a single part of the functionality and remain loosely coupled with other files in an application. This is because there are no global or shared variables between modules, as they only communicate via the module.exports object. Any code that you want to be accessible in another file can be a module..so just say bye to using global variables and giving them complex names for protecting their values from being overridden!</p><br><p><strong>How? 
</strong>CommonJS wraps each module in a function called 'require', and includes an object called 'module.exports', which exports code for availability to be required by other modules. All you have to do is add whatever you want access to other files onto the 'exports' object and require the module in the dependent file. the syntax for the require function is "var someVariable = require('moduleID/pathOfModule');". Here’s an example…</p>
<pre class='code code-javascript'><code>
//In multiply.js

function multiply (a, b) {
  return a * b
}
module.exports = multiply

//In someOther.js

var a  =  require('multiply.js').multiply(2,3);

</code>
</pre>

<h2>All about “require”</h2>
<p>The module loading mechanism in Node.js is caching the modules on the first require call. It means that every time you use <strong>require(‘multiply.js’)</strong> you will get the same instance of multiply-module, which ensures that the modules are singleton-like and have the same state across your application.</p>
<p class="tc"><img class="blogImg" src="/assets/images/node-js-require-works.png" alt="A confused gif did not load:("></p>
<p>All these steps are performed whenever we require a module in NodeJS and is pretty self explanatory…but what we need to manipulate a little is the caching part...and yes, one more thing about require is that if the identifier passed to the require function is not a native module or a file reference (beginning with /, ../, ./ or similar), then Node.js will look for installed modules traversing the file system looking for the referenced module in the node_modules folder. </p>
<h2>The solution - Inspecting require.cache</h2>
<p>When we console.log(require.cache) in a js file requiring a file from another module and run it in node js,it looks something like this..</p>
<p class="tc"><img class="blogImg" src="/assets/images/filledRequire.png" alt="Require Obj didn't load on your browser.."></p>
<p>Clearly , require.cache is an object containing multiple nested objects , the key to these nested objects is the filepath which was required in the js-file.In this example <span class="highlight">test.js requires a file  data.json</span></p>
<p>So the file <span calss="highlight">'/Users/rohangrover/Desktop/nodeTest/data.json'</span> has been cached..having data  {
  "someKey": "someData"
}
</p>
<p class="tc"><img class="blogImg" src="/assets/images/knoweverything.jpg" alt="Now you know everything..."></p>

<p>Well now it is pretty straight forward to figure out what to do next..just delete the file path you want node js to reload with the updated code...<span class="highlight">the path needs to be absolute
</span></p>

<pre class='code code-javascript'><code>
delete require.cache['/Users/rohangrover/Desktop/nodeTest/data.json']
</code>
</pre>

<p>Here is a code snippet that allows you to traverse through the entire project structure, written as event emitter(<a href="https://nodejs.org/api/events.html" target="_blank">What's an event emitter?</a>)</p>

<pre class='code code-javascript'><code>
const EventEmitter = require('events');
class cacheHandler extends EventEmitter
{
    parseCachedFiles()
    {
        let procSucess=true,cn=1,data={"files":{}};
        for(let prop in require.cache)
        {
            let cacheStatus=this.clearCache(prop);
            if(cacheStatus==="success")
            {
                data["files"][cn] = prop;
                cn++;
            }
            else
            {
                data["error"] = cacheStatus;
                procSucess=false;
                break;
            }
      }
        if(procSucess)//cache cleaned successfully.
        {
          console.info(data);
        }
        else//cache cleaning failed
        {
          console.error(data);
        }
    }
    clearCache(filePath)
    {
        try{
            delete require.cache[filePath];
            return "success";
        }
        catch(error)
        {
            return error
        }
    }
}

module.exports = cacheHandler;
</code>
</pre>

<p>Create an instance</p>

<pre class='code code-javascript'><code>
var cacheHandler = require('./cacheHandler');
var cData = new cacheHandler();
cData.on('clearCache', cData.parseCachedFiles);
</code>
</pre>

<p>Emit it when there is an update in your server code</p>

<pre class='code code-javascript'><code>
 cData.emit('clearCache');
</code>
</pre>

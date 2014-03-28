##URL Rewriting

The FIS server module gives you the ability to redirect one URL to another. This opens up all sorts of possibilities, you can simulate online url Rules in this machine, like ajax request rewrite. 

 We need to first create a text document called "server.conf" to contain our rules. It must be named exactly that. This would be placed in the root directory of the subsystem. Using this we have access to these directives: redirect, template and rewrite.

 ```
redirect ^\/index\?.* /home/page/index
rewrite ^\/news\?.*tn\=[a-zA-Z0-9]+.* app/data/news.php
 ```

####Rdirect

- Description: Sends an external redirect based on a regular expression match of the current URL
- Syntax: redirect URL-path URL

Make sure use regular expressions. The supplied regular expression is matched against the URL-path.

####Rewrite

- Description: Sends a request to access a file based on a regular expression match of the current URL
- Syntax: redirect URL-path file

If it matches, the server will send a requiest to access the file to get resource(the php file will be executed and return the results). We can simulate ajax request to get JSON data with rewirte.

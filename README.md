# learning-backend

html-scrapper: a CLI application that takes a URL and a CSS selector arguments and prints the text content of the element that matches the selector. Uses Cheerio for parsing HTML

github-searcher: a CLI application that calls the github REST API and returns the repos created within a certain date range in order of most stars to least.

file-renamer: a CLI application that takes the path for a directory and a new file name. The files in the directory are then renamed to the new name in bulk. Uses fs and path.

image-compressor: a CLI application that takes an input directory path and an output directory path. It then compresses the images in the input directory and either stores them in the output directory or the input directory itself. It uses Sharp to compress the images.

todo-app: a CLI application can CRUD todo tasks from the user. It uses the node's pg library to store and manipulate the data in a PostgreSQL database. It has the following features:
"--new": to add a new todo item
"--list [all|pending|done]": to list the todo items
"--done [id]": to update a todo item
"--delete [id]": to delete a todo item
"--help": to list all the available options
"--version": to print the version of the application

# DejaLink

<img src="https://wakapi-qt1b.onrender.com/api/badge/fahad/interval:any/project:dejaLink" 
     alt="Wakapi Time Tracking" 
     title="Spent more than that amount of time spent on this project">

A bookmarklet that removes duplicate plain text links and converts them to clickable links.

## What it Does

Deja Link is a JavaScript bookmarklet that scans a webpage for plain text links, removes duplicates, and converts them to clickable links. It uses a regular expression to match text that looks like a domain or link, and extracts the main domain using the `getDomain` function.

## How it works

- Collects all elements with the class `infringing_url`.
- Loops through each element to extract unique domains using the `getDomain` function.
- Clears the page content.
- Adds back only the unique links to the page with `https://`.

## Installation

To use Deja Link, simply create a new bookmark in your browser and paste the code from dejaLink.txt into the URL field.

## Usage

1. Navigate to a webpage with plain text links.
2. Click the Deja Link bookmark.
3. The page will be updated with clickable links.

## License

[Insert license information here]

## Contributing

Pull requests and issues are welcome!

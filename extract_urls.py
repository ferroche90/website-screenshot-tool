import requests
from bs4 import BeautifulSoup

# Your WordPress site URL
site_url = '' #add the site from where you want to extract the urls to do screenshots

# Function to get all the links from a page
def get_links(url):
    response = requests.get(url)
    soup     = BeautifulSoup(response.text, 'html.parser')
    links    = [a['href'] for a in soup.find_all('a', href=True)]
    return links

# Get all links from the homepage
homepage_links = get_links(site_url)

# Filter links to include only the ones that belong to your site
internal_links = [link for link in homepage_links if link.startswith(site_url)]

# Save the list of URLs to a file
with open('urls.txt', 'w') as file:
    for link in internal_links:
        file.write(f"{link}\n")

print("URLs extracted and saved to urls.txt")

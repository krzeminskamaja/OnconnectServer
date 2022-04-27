import feedparser


# https://joppodcast.libsyn.com/
# class JCORSSFeed:
#    def __init__(self):


def fetch_JCORSS():
    newsfeed = feedparser.parse("https://feeds.libsyn.com/58526/rss")
    podcasts = [feed for feed in newsfeed['entries'] if len(feed) > 0]

    print(len(podcasts))

def main():
    fetch_JCORSS()


if __name__ == '__main__':
    main()

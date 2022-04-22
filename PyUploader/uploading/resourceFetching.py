import feedparser


# https://joppodcast.libsyn.com/
# class JCORSSFeed:
#    def __init__(self):


def main():
    NewsFeed = feedparser.parse("https://feeds.libsyn.com/58526/rss")
    print(NewsFeed.entries)


if __name__ == '__main__':
    main()

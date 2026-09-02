---
title: About These Notes
description: Background on these system design interview notes
---

# About These Notes

These notes are based on the **System Design Interview – An Insider's Guide** books by **Alex Xu** (Vol 1 & Vol 2, 2nd Ed), available on [ByteByteGo](https://bytebytego.com/courses/system-design-interview).

> **Note:** These notes are a work in progress and compiled for personal learning purposes.

## What's Covered

| Volume | Chapters | Topics |
|--------|----------|--------|
| Vol 1  | 1–15     | Scaling, Rate Limiting, Consistent Hashing, Key-Value Store, URL Shortener, Web Crawler, Notification System, News Feed, Chat, Search Autocomplete, YouTube, Google Drive |
| Vol 2  | 16–28    | Proximity Service, Nearby Friends, Google Maps, Distributed Message Queue, Metrics Monitoring, Ad Click Aggregation, Hotel Reservation, Email Service, Object Storage, Gaming Leaderboard, Payment System, Digital Wallet, Stock Exchange |

## How to Use

- Use the **sidebar** to navigate between chapters
- Use **Ctrl+K** (or **⌘K** on Mac) to search across all notes
- Each chapter has an **"On this page"** outline on the right for quick section jumps
- Sections are deep-linkable — bookmark any `#section-anchor`

## Additional Resources

### Rate Limiting
- [Circuit Breaker Pattern](https://martinfowler.com/bliki/CircuitBreaker.html)
- [Uber Rate Limiter](https://github.com/uber-go/ratelimit/blob/master/ratelimit.go)

### Consistent Hashing
- [Consistent Hashing](https://tom-e-white.com/2007/11/consistent-hashing.html)
- [CS168: Introduction and Consistent Hashing](http://theory.stanford.edu/~tim/s16/l/l1.pdf)
- [Apache Cassandra](http://www.cs.cornell.edu/Projects/ladis2009/papers/Lakshman-ladis2009.PDF)
- [Scaling Discord](https://blog.discord.com/scaling-elixir-f9b8e1e7c29b)
- [Google Maglev](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44824.pdf)

### Key-Value Store
- [Amazon Dynamo](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)
- [Cassandra Architecture](https://docs.datastax.com/en/archived/cassandra/3.0/cassandra/architecture/archIntro.html)
- [Google BigTable Architecture](https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf)

### Unique-ID Generator
- [Ticket Servers: Distributed Unique Primary Keys](https://code.flickr.net/2010/02/08/ticket-servers-distributed-unique-primary-keys-on-the-cheap)
- [Snowflake](https://blog.twitter.com/engineering/en_us/a/2010/announcing-snowflake.html)

### Web Crawler
- [Web Crawling Survey](http://infolab.stanford.edu/~olston/publications/crawling_survey.pdf)
- [Google Dynamic Rendering](https://developers.google.com/search/docs/guides/dynamic-rendering)

### Chat Systems
- [How Discord stores billions of messages](https://discord.com/blog/how-discord-stores-billions-of-messages)
- [Flannel: Slack's Edge Cache](https://slack.engineering/flannel-an-application-level-edge-cache-to-make-slack-scale/)

### Search Autocomplete
- [How We Built Prefixy](https://medium.com/@prefixyteam/how-we-built-prefixy-a-scalable-prefix-search-service-for-powering-autocomplete-c20f98e2eff1)
- [Prefix Hash Tree](https://people.eecs.berkeley.edu/~sylvia/papers/pht.pdf)

### YouTube
- [YouTube Architecture](http://highscalability.com/youtube-architecture)
- [Transcoding Videos at Scale](https://www.egnyte.com/blog/2018/12/transcoding-how-we-serve-videos-at-scale/)
- [Netflix Video Encoding at Scale](https://netflixtechblog.com/high-quality-video-encoding-at-scale-d159db052746)

### Google Drive
- [Differential Synchronization](https://neil.fraser.name/writing/sync/)
- [How We've Scaled Dropbox](https://www.youtube.com/watch?v=PE4gwstWhmc)

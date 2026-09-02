
# System Design Interview - An Insider's Guide (Vol 1 and 2)
These notes are based on the System Design Interview books - [Vol 1 and Vol 2 2nd Ed](https://www.goodreads.com/book/show/54109255-system-design-interview-an-insider-s-guide) 

Check the notes here: https://system-design-notes-docs.vercel.app

**Note:** These notes are a work in progress. 


## 🌐 Interactive Web View

This repository now includes a fast, responsive documentation site built with VitePress with full-text search across all chapters.

```bash
# Run locally
npm install
npm run docs:dev

# Build for production (e.g. Vercel)
npm run docs:build
```

---

## 📚 Chapters (in `NOTES/`)

 * [Chapter 1 - Scale From Zero To Millions Of Users](./NOTES/01.%20Scaling/)
 * [Chapter 2 - Back-of-the-envelope Estimation](./NOTES/02.%20Back%20Of%20the%20Envelope%20Estimation/)
 * [Chapter 3 - A Framework For System Design Interviews](./NOTES/03.%20System%20Design%20Framework/)
 * [Chapter 4 - Design A Rate Limiter](./NOTES/04.%20Rate%20Limiter/)
 * [Chapter 5 - Design Consistent Hashing](./NOTES/05.%20Consistent%20Hashing/)
 * [Chapter 6 - Design A Key-Value Store](./NOTES/06.%20Key-Value%20Store/)
 * [Chapter 7 - Design A Unique ID Generator In Distributed Systems](./NOTES/07.%20Unique-Id%20Generator/)
 * [Chapter 8 - Design A URL Shortener](./NOTES/08.%20URL%20Shortener/)
 * [Chapter 9 - Design A Web Crawler](./NOTES/09.%20Web%20Crawler/)
 * [Chapter 10 - Design A Notification System](./NOTES/10.%20Notification%20System/)
 * [Chapter 11 - Design A News Feed System](./NOTES/11.%20News%20Feed%20System/)
 * [Chapter 12 - Design A Chat System](./NOTES/12.%20Chat%20System/)
 * [Chapter 13 - Design A Search Autocomplete System](./NOTES/13.%20Search%20Autocomplete/)
 * [Chapter 14 - Design YouTube](./NOTES/14.%20Youtube/)
 * [Chapter 15 - Design Google Drive](./NOTES/15.%20Google%20Drive/)
 * [Chapter 16 - Proximity Service](./NOTES/16.%20Proximity%20Service/)
 * [Chapter 17 - Nearby Friends](./NOTES/17.%20Nearby%20Friends/)
 * [Chapter 18 - Design Google Maps](./NOTES/18.%20Google%20Maps/)
 * [Chapter 19 - Distributed Message Queue](./NOTES/19.%20Distributed%20Message%20Queue/)
 * [Chapter 20 - Metrics Monitoring and Alerting System](./NOTES/20.%20Metrics%20Monitoring%20and%20Alerting%20System/)
 * [Chapter 21 - Ad Click Event Aggregation](./NOTES/21.%20Ad%20Click%20Event%20Aggregation/)
 * [Chapter 22 - Hotel Reservation System](./NOTES/22.%20Hotel%20Reservation%20System/)
 * [Chapter 23 - Distributed Email Service](./NOTES/23.%20Distributed%20Email%20Service/)
 * [Chapter 24 - S3-like Object Storage](./NOTES/24.%20S3-like%20Object%20Storage/)
 * [Chapter 25 - Real-time Gaming Leaderboard](./NOTES/25.%20Real-time%20Gaming%20Leaderboard/)
 * [Chapter 26 - Payment System](./NOTES/26.%20Payment%20System/)
 * [Chapter 27 - Digital Wallet](./NOTES/27.%20%20Digital%20Wallet/)
 * [Chapter 28 - Stock Exchange](./NOTES/28.%20Stock%20Exchange/)


# Additonal Resources

### Rate Limiting
- [Circuit Breaker Algorithm](https://martinfowler.com/bliki/CircuitBreaker.html)
- [Uber Rate Limiter](https://github.com/uber-go/ratelimit/blob/master/ratelimit.go)


### Consistent Hashing
- [Consistent Hashing](https://tom-e-white.com/2007/11/consistent-hashing.html)
- [CS168: Introduction and Consistent Hashing:]( http://theory.stanford.edu/~tim/s16/l/l1.pdf)
- [Apache Cassandra](http://www.cs.cornell.edu/Projects/ladis2009/papers/Lakshman-ladis2009.PDF)
- [Scaling Discord](https://blog.discord.com/scaling-elixir-f9b8e1e7c29b)
- [Google Maglev](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44824.pdf)


### Key-Value Store
- [Amazon Dynamo](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)
- [Cassandra Architecture](https://docs.datastax.com/en/archived/cassandra/3.0/cassandra/architecture/archIntro.html)
- [Google BigTable Architecture](https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf)
- [Amazon Dynamo DB Internals](https://www.allthingsdistributed.com/2007/10/amazons_dynamo.html)
- [Design Patterns in Amazon Dynamo DB](https://www.youtube.com/watch?v=HaEPXoXVf2k)
- [Internals of Amazon Dynamo DB](https://www.youtube.com/watch?v=yvBR71D0nAQ)


### Unique-ID Generator
- [Ticket Servers: Distributed Unique Primary Keys on the Cheap](https://code.flickr.net/2010/02/08/ticket-servers-distributed-unique-primary-keys-on-the-cheap)
- [Snowflake](https://blog.twitter.com/engineering/en_us/a/2010/announcing-snowflake.html)


### Web Crawler
- [Web Crawling](http://infolab.stanford.edu/~olston/publications/crawling_survey.pdf)
- [Google Dynamic Rendering](https://developers.google.com/search/docs/guides/dynamic-rendering)



### Chat Systems
- [How Discord stores billions of messages](https://discord.com/blog/how-discord-stores-billions-of-messages)
- [Flannel: An Application-Level Edge Cache to Make Slack Scale](https://slack.engineering/flannel-an-application-level-edge-cache-to-make-slack-scale/)


### Search Autocomplete
- [How We Built Prefixy](https://medium.com/@prefixyteam/how-we-built-prefixy-a-scalable-prefix-search-service-for-powering-autocomplete-c20f98e2eff1)
- [Prefix Hash Tree](https://people.eecs.berkeley.edu/~sylvia/papers/pht.pdf)


### Youtube
- [YouTube Architecture](http://highscalability.com/youtube-architecture)
- [YouTube scalability 2012](https://www.youtube.com/watch?v=w5WVu624fY8)
- [Transcoding Videos at Scale](https://www.egnyte.com/blog/2018/12/transcoding-how-we-serve-videos-at-scale/)
- [Facebook Video Broadcasting](https://engineering.fb.com/ios/under-the-hood-broadcasting-live-video-to-millions/)
- [Netflix Video Encoding at Scale](https://netflixtechblog.com/high-quality-video-encoding-at-scale-d159db052746)
- [Netflix Shot based encoding](https://netflixtechblog.com/optimized-shot-based-encodes-now-streaming-4b9464204830)


### Google Drive
- [Differential Synchronization](https://neil.fraser.name/writing/sync/)
- [Differential Synchronization Video](https://www.youtube.com/watch?v=S2Hp_1jqpY8)
- [How We’ve Scaled Dropbox](https://www.youtube.com/watch?v=PE4gwstWhmc&feature=youtu.be)

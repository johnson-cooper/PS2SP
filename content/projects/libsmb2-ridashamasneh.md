---
name: libsmb2
slug: libsmb2-ridashamasneh
summary: "Userspace SMB2/SMB3 client library ported to PlayStation 2 for connecting to modern network shares in homebrew loaders."
categories:
  - libraries
  - networking
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: RidaShamasneh/libsmb2
  repositoryId: '1290082184'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-03T16:33:23Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-04T02:39:53.745Z'
automation:
  sync: true
  github:
    repoEtag: W/"9aa454409670ef8f823ef7ccfc3dcf6d0d84902f47d179ea7cf32482ca465640"
    releasesEtag: '"10b8d79c2d26644f68c0d7e245e812f21f59204eb4412b161f80bbe0eedc8509"'
discovery:
  method: 'fork-network:sahlberg/libsmb2'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

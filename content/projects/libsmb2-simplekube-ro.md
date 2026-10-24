---
name: libsmb2
slug: libsmb2-simplekube-ro
summary: >-
  Userspace SMB2/SMB3 client library ported to PlayStation 2 for connecting to
  modern network shares in homebrew loaders.
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
  repository: simplekube-ro/libsmb2
  repositoryId: '1280411454'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-06-27T13:20:10Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-24T05:54:49.050Z'
automation:
  sync: true
  github:
    repoEtag: W/"5be9f51945835a1aabc8767ea52f048a19612d782e3103ed9809916e1e345098"
    releasesEtag: '"6651f0a326fe50ee327dca388d5c531714ef939da31569d651d528b162d31cc1"'
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

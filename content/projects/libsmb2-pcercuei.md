---
name: libsmb2
slug: libsmb2-pcercuei
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
  repository: pcercuei/libsmb2
  repositoryId: '1189694762'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-03-23T15:20:52Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-03T12:34:45.135Z'
automation:
  sync: true
  github:
    repoEtag: W/"8eb122840113cf825199a0d542f39bda711949c9d1155d98ce31f62fce4388c8"
    releasesEtag: '"8d1d976aff1bb620269f0933c9cf003b4bd5a290796ea6758cfb5e5b986766ba"'
discovery:
  method: 'fork-network:sahlberg/libsmb2'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

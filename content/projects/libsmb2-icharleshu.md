---
name: libsmb2
slug: libsmb2-icharleshu
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
  repository: iCharlesHu/libsmb2
  repositoryId: '1316856428'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-08-01T00:27:17Z'
latestRelease:
  tag: '2026.7'
  name: SMB2 2026.7
  publishedAt: '2026-08-01T00:27:17Z'
  url: 'https://github.com/iCharlesHu/libsmb2/releases/tag/2026.7'
activity:
  lastSynchronized: '2026-10-08T21:20:58.685Z'
automation:
  sync: true
  github:
    repoEtag: W/"100892aa6003ac3cfeefa1ebfde5ed27eee30d7a503c4c9a1f1da5db7743edbf"
    releasesEtag: W/"752919e4a93a98be96a046bddeb7835ac9d8c4582c58e70bdea031270f298c94"
discovery:
  method: 'fork-network:sahlberg/libsmb2'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

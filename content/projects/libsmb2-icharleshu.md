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
  lastSynchronized: '2026-11-14T21:30:41.095Z'
automation:
  sync: true
  github:
    repoEtag: W/"bd89eaac9fc098cec00bea2e7f0f909a7a66c18f679e42503468371b6db8fdf6"
    releasesEtag: W/"2ee051e0df2b398226b0241353ebf5c9e2a64b0f2ab2b260adc74843e2b55549"
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

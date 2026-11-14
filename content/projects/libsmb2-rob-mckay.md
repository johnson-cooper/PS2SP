---
name: libsmb2
slug: libsmb2-rob-mckay
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
  repository: Rob-McKay/libsmb2
  repositoryId: '638813581'
repository:
  archived: false
  defaultBranch: riscos
  stars: 1
  forks: 0
  lastCommit: '2025-12-05T19:09:38Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-14T10:35:16.381Z'
automation:
  sync: true
  github:
    repoEtag: W/"11a0ae787864d2cbe7beff593dacef40ba97704165e4d18ae0a63a69e76f1ae6"
    releasesEtag: '"83febaa07196bb889373057850dbd348d5f7544ded357423bb2914f9d0ac24ca"'
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

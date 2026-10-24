---
name: libsmb2
slug: libsmb2-fkv587
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
  repository: FKV587/libsmb2
  repositoryId: '958316688'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-04-14T06:57:51Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-24T05:54:46.469Z'
automation:
  sync: true
  github:
    repoEtag: W/"6c689a3a671492d04c9b99c97a07cbb922fa0229571d9fbcfe0af471881c5f69"
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

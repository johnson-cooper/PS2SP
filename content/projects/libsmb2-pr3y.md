---
name: libsmb2
slug: libsmb2-pr3y
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
  repository: pr3y/libsmb2
  repositoryId: '841253168'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 1
  lastCommit: '2024-08-17T14:56:34Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-21T19:20:06.256Z'
automation:
  sync: true
  github:
    repoEtag: W/"9bc666caf1fee5d9fc120c1297ff3a8d13ff038782839febcba6b4b699af7419"
    releasesEtag: '"4c931b40b872dc6bf0b1ac9708452c01e314f3374c26fa0dbd2bd31ee8a7dcb7"'
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

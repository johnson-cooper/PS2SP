---
name: libsmb2
slug: libsmb2-netapplabs
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
  repository: NetAppLabs/libsmb2
  repositoryId: '889895090'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 2
  lastCommit: '2026-04-01T05:27:51Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-21T19:20:05.271Z'
automation:
  sync: true
  github:
    repoEtag: W/"544b80491b5fc2b6283b3cfd2b16e806106c3b00dc4dece1ac580bcdc11033e4"
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

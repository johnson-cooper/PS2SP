---
name: libsmb2
slug: libsmb2-dborth
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
  repository: dborth/libsmb2
  repositoryId: '1366788084'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-09-20T02:49:58Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-07T14:34:11.366Z'
automation:
  sync: true
  github:
    repoEtag: W/"a73ab58315d4975ef1cd62d9a943d3a0af6c6223ca0385e80333a0a391226265"
    releasesEtag: '"a8b72fc23874e1701b2920e2e37cd2ca4913fb4b114fa3cba3efba72e700fa11"'
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

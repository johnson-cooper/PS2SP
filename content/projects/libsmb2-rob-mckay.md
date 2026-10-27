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
  lastSynchronized: '2026-10-27T10:35:27.421Z'
automation:
  sync: true
  github:
    repoEtag: W/"77c2444d919104ce288e1f4e1633460bb55df8f94ceb4921bdf6692e71ac39fd"
    releasesEtag: '"2527ec6c5ed97265bdb7d9a1e2a4687a42a2c05b59874f596fef4b44cfba4c30"'
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

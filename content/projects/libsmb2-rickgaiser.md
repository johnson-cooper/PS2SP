---
name: libsmb2
slug: libsmb2-rickgaiser
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
  repository: rickgaiser/libsmb2
  repositoryId: '1030985616'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-08-15T13:35:19Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-07T14:34:12.382Z'
automation:
  sync: true
  github:
    repoEtag: W/"da0477c6aa29598478ec32113c724b6d17d050717fc4025eb938dd39a97cbd3f"
    releasesEtag: '"a8b72fc23874e1701b2920e2e37cd2ca4913fb4b114fa3cba3efba72e700fa11"'
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

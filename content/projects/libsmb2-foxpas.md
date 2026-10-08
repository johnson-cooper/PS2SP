---
name: libsmb2
slug: libsmb2-foxpas
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
  repository: foxpas/libsmb2
  repositoryId: '1108038672'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-12-02T00:21:24Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-08T21:20:58.011Z'
automation:
  sync: true
  github:
    repoEtag: W/"a27bd7d734ac730de6b36aca5e207705688d0b30205aec730eb5497d6be7ed15"
    releasesEtag: '"9d58babb9c0ebce4843e7fb6d1a98d7c2a114a7ab5d177718e3a0fa6f173a756"'
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

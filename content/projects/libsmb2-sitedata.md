---
name: libsmb2
slug: libsmb2-sitedata
summary: "Userspace SMB2/SMB3 client library ported to PlayStation 2 for connecting to modern network shares in homebrew loaders."
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
  repository: sitedata/libsmb2
  repositoryId: '1102632282'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-11-03T07:38:19Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-02T20:45:45.590Z'
automation:
  sync: true
  github:
    repoEtag: W/"4e1b1226e7002c97f80650facfae200460b0422067c449b94544c74719a81da0"
    releasesEtag: '"ada49b6b807e93177c0d32f27098e7708d0c5756c8bde55ace7056d090b979e9"'
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

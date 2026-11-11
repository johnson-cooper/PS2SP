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
  lastSynchronized: '2026-11-11T21:58:45.182Z'
automation:
  sync: true
  github:
    repoEtag: W/"93fee534cf0db846d111d23cc0e4c483844d5e75ac6ba575deebab00d6e11354"
    releasesEtag: W/"203e90f32df3fad6acd9017486feb1aa3ee81992e50197f25f268d79cc08edb8"
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

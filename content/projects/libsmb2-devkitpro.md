---
name: libsmb2
slug: libsmb2-devkitpro
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
  repository: devkitPro/libsmb2
  repositoryId: '1126331800'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 1
  lastCommit: '2026-01-01T22:41:57Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-13T00:40:11.491Z'
automation:
  sync: true
  github:
    repoEtag: W/"6272f1b68db32540a6f869be446fc932c5e4ea0fdfb1d3ce1d1a9c1497f0b7a4"
    releasesEtag: '"fec52950ce930fe9a3d66b1fb0477b55f0575b695b49fda84e7bffe73dbd07ab"'
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

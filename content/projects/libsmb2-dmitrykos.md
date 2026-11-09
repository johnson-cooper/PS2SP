---
name: libsmb2
slug: libsmb2-dmitrykos
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
  repository: dmitrykos/libsmb2
  repositoryId: '957438935'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-03-25T01:14:10Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-09T06:29:17.492Z'
automation:
  sync: true
  github:
    repoEtag: W/"724c140066ab56d2967f896ad09f4ca65972278192621216b6b62549c8a88fc1"
    releasesEtag: '"2fe2afac4e4c51d345b0b3b79c7fb7f05cfb2cad022de484e373ed5d4899b781"'
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

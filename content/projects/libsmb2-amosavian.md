---
name: libsmb2
slug: libsmb2-amosavian
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
  repository: amosavian/libsmb2
  repositoryId: '867497474'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 2
  lastCommit: '2025-12-24T05:36:36Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-01T11:14:53.554Z'
automation:
  sync: true
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

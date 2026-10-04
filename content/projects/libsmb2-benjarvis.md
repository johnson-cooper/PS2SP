---
name: libsmb2
slug: libsmb2-benjarvis
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
  repository: benjarvis/libsmb2
  repositoryId: '1056534392'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-09-14T10:03:10Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-01T13:15:47.130Z'
automation:
  sync: true
  github:
    repoEtag: W/"bd9bdc44232a8fd08048dea5f317ebf7d58536508746de40d852d06d70a33830"
    releasesEtag: '"1d2f4be45a34c122856e02012cf31ce6a7bd6500f10dab956ddfe70ae9963533"'
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

---
name: libsmb2
slug: libsmb2-netapplabs
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
  repository: NetAppLabs/libsmb2
  repositoryId: '889895090'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 2
  lastCommit: '2026-04-01T05:27:51Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-17T19:24:53.847Z'
automation:
  sync: true
  github:
    repoEtag: W/"d0a1fc1575f9f55961ebb8e1f5875a8bccce6eaa2a60ab7b2f39957c9d182582"
    releasesEtag: '"bcbb9456270ba23e1365e1daa35a0f37d35ce04dc4ed3bd2b448dfedec33e05e"'
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

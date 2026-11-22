---
name: libsmb2
slug: libsmb2-amosavian
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
  lastSynchronized: '2026-11-22T03:16:04.917Z'
automation:
  sync: true
  github:
    repoEtag: W/"be44a994fcfbf99ddf56b33f2534f2741525a53d77dbadb035eab09868bbd210"
    releasesEtag: '"0343964b28fb2eda143511ab450b2bffb6215822f235192fb1be4cc3a8b0fb1f"'
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

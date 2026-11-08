---
name: android_external_libsmb2
slug: android-external-libsmb2-aera-recovery
summary: SMB2/3 userspace client
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
  repository: AERA-Recovery/android_external_libsmb2
  repositoryId: '1424216279'
repository:
  archived: false
  defaultBranch: aera-16.0
  stars: 0
  forks: 0
  lastCommit: '2026-10-18T09:45:25Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T15:12:59.873Z'
automation:
  sync: true
  github:
    repoEtag: W/"46618d9a633877ceadb09cde8ec3f5dc5d627b8a3dfc18f026c1c33ca5717bc7"
    releasesEtag: '"92e2f2afde06cfa79fae294d94e1123ac5d56a202679866d4fecc6991c5d3df0"'
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.

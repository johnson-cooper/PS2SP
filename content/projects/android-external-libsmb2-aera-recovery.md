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
  lastSynchronized: '2026-11-02T15:52:29.200Z'
automation:
  sync: true
  github:
    repoEtag: W/"6d52c4f1c90b8812cb42deccf6d8e723d8289004847b6cfd3ec5a209dd5e4d86"
    releasesEtag: '"a9f324b2a61da9854a428d9d24f3a16e20fe5f6fad6077a79cab1349ea45188c"'
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

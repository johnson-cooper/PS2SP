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
  lastSynchronized: '2026-11-11T15:12:00.551Z'
automation:
  sync: true
  github:
    repoEtag: W/"7b9f003e4433927dc1242b9f295596d47261cb8a798002e68110817668d718b4"
    releasesEtag: '"4429150f34678cedd74c64579b30809858d8cdb312b1ed77eb714a79c20f6fb1"'
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

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
  lastSynchronized: '2026-10-22T15:16:54.786Z'
automation:
  sync: true
  github:
    repoEtag: W/"bd5791f098ac67b9a26972eda4d764fa02fdc6dc4c376525a4a4321c105d0b0d"
    releasesEtag: '"99dfab16a539fcae500c3d0e749ddca734427a46367bf6b00845c1e5b0a36b69"'
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

---
name: sd2psXtd_firmware
slug: sd2psxtd-firmware-warksmith
summary: PlayStation 2 software project discovered by PS2SP.
categories:
  - hardware
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://sd2psxtd.github.io'
source:
  provider: github
  repository: Warksmith/sd2psXtd_firmware
  repositoryId: '1440747873'
repository:
  archived: false
  defaultBranch: game2folder-wildcards-default
  stars: 0
  forks: 0
  lastCommit: '2026-11-03T03:11:31Z'
latestRelease:
  tag: v0.3
  name: v0.3 - GameID Defaults & Wildcards
  publishedAt: '2026-11-03T03:07:48Z'
  url: 'https://github.com/Warksmith/sd2psXtd_firmware/releases/tag/v0.3'
activity:
  lastSynchronized: '2026-11-12T03:01:28.382Z'
automation:
  sync: true
  github:
    repoEtag: W/"1bc61ada124df78baeacf154216aede4308f2491670594a6cb34ccf053f7ddd9"
    releasesEtag: W/"7833036626c89737a6fd73e90e268845bc1a197c8063afbcf92c48b8f61f4e28"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sd2psx/firmware'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: sd2psXtd/firmware
  source: sd2psx/firmware
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
